import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db = null

export async function getDb() {
  if (!db) {
    db = await open({
      filename: './data/database.sqlite',
      driver: sqlite3.Database
    })
  }
  return db
}
