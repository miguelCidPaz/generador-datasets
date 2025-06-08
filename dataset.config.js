module.exports = {
  outputFormat: "csv", // csv | json | jsonl
  rowCount: 100000,
  fileName: "demo_dataset",
  columns: [
    { name: "id", type: "int", autoIncrement: true },
    { name: "name", type: "string", faker: "person.firstName" },
    { name: "email", type: "string", faker: "internet.email" },
    { name: "price", type: "float", min: 0, max: 1000 },
    { name: "isActive", type: "boolean" }
  ]
}