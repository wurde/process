/**
 * Dependencies
 */

import path from 'path';
import sqlite3 from 'sqlite3';

/**
 * Constant
 */

const DB_PATH = path.resolve(__dirname, '../../../db.sqlite3');

/**
 * Define test helper
 */

function setupTestDB(done) {
  const db = new sqlite3.Database(DB_PATH);

  db.exec(`
    DELETE FROM model;
    INSERT INTO model (title) VALUES ("Restaurant");
  `, () => {
    db.close(() => done())
  });
}

/**
 * Export test helper
 */

export default setupTestDB;
