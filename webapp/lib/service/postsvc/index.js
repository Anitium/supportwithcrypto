import { ObjectId } from 'mongodb';

import { getDbConnection } from '../../data/mongodb';
import { getLogger } from '../../../utils/logger';

export async function findPosts() {
    try {
      // connect to the database
      let { db } = await getDbConnection();

      // fetch the posts
      let posts = await db
          .collection('post')
          .find({})
          .sort({ published: -1 })
          .toArray();

      // return result
      return {
        payload: posts, 
        success: true,
      };
    } catch (error) {
      // log out error
      getLogger().debug('findPosts error:', error);
      // return result
      return {
        payload: [],
        success: false, 
        errorMessage: new Error(error).message,
      };
    }
};

export async function insertPost(post) {
  try {
    // connect to the database
    let { db } = await getDbConnection();

    // add the post
    await db.collection('post').insertOne(post);
    
    // return a message
    return {
      success: true,
    };
  } catch (error) {
    // log out error
    getLogger().debug('insertPost error:', error);
    // return result
    return {
      success: false, 
      errorMessage: new Error(error).message,
    };
  }
};

export async function updatePost(post) {
  try {
    // connect to the database
    let { db } = await getDbConnection();

    // update the published status of the post
    await db.collection('post').updateOne({
      '_id': new ObjectId(post['_id']),
    }, { 
      $set: {
        'title': post.title,
        'comment': post.comment,
      }
    });

    // return a message
    return {
      success: true,
    };
  } catch (error) {
    // log out error
    getLogger().debug('updatePost error:', error);
    // return result
    return {
      success: false, 
      errorMessage: new Error(error).message,
    };
  }
};

export async function deletePost(post) {
  try {
    // Connecting to the database
    let { db } = await getDbConnection();

    // Deleting the post
    await db.collection('post').deleteOne({
      '_id': new ObjectId(post['_id']),
    });

    // return a message
    return {
      success: true,
    };
  } catch (error) {
    // log out error
    getLogger().debug('deletePost error:', error);
    // return result
    return {
      success: false, 
      errorMessage: new Error(error).message,
    };
  }
};
