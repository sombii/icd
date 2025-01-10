import Database from 'better-sqlite3';

const db = new Database('./icd.db', { verbose: console.log, fileMustExist:true });
export function getAllUsers() {
  const stmt = db.prepare('SELECT * FROM icd');
  return stmt.all();
}
