import { createReadStream } from "node:fs";
import { join } from "node:path";
import csv from "csv-parser";
import { Transform, Writable } from "node:stream";
import {
  CreateCarDto,
  CreateCarService,
} from "../../../Domains/Cars/UseCase/CreateCar";
import { CarPrismaRepository } from "./CarPrisma.repository";

const transformStreamToObject = csv({ separator: "," });

const createCarService = new CreateCarService(new CarPrismaRepository());
const readableStream = createReadStream(
  join(__dirname, "..", "..", "..", "..", "csvs", "car-details-v4.csv")
);

async function seedDatabase(carDto: CreateCarDto) {
  const car = await createCarService.execute(carDto);

  console.log(car);
}

const transformStreamToString = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    callback(null, JSON.stringify(chunk));
  },
});

const writableStream = new Writable({
  async write(chunk, encoding, callback) {
    const string = chunk.toString();
    const data = JSON.parse(string);

    const carDto = {
      make: data.Make,
      model: data.Model,
      price: parseInt(data.Price),
      year: data.Year,
      kilometer: parseInt(data.Kilometer),
      fuel_type: data["Fuel Type"],
      transmission: data.Transmission,
      location: data.Location,
      color: data.Color,
      owner: data.Owner,
      seller_type: data["Seller Type"],
      engine: data.Engine,
      max_power: data["Max Power"],
      max_torque: data["Max Torque"],
      drivetrain: data.Drivetrain,
      length: data.Length,
      width: data.Width,
      height: data.Height,
      seating_capacity: data["Seating Capacity"],
      fuel_tank_capacity: data["Fuel Tank Capacity"],
    };

    await seedDatabase(carDto);

    callback();
  },
});

readableStream
  .pipe(transformStreamToObject)
  .pipe(transformStreamToString)
  .pipe(writableStream)
  .on("close", () => console.log("ENVIADO", Date()));
