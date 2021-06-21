import { VERSION } from "./constants";
import g from "./globals";
import Config, { ConfigArray, ITEMS, TRINKETS } from "./types/Config";

const CATEGORY_NAME = "Lord of The Flies";
const INFO_PANEL = "Info";

// here we build the ModConfigMenu configuration
export function register(): void {
  if (ModConfigMenu === null) {
    return;
  }

  // account for Isaac Watcher
  deleteOldConfig();
  addInfoMenuItem();
  addSubMenuItem("Items", ITEMS);
  addSubMenuItem("Trinkets", TRINKETS);

  /* for (const [itemID, option] of itemsGivenToPlayer.entries()) { // for each item we have create a setting for it
    // get the items name
    const itemName = Isaac.GetItemConfig().GetCollectible(itemID).Name;
    ModConfigMenu.AddSetting(CATEGORY_NAME, SUBCATEGORY_NAME, {
      Type: ModConfigMenuOptionType.BOOLEAN,
      CurrentSetting: () => itemsGivenToPlayer.get(itemID) as boolean,
      Display: () =>
        `${itemName}:${boolStatus(itemsGivenToPlayer.get(itemID) as boolean)}`,
      OnChange: (newValue: boolean | number) => {
        itemsGivenToPlayer.set(itemID, newValue as boolean);
      },
      Info: [`Spawn with ${itemName}.`],
    });
    // ModConfigMenu.AddSpace(CATEGORY_NAME, SUBCATEGORY_NAME);
  } */
  Isaac.DebugString("LotF: Mod Config Menu Setup Complete");
}
function boolStatus(value: boolean) {
  return value ? "On" : "Off";
}

// this is specifically to deal with Isaac Watcher reloading the Mod which creates duplicate entries
function deleteOldConfig() {
  const categoryID = ModConfigMenu.GetCategoryIDByName(CATEGORY_NAME);
  if (categoryID !== null) {
    ModConfigMenu.MenuData.set(categoryID, {
      Name: CATEGORY_NAME,
      Subcategories: [],
    });
  }
}

// add submenus
function addSubMenuItem(subMenuName: string, options: ConfigArray): void {
  for (const [configName, array] of options) {
    const [itemID, optionType] = array;
    let optionName = "";

    if (subMenuName === "Items") {
      optionName = g.itemConfig.GetCollectible(itemID).Name;
    } else {
      optionName = g.itemConfig.GetTrinket(itemID).Name;
    }
    ModConfigMenu.AddSetting(CATEGORY_NAME, subMenuName, {
      Type: optionType,
      CurrentSetting: () => g.config[configName as keyof Config],
      Display: () =>
        `${optionName}:${boolStatus(g.config[configName as keyof Config])}`,
      OnChange: (newValue: boolean | number) => {
        g.config[configName as keyof Config] = newValue as boolean;
      },
      Info: [`Spawn with ${optionName}.`],
    });
  }
  ModConfigMenu.AddSpace(CATEGORY_NAME, subMenuName);
}

// lets give the user some information about the mod
function addInfoMenuItem(): void {
  ModConfigMenu.AddText(CATEGORY_NAME, INFO_PANEL, () => "Lord of the Flies");
  ModConfigMenu.AddText(CATEGORY_NAME, INFO_PANEL, () => `Version: ${VERSION}`);
  ModConfigMenu.AddSpace(CATEGORY_NAME, INFO_PANEL);
  ModConfigMenu.AddText(CATEGORY_NAME, INFO_PANEL, () => "by DustyFlapdragon");
  ModConfigMenu.AddSpace(CATEGORY_NAME, INFO_PANEL);
  ModConfigMenu.AddText(
    CATEGORY_NAME,
    INFO_PANEL,
    () => "Built with IsaacScript",
  );
  ModConfigMenu.AddText(
    CATEGORY_NAME,
    INFO_PANEL,
    () => "https://isaacscript.github.io/",
  );
}
