import Config, { ConfigArray } from "./Config";

export default interface SaveData {
  config?: Config;
  itemsAvailable?: ConfigArray;
  trinketsAvailable?: ConfigArray;
}
