import axios from 'axios';
import { getLogger } from '../../../utils/logger';

const EXCHANGE_URI = process.env.EXCHANGE_URI;
const EXCHANGE_TOKEN = process.env.EXCHANGE_TOKEN;
const TOKEN_NAME = process.env.TOKEN_NAME;

// check the EXCHANGE_URI URI
if (!EXCHANGE_URI) {
  throw new Error('Define the EXCHANGE_URI environmental variable');
}

// check the EXCHANGE_TOKEN DB
if (!EXCHANGE_TOKEN) {
  throw new Error('Define the EXCHANGE_TOKEN environmental variable');
}

// check the TOKEN_NAME URI
if (!TOKEN_NAME) {
  throw new Error('Define the TOKEN_NAME environmental variable');
}

getLogger().info(`EXCHANGE_URI: ${EXCHANGE_URI}`);
getLogger().info(`EXCHANGE_TOKEN: ${EXCHANGE_TOKEN}`);
getLogger().info(`TOKEN_NAME: ${TOKEN_NAME}`);

export async function cryptoRateFromExchange() {

  try {
    // Connecting to the Exchange Market
    getLogger().debug(`Exchange Market Api call`);
    let response = await axios.get(`${EXCHANGE_URI}?symbol=BTC,ETH,SOL,MATIC&convert=USD`, {
      headers: {
        [TOKEN_NAME] : EXCHANGE_TOKEN,
      },
    });
    return {
      success: true,
      payload: response.data,
    };

  } catch (error) {
    // log out error
    getLogger().debug('Exchange Market Error error:', error);
    // return result
    return {
      success: false,
      payload: {},
      errorMessage: new Error(error).message,
    };
  }
}
