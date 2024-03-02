import { createReadStream } from "node:fs";
import { join } from "node:path";
import csv from "csv-parser";
import { Transform, Writable } from "node:stream";
import { createDto, seedDatabase } from "./seed-in-database";

const transformStreamToObject = csv({ separator: "," });

// read file as stream
const readableStream = createReadStream(
  join(__dirname, "..", "..", "..", "..", "..", "csvs", "car-details-v4.csv")
);

// read csv object stream
const readObjectStream = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    callback(null, JSON.stringify(chunk));
  },
});

// write stream in database
const writableStream = new Writable({
  async write(chunk, encoding, callback) {
    const string = chunk.toString();
    const data = JSON.parse(string);

    const carDto = createDto(data);

    await seedDatabase(carDto);

    callback();
  },
});

readableStream
  .pipe(transformStreamToObject)
  .pipe(readObjectStream)
  .pipe(writableStream)
  .on("error", (error) => {
    console.error("ERRO AO ENVIAR OS DADOS PARA O BANCO: ", error);
  })
  .on("close", () => console.log("ENVIADO", Date()));
