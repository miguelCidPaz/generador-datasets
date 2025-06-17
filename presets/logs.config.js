module.exports = {
  outputFormat: "json",
  rowCount: 20000000,
  fileName: "api_logs_genericos",
  columns: [
    { name: "logId", type: "int", autoIncrement: true },
    { name: "timestamp", type: "string", faker: "date.recent" },
    { name: "endpoint", type: "string", faker: null, values: [
        "/auth/login",
        "/auth/logout",
        "/user/profile",
        "/user/update",
        "/product/search",
        "/product/details",
        "/cart/add",
        "/cart/remove",
        "/checkout/init",
        "/checkout/complete"
      ]
    },
    { name: "statusCode", type: "int", faker: null, values: [200, 201, 204, 400, 401, 403, 404, 500] },
    { name: "latencyMs", type: "int", min: 5, max: 2000 },
    { name: "authMethod", type: "string", faker: null, values: ["OAuth", "JWT", "Basic", "None"] },
    { name: "deviceId", type: "string", faker: "datatype.uuid" },
    { name: "userAgent", type: "string", faker: "internet.userAgent" }
  ]
}
