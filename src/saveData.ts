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

  // get the save data and decode it
  const saveData = json.decode(Isaac.LoadModData(mod)) as Config;

  // set our config based on the saveData
  Object.entries(saveData).forEach(([key, value]) =>
    setConfigOption(key as keyof Config, value),
  );
}

// set our global configs based on the save data
export function setConfigOption<K extends keyof Config, V extends Config[K]>(
  key: K,
  value: V,
): void {
  g.config[key] = value;
}
