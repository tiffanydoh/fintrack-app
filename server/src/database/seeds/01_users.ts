import { Knex } from "knex";

const users = require("./data/users.json");

exports.seed = async function (knex: Knex): Promise<any> {
  await knex("users").insert(users).onConflict("id").ignore();
};
