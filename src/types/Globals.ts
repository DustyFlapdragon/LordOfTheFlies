import Config, { ITEMS, TRINKETS } from "./Config";

// lets set up a bunch of globals so that we don't have to call them everywhere
export default class Globals {
  // Cached API functions
  g = Game();
  l = Game().GetLevel();
  r = Game().GetRoom();
  // note player will be null as it doesn't yet exist
  // make sure we set it in POST_PLAYER_INIT
  p = Isaac.GetPlayer(0);
  itemPool = Game().GetItemPool();
  itemConfig = Isaac.GetItemConfig();
  config = new Config();
  trinketsAvailable = [...TRINKETS];
  itemsAvailable = [...ITEMS];
}
