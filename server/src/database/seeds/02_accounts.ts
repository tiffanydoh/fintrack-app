import { Knex } from "knex";

const accounts = require("./data/accounts.json");

exports.seed = async function (knex: Knex): Promise<any> {
  await knex("accounts").insert(accounts).onConflict("id").ignore();
};
