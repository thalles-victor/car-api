import { PrismaClient } from "@prisma/client";
import { CarRepositoryContract } from "./CarRepository.contract";
import { prisma } from "../../prisma-client";
import { CarEntity } from "../../../Entities/Car.entity";

export class CarPrismaRepository implements CarRepositoryContract {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async create(
    entity: CarEntity
  ): Promise<Omit<CarEntity, "initializeProperties">> {
    return this.prisma.car.create({
      data: {
        id: entity.id,
        make: entity.make,
        model: entity.model,
        price: entity.price,
        year: entity.year,
        kilometer: entity.kilometer,
        fuel_type: entity.fuel_type,
        transmission: entity.transmission,
        location: entity.location,
        color: entity.color,
        owner: entity.owner,
        seller_type: entity.seller_type,
        engine: entity.engine,
        max_power: entity.max_power,
        max_torque: entity.max_torque,
        drivetrain: entity.drivetrain,
        length: entity.length,
        width: entity.width,
        height: entity.height,
        seating_capacity: entity.seating_capacity,
        fuel_tank_capacity: entity.fuel_tank_capacity,
        created_at: entity.created_at,
        updated_at: entity.updated_at,
      },
    });
  }

  getAll(): Promise<any> {
    throw new Error("method not implemented");
  }

  getById(id: string): Promise<any> {
    throw new Error("method not implemented");
  }
}
