// define the interface so we can use it
declare const ModConfigMenu: ModConfigMenuInterface;

// define the methods so we can use them
declare interface ModConfigMenuInterface {
  AddSetting(
    this: void,
    categoryName: string,
    subcategoryName: string,
    settingTable: ModConfigMenuSetting,
  ): void;
  AddSpace(this: void, categoryName: string, subcategoryName: string): void;
  AddText(
    this: void,
    categoryName: string,
    subcategoryName: string,
    textFunction: () => string,
  ): void;
  GetCategoryIDByName(this: void, categoryName: string): int | null;
  /**
   * MenuData is not normally supposed to be accessed, but we access it to wipe data during a mod
   * reload.
   */
  MenuData: LuaTable<int, MenuData>;
}

declare interface ModConfigMenuSetting {
  CurrentSetting: (this: void) => number | boolean;
  Display: (this: void) => string;
  Info: string[];
  OnChange: (this: void, newValue: number | boolean) => void;
  Type: ModConfigMenuOptionType;
}

declare const enum ModConfigMenuOptionType {
  TEXT = 1,
  SPACE = 2,
  SCROLL = 3,
  BOOLEAN = 4,
  NUMBER = 5,
  KEYBIND_KEYBOARD = 6,
  KEYBIND_CONTROLLER = 7,
  TITLE = 8,
}

declare interface MenuData {
  Name: string;
  Subcategories: string[];
}
