export const api = new sst.aws.ApiGatewayV2("MyWebApi", {
  accessLog: {
    retention: "1 year",
  },
})

api.route(
  "GET /",
  {
    handler: "packages/functions/src/api.handler",
    runtime: "nodejs22.x",
  }
)
