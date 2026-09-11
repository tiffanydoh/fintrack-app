import { Knex } from "knex";

const transactions = require("./data/transactions.json");

exports.seed = async function (knex: Knex): Promise<any> {
  await knex("transactions").insert(transactions).onConflict("id").ignore();
};
