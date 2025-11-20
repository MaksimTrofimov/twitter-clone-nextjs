import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined.');
}

// Global caching for Next.js hot reload (prevents multiple connections)
let cached = global.mongooseConnection;

if (!cached) {
  cached = global.mongooseConnection = { conn: null, promise: null };
}

export async function connectDB() {
  // Already connected
  if (cached.conn) {
    return cached.conn;
  }

  // Create connection promise if not created yet
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  // Await connection promise
  cached.conn = await cached.promise;
  return cached.conn;
}
