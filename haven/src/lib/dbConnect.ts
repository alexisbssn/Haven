import mongoose from "mongoose"



declare global {
  var mongoose: any // This must be a `var` and not a `let / const`
}

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }
  if (!cached.promise) {
    console.log("Initializing models...")
    console.log("Connecting to MongoDB...")
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose.connect(MONGODB_URI, opts as mongoose.ConnectOptions).then((mongoose) => {
      return mongoose
    })
  }
  try {
    cached.conn = await cached.promise
    console.log("Connected to MongoDB")
  } catch (e) {
    console.log("Error connecting to MongoDB", e)
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect
