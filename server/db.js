const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./db.sqlite"
  }
});

const initDB = async () => {
  const usersExist = await knex.schema.hasTable("users");
  if (!usersExist) {
    await knex.schema.createTable("users", table => {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("passwd");
      table.string("role");
    });
  }

  const totalUsers = await knex("users").select(knex.raw("count(*) as total"));
  if (totalUsers[0].total === 0) {
    await knex
      .insert({
        name: "admin",
        email: "admin@admin.com",
        passwd: "admin",
        role: 'admin'
      })
      .into("users");
  }
};
initDB();

module.exports = knex;
