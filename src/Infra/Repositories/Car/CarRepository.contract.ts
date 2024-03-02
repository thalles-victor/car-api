import { CarEntity } from "../../../Entities/Car.entity";
import { IBaseRepositoryContract } from "../IBaseRepository.contract";

export type CarRepositoryContract = {} & IBaseRepositoryContract<
  Omit<CarEntity, "initializeProperties">,
  any
>;
