import * as json from "json";
import g from "./globals";
import Config, { ConfigArray } from "./types/Config";
import SaveData from "./types/SaveData";

let mod: Mod | null = null;

export function setMod(newMod: Mod): void {
  mod = newMod;
}
export function save(): void {
  if (mod === null) {
    error('"saveDat.save()" was called without the mod being initialized.');
  }

  // build what we need to save
  const saveData = {
    config: g.config,
    itemsAvailable: g.itemsAvailable,
    trinketsAvailable: g.trinketsAvailable,
  };

  mod.SaveData(json.encode(saveData));
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
  const saveData = json.decode(Isaac.LoadModData(mod)) as SaveData;
  const config = saveData.config as Config;
  // set our config based on the saveData
  Object.entries(config).forEach(([key, value]) =>
    setConfigOption(key as keyof Config, value),
  );
}

export function loadPreviousGameData(): void {
  if (mod === null) {
    error('"saveDat.load()" was called without the mod being initialized.');
  }
  // check we have some save data file
  if (!Isaac.HasModData(mod)) {
    return;
  }
  // get the save data and decode it
  const saveData = json.decode(Isaac.LoadModData(mod)) as SaveData;
  g.trinketsAvailable = saveData.trinketsAvailable as ConfigArray;
  g.itemsAvailable = saveData.itemsAvailable as ConfigArray;
}

// set our global configs based on the save data
export function setConfigOption<K extends keyof Config, V extends Config[K]>(
  key: K,
  value: V,
): void {
  g.config[key] = value;
}
