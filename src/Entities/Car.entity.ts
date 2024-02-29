import { generateDefaultId } from "../utils/ids";

type CarEntityProps = {
  make: string;
  model: string;
  price: number;
  year: string;
  kilometer: number;
  fuel_type: string;
  transmission: string;
  location: string;
  color: string;
  owner: string;
  seller_type: string;
  engine: string;
  max_power: string;
  max_torque: string;
  drivetrain: string;
  length: Float32Array;
  width: Float32Array;
  height: Float32Array;
  seating_capacity: Float32Array;
  fuel_tank_capacity: Float32Array;
};

export class CarEntity {
  id: string;
  make: string;
  model: string;
  price: number;
  year: string;
  kilometer: number;
  fuel_type: string;
  transmission: string;
  location: string;
  color: string;
  owner: string;
  seller_type: string;
  engine: string;
  max_power: string;
  max_torque: string;
  drivetrain: string;
  length: Float32Array;
  width: Float32Array;
  height: Float32Array;
  seating_capacity: Float32Array;
  fuel_tank_capacity: Float32Array;
  created_at: Date;
  updated_at: Date;

  initializeProperties(props: CarEntityProps) {
    this.id = generateDefaultId();
    this.make = props.make;
    this.model = props.model;
    this.price = props.price;
    this.year = props.year;
    this.kilometer = props.kilometer;
    this.fuel_type = props.fuel_type;
    this.transmission = props.transmission;
    this.location = props.location;
    this.color = props.color;
    this.owner = props.owner;
    this.seller_type = props.seller_type;
    this.engine = props.engine;
    this.max_power = props.max_power;
    this.max_torque = props.max_torque;
    this.drivetrain = props.drivetrain;
    this.length = props.length;
    this.width = props.width;
    this.height = props.height;
    this.seating_capacity = props.seating_capacity;
    this.fuel_tank_capacity = props.fuel_tank_capacity;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}
