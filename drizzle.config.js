export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://neondb_owner:rJUqgBv4LM8u@ep-purple-field-a17kuqe7.ap-southeast-1.aws.neon.tech/threadcraft_ai?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:rJUqgBv4LM8u@ep-purple-field-a17kuqe7.ap-southeast-1.aws.neon.tech/threadcraft_ai?sslmode=require",
  },
};
