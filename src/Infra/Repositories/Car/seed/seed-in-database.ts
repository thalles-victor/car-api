import {
  CreateCarDto,
  CreateCarService,
} from "../../../../Domains/Cars/UseCase/CreateCar";
import { CarPrismaRepository } from "../CarPrisma.repository";

const createCarService = new CreateCarService(new CarPrismaRepository());

export async function seedDatabase(carDto: CreateCarDto) {
  const car = await createCarService.execute(carDto);

  console.log(car);
}

export function createDto(chunk: any): CreateCarDto {
  const carDto = {
    make: chunk.Make,
    model: chunk.Model,
    price: parseInt(chunk.Price),
    year: chunk.Year,
    kilometer: parseInt(chunk.Kilometer),
    fuel_type: chunk["Fuel Type"],
    transmission: chunk.Transmission,
    location: chunk.Location,
    color: chunk.Color,
    owner: chunk.Owner,
    seller_type: chunk["Seller Type"],
    engine: chunk.Engine,
    max_power: chunk["Max Power"],
    max_torque: chunk["Max Torque"],
    drivetrain: chunk.Drivetrain,
    length: chunk.Length,
    width: chunk.Width,
    height: chunk.Height,
    seating_capacity: chunk["Seating Capacity"],
    fuel_tank_capacity: chunk["Fuel Tank Capacity"],
  };

  return carDto;
}
