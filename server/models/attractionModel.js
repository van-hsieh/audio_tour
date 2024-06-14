const db = require("../config/db");

class Attraction {
  static async getAllAttractions() {
    try {
      const result = await db.query("SELECT * FROM attractions");
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
