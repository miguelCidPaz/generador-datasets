# 📂 generador-datasets

Herramienta simple y extensible para generar datasets sintéticos en formatos comunes como **CSV**, **JSON** y **JSONL**.

Ideal para:

- Validar pipelines de datos
- Realizar pruebas de carga
- Simular esquemas realistas
- Probar motores de profiling, ML o análisis estructural

---

## 🚀 ¿Qué incluye?

- Generación en **streaming**, sin saturar memoria
- Soporte para los formatos: `csv`, `json` y `jsonl`
- Definición de columnas vía `dataset.config.js`
- Integración con [faker.js](https://fakerjs.dev/) para datos sintéticos realistas
- Soporte para `faker`, `values` fijos, rangos numéricos y autoincremento

---

## 📦 Instalación

```bash
git clone https://github.com/tu-usuario/generador-datasets.git
cd generador-datasets
npm install
```

---

## ⚙️ Uso

1. Edita el archivo `dataset.config.js` o usa uno de los presets.
2. Ejecuta:

```bash
npm run generate
```

3. El archivo generado aparecerá en la carpeta `output/`.

---

## 🧠 Estructura de configuración (`dataset.config.js`)

```js
module.exports = {
  outputFormat: "csv", // "csv", "json", "jsonl"
  rowCount: 100000,
  fileName: "mi_dataset",
  columns: [
    { name: "id", type: "int", autoIncrement: true },
    { name: "nombre", type: "string", faker: "person.firstName" },
    { name: "email", type: "string", faker: "internet.email" },
    { name: "precio", type: "float", min: 0, max: 1000 },
    { name: "activo", type: "boolean" }
  ]
}
```

---

## 🧩 Tipos soportados

| Tipo      | Opciones adicionales                        |
|-----------|---------------------------------------------|
| `int`     | `autoIncrement`, `min`, `max`, `values`     |
| `float`   | `min`, `max`, `values`                      |
| `boolean` | —                                           |
| `string`  | `faker`, `values`                           |

---

## 📁 Presets disponibles

En la carpeta `/presets/` se incluyen ejemplos listos para usar:

- `cuentas_bancarias.config.js` – Simulación de cuentas cliente
- `transferencias_bancarias.config.js` – Listado de transacciones
- `actividad_sectorial.config.js` – Datos por sector económico

Puedes importar cualquiera con:

```js
const config = require("./presets/cuentas_bancarias.config");
```

---

## 🔄 Extensión futura

Este proyecto está pensado para extenderse fácilmente. Algunas ideas:

- Soporte para nulos (`nullable`, `nullRate`)
- Timestamps con formatos personalizados
- Corrupción intencional de datos
- Generación masiva con CLI por lote
- Generador de Parquet y soporte directo para perfiles ML

---

## ✅ Licencia

Distribuido bajo licencia **Apache 2.0**. Puedes usarlo, adaptarlo y compartirlo libremente.
