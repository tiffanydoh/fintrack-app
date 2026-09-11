import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("budgets", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users").notNullable();
    table
      .integer("category_id")
      .references("id")
      .inTable("categories")
      .notNullable();
    table.decimal("amount_limit", 14, 2).notNullable();
    table.string("period").defaultTo("monthly");
    table.date("start_date").notNullable();
    table.date("end_date").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("budgets");
}
