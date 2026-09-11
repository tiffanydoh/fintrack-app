import { Knex } from "knex";

const budgets = require("./data/budgets.json");

exports.seed = async function (knex: Knex): Promise<any> {
  await knex("budgets").insert(budgets).onConflict("id").ignore();
};
