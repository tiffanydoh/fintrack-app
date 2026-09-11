import { Knex } from "knex";

const categories = require("./data/categories.json");

exports.seed = async function (knex: Knex): Promise<any> {
  await knex("categories").insert(categories).onConflict("id").ignore();
};
