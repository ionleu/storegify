import { PropertyValue } from "./property-value.model";

export interface ObjectModel {
  [key: string]: PropertyValue;
}
