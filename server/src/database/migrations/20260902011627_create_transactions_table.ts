import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("transactions", (table) => {
    table.integer("id").primary();
    table
      .integer("account_id")
      .references("id")
      .inTable("accounts")
      .notNullable();
    table
      .integer("category_id")
      .references("id")
      .inTable("categories")
      .nullable();
    table.decimal("amount", 14, 2).notNullable();
    table.string("type").notNullable();
    table.string("description").nullable();
    table.date("transaction_date").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("transactions");
}
