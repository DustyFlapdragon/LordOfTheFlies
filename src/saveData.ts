import * as json from "json";
import g from "./globals";
import Config from "./types/Config";

let mod: Mod | null = null;

export function setMod(newMod: Mod): void {
  mod = newMod;
}
export function save(): void {
  if (mod === null) {
    error('"saveDat.save()" was called without the mod being initialized.');
  }

  const encodedData = json.encode(g.config);
  Isaac.DebugString("testing save");
  Isaac.DebugString(tostring(g.config.angryFly));
  mod.SaveData(encodedData);
}

export function load(): void {
  if (mod === null) {
    error('"saveDat.load()" was called without the mod being initialized.');
  }
  // check we have some save data file
  if (!Isaac.HasModData(mod)) {
    return;
  }
  const saveData = json.decode(Isaac.LoadModData(mod)) as Config;
}
