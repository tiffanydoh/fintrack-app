import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("accounts", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users").notNullable();
    table.string("name").notNullable();
    table.string("type").notNullable();
    table.decimal("balance", 14, 2).defaultTo(0);
    table.string("currency");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("accounts");
}
