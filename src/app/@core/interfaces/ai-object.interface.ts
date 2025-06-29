import { DriverProfile } from "../classes/driver-profile.class";

export interface AiObject {
  carClass: string;
  drivers: DriverProfile[];
}