import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * ASYCUDA Services Requests Table
 * Stores all service requests submitted through the ASYCUDA services page
 */
export const asycudaRequests = mysqlTable("asycuda_requests", {
  id: int("id").autoincrement().primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  companyName: varchar("company_name", { length: 255 }),
  phone: varchar("phone", { length: 50 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  serviceType: mysqlEnum("service_type", [
    "preliminary_declaration",
    "final_declaration",
    "document_review",
    "hs_code_audit",
    "consultation",
  ]).notNull(),
  productName: varchar("product_name", { length: 500 }).notNull(),
  productDescription: text("product_description"),
  countryOfOrigin: varchar("country_of_origin", { length: 100 }),
  goodsValue: varchar("goods_value", { length: 100 }),
  hsCode: varchar("hs_code", { length: 50 }),
  notes: text("notes"),
  attachments: json("attachments").$type<Array<{ name: string; url: string; key: string; mimeType: string; size: number }>>(),
  status: mysqlEnum("status", ["new", "in_review", "completed", "rejected"]).default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type AsycudaRequest = typeof asycudaRequests.$inferSelect;
export type InsertAsycudaRequest = typeof asycudaRequests.$inferInsert;
