module.exports = {
  outputFormat: "json",
  rowCount: 50000000,
  fileName: "transferencias_bancarias",
  columns: [
    { name: "id", type: "int", autoIncrement: true },
    { name: "fromAccount", type: "string", faker: "finance.accountNumber" },
    { name: "toAccount", type: "string", faker: "finance.accountNumber" },
    { name: "amount", type: "float", min: 1, max: 99999 },
    { name: "currency", type: "string", faker: null, values: ["EUR", "USD", "BTC", "MXN"] },
    { name: "timestamp", type: "string", faker: "date.recent" },
    { name: "description", type: "string", faker: "commerce.productDescription" }
  ]
}
