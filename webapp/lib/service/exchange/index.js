import { getLogger } from '../../../utils/logger';
import { getDbConnection } from '../../data/mongodb';
import { cryptoRateFromExchange } from '../exchangemarket'

export async function cryptoRate(symbol) {
    try {
      // connect to the database
      let { db } = await getDbConnection();
      
      // If no rate we better set a higher value
      let rate = 1000000;
      let updated = true;

      // fetch latest rate in database
      let rates = await db.collection('exchange').findOne({'exchangerate-id': 'current-rate'});
      
      if(needsUpdate(rates)){
        getLogger().debug(`Rate needs update`);
        updated = false;
        let response = await cryptoRateFromExchange();
        if(response && response.success){
          updated = true;
          rates = response.payload;
          await updateCryptoRate(rates);
          getLogger().debug(`Rate updated`);
        }
      }

      rate = rates.data[symbol].quote.USD.price;
      getLogger().debug(`New network ${symbol} and rate ${rate}`);

      return {
        payload: rate, 
        updated: updated,
        success: true,
      };
    } catch (error) {
      // log out error
      getLogger().debug('Rates are not available:', error);
      // return result
      return {
        payload: {},
        success: false, 
        errorMessage: new Error(error).message,
      };
    }
};

export async function updateCryptoRate(data) {
  try {
    // connect to the database
    let { db } = await getDbConnection();

    // normalize data (Dates)
    data = normalizeData(data);
    
    // update the current exchange rate
    await db.collection('exchange').update({ 'exchangerate-id': 'current-rate'}, {
      $set: {
        'data':    data.data,
        'status':  data.status,
      }
    }, { upsert:true });
    
    // return a message
    return {
      success: true,
      payload: data,
    };
  } catch (error) {
    // log out error
    getLogger().debug('updateCryptoRate error:', error);
    // return result
    return {
      success: false,
      payload: {},
      errorMessage: new Error(error).message,
    };
  }
};

function normalizeData(data){
  data.status.timestamp = new Date(data.status.timestamp);
  return data;
}

function needsUpdate(data){
  var fiveMinuteAgo = new Date( Date.now() - 1000 * (60 * 5) )
  return !data || data.status.timestamp < fiveMinuteAgo;
}
