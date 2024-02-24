import { createReadStream } from "node:fs";
import csv from "csv-parser";
import { join } from "node:path";
import { Transform, Writable } from "node:stream";

let count = 0;

const readableStream = createReadStream(
  join(__dirname, "..", "csvs", "car-details-v4.csv")
);
const tasformStreamToObject = csv({ separator: "," });
const transformStreamToString = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    // console.log(chunk);
    callback(null, JSON.stringify(chunk));
  },
});

const writableStream = new Writable({
  write(chunk, encoding, callback) {
    const string = chunk.toString();
    const data = JSON.parse(string);
    console.log(data);
    count += 1;
    console.log("count: ", count);

    callback();
  },
});

console.log("INICIOU", Date());

readableStream
  .pipe(tasformStreamToObject)
  .pipe(transformStreamToString)
  .pipe(writableStream)
  .on("close", () => console.log("FINALIZOU", Date()));
