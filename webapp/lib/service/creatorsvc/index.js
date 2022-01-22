import { ObjectId } from 'mongodb';

import { getDbConnection } from '../../data/mongodb';
import { getLogger } from '../../../utils/logger';

export async function findCreatorById(creatorid) {
    try {
      // connect to the database
      let { db } = await getDbConnection();

      // fetch the creator by address
      let data = await db.collection('creator').findOne({'creatorid': creatorid});
      if(!data) {
        data = {};
      }

      // return result
      return {
        payload: data, 
        success: true,
      };
    } catch (error) {
      // log out error
      getLogger().debug('findCreators error:', error);
      // return result
      return {
        payload: {},
        success: false, 
        errorMessage: new Error(error).message,
      };
    }
};

export async function updateCreator(data) {
  try {
    // connect to the database
    let { db } = await getDbConnection();

    // update the published status of the creator
    await db.collection('creator').update({ 'creatorid': data.creatorid }, {
      $set: {
        'created':      data.address,
        'updated':      data.updated,
        'name':         data.name,
        'avatar':       data.avatar,
        'about':        data.about,
        'creatorid':    data.creatorid,
        'transactions': data.transactions,
      }
    }, { upsert:true });

    // return a message
    return {
      success: true,
      payload: data,
    };
  } catch (error) {
    // log out error
    getLogger().debug('updateCreator error:', error);
    // return result
    return {
      success: false,
      payload: {},
      errorMessage: new Error(error).message,
    };
  }
};

export async function deleteCreator(creator) {
  try {
    // Connecting to the database
    let { db } = await getDbConnection();

    // Deleting the creator
    await db.collection('creator').deleteOne({ '_id': new ObjectId(creator['_id']) });

    // return a message
    return {
      success: true,
      payload: creator,
    };
  } catch (error) {
    // log out error
    getLogger().debug('deletecreator error:', error);
    // return result
    return {
      success: false,
      payload: {},
      errorMessage: new Error(error).message,
    };
  }
};
