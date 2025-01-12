import Database from "better-sqlite3";

const db = new Database("./icd.db", {
  verbose: console.log,
  fileMustExist: true,
});

export function getInitialBlocks() {
  const stmt = db.prepare(
      `SELECT * FROM icd 
WHERE BlockId is NULL and ClassKind = 'chapter'
ORDER BY BlockId`
  );
  return stmt.all();
}
