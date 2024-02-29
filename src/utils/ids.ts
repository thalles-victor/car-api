import { v4 as uuid_v4 } from "uuid";

export function generateDefaultId() {
  return uuid_v4();
}
