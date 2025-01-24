import { Resource } from "sst";
import { Example } from "@sst-webstorm-debug/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
