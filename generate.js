const fs = require("fs");
const path = require("path");
const { faker } = require("@faker-js/faker");
const config = require("./presets/transferencias_bancarias.config"); // Change this to your config file

const OUTPUT_DIR = path.join(__dirname, "output");
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR);

const { outputFormat, rowCount, fileName, columns } = config;
const outputPath = path.join(OUTPUT_DIR, `${fileName}.${outputFormat}`);

let idCounter = 1;

function generateValue(col) {
  switch (col.type) {
    case "int":
      if (col.values) return faker.helpers.arrayElement(col.values);
      return col.autoIncrement ? idCounter++ : faker.number.int({ min: col.min ?? 0, max: col.max ?? 100 });

    case "float":
      if (col.values) return faker.helpers.arrayElement(col.values);
      return faker.number.float({ min: col.min ?? 0, max: col.max ?? 1000, precision: 0.01 });

    case "boolean":
      return faker.datatype.boolean();

    case "string":
      if (col.values) return faker.helpers.arrayElement(col.values);
      if (col.faker) {
        const [ns, method] = col.faker.split(".");
        return faker?.[ns]?.[method]?.() ?? `INVALID_FAKER(${col.faker})`;
      }
      return faker.lorem.word();

    default:
      return null;
  }
}

function generateRow() {
  const row = {};
  for (const col of columns) {
    row[col.name] = generateValue(col);
  }
  return row;
}

console.log(`🚀 Generando ${rowCount.toLocaleString()} registros en formato ${outputFormat.toUpperCase()}...`);
const stream = fs.createWriteStream(outputPath, { encoding: "utf8" });

if (outputFormat === "csv") {
  stream.write(columns.map(c => c.name).join(",") + "\n");
}
(async () => {
  for (let i = 0; i < rowCount; i++) {
    const row = generateRow();

    if (i > 0 && i % 500000 === 0) {
      console.log(`🟢 Generadas ${i.toLocaleString()} filas...`);
    }

    let line = "";
    if (outputFormat === "csv") {
      line = columns.map(c => JSON.stringify(row[c.name])).join(",") + "\n";
    } else if (outputFormat === "jsonl") {
      line = JSON.stringify(row) + "\n";
    } else if (outputFormat === "json") {
      if (i === 0) line = "[\n";
      line += "  " + JSON.stringify(row);
      line += i === rowCount - 1 ? "\n]\n" : ",\n";
    }

    if (!stream.write(line)) {
      await new Promise(resolve => stream.once("drain", resolve));
    }
  }

  stream.end(() => {
    console.log(`✅ Dataset generado con éxito: ${outputPath}`);
  });
})();

