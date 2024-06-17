const db = require("../config/db");

class Attraction {
  static async getAllAttractions(limit = 20, offset = 0) {
    try {
      const result = await db.query(
        "SELECT * FROM attractions LIMIT $1 OFFSET $2",
        [limit, offset]
      );
      return result.rows;
    } catch (err) {
      throw err;
    }
  }

  static async getAttractionById(id) {
    try {
      const result = await db.query("SELECT * FROM attractions WHERE id = $1", [
        id,
      ]);
      return result.rows[0];
    } catch (err) {
      throw err;
    }
  }

  static async searchAttractionsByName(name) {
    try {
      const result = await db.query(
        "SELECT * FROM attractions WHERE name ILIKE $1",
        [`%${name}%`]
      );
      return result.rows;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Attraction;
