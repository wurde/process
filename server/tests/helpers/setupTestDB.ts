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

  db.exec(
    `
    DELETE FROM model;
    INSERT INTO model (title) VALUES ("Restaurant");
    INSERT INTO model (title) VALUES ("Podcast");
    INSERT INTO model (title) VALUES ("Cement Manufacturing");

    DELETE FROM activities;
    INSERT INTO activities (title) VALUES ("Quarying limestone" },
    INSERT INTO activities (title) VALUES ("Crushisg limestone" },
    INSERT INTO activities (title) VALUES ("Blending mix" },
    INSERT INTO activities (title) VALUES ("Preheating towers" },
    INSERT INTO activities (title) VALUES ("Kiln" },
    INSERT INTO activities (title) VALUES ("Slinker cooler" },
    INSERT INTO activities (title) VALUES ("Grinding mill" },
    INSERT INTO activities (title) VALUES ("Storage" },
    INSERT INTO activities (title) VALUES ("Shipment" }
  `,
    () => {
      db.close(() => done());
    }
  );
}

/**
 * Export test helper
 */

export default setupTestDB;
