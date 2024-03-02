import { CarEntity } from "../../../../Entities/Car.entity";
import { CarRepositoryContract } from "../../../../Infra/Repositories/Car/CarRepository.contract";
import { CreateCarDto } from "./CreateCar.dto";

export class CreateCarService {
  constructor(private readonly carRepository: CarRepositoryContract) {}

  async execute(
    createCarDto: CreateCarDto
  ): Promise<Omit<CarEntity, "initializeProperties">> {
    const carEntity = new CarEntity().initializeProperties(createCarDto);

    const carCreated = await this.carRepository.create(carEntity);

    return carCreated;
  }
}
