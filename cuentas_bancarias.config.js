module.exports = {
  outputFormat: "csv",
  rowCount: 30000000,
  fileName: "cuentas_bancarias",
  columns: [
    { name: "id", type: "int", autoIncrement: true },
    { name: "fullName", type: "string", faker: "person.fullName" },
    { name: "email", type: "string", faker: "internet.email" },
    { name: "country", type: "string", faker: "location.country" },
    { name: "accountType", type: "string", faker: null, values: ["Ahorro", "Corriente", "Nómina", "Offshore", "Cripto"] },
    { name: "balance", type: "float", min: -2000, max: 50000 },
    { name: "isBlocked", type: "boolean" }
  ]
}
