import { Handler } from "aws-lambda";
import { Example } from "@sst-webstorm-debug/core/example";

export const handler: Handler = async (_event) => {
  const x = "blah";
  return {
    statusCode: 200,
    body: `${Example.hello()}`,
  };
};
