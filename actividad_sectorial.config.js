module.exports = {
  outputFormat: "jsonl",
  rowCount: 20000000, // 20 millones de registros
  fileName: "actividad_sectorial",
  columns: [
    { name: "id", type: "int", autoIncrement: true },
    { name: "sector", type: "string", faker: null, values: ["Energía", "Construcción", "Armamento", "Agricultura", "Criptoactivos", "Hostelería", "Gobierno"] },
    { name: "actividadRegistrada", type: "boolean" },
    { name: "movimientosMensuales", type: "int", min: 0, max: 1200 },
    { name: "variaciónAnual", type: "float", min: -40.0, max: 60.0 },
    { name: "riesgo", type: "string", faker: null, values: ["Bajo", "Moderado", "Alto", "No declarado"] }
  ]
}
