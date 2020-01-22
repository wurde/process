/**
 * Dependencies
 */

import sqlite3 from 'sqlite3';

/**
 * Define test helper
 */

function setupTestDB() {
  const db = new sqlite3.Database('../../test.sqlite3');

  console.log("setupTestDB...");
}

/**
 * Export test helper
 */

export default setupTestDB;
