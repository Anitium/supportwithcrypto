import { MongoClient } from 'mongodb';

import { getLogger } from '../../../utils/logger';

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

// check the MongoDB URI
if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environmental variable');
}

// check the MongoDB DB
if (!DB_NAME) {
  throw new Error('Define the DB_NAME environmental variable');
}

getLogger().info(`MONGODB_URI: ${MONGODB_URI}`);
getLogger().info(`DB_NAME: ${DB_NAME}`);

let cachedClient = null;
let cachedDb = null;

export async function getDbConnection() {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb,
    };
  }

  // set the connection options
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // Connect to cluster
  let client = new MongoClient(MONGODB_URI, opts);
  await client.connect();
  let db = client.db(DB_NAME);

  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb,
  };
}
