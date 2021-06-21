import g from "../globals";
import Config, { ConfigArray, ITEMS } from "../types/Config";

// Add all the collectibles to the player
export function postGameStarted(): void {
  // loop through our optional items and check if we should process them
  for (const [configName, array] of ITEMS) {
    const [itemID] = array;

    // Check our config to see if the preference has been changed to false
    if (g.config[configName as keyof Config]) {
      // give the player the item
      g.p.AddCollectible(itemID);

      // remove the item from the Item Pool
      g.itemPool.RemoveCollectible(itemID);

      // remove all item specific costumes
      g.p.RemoveCostume(g.itemConfig.GetCollectible(itemID));
    }
  }
  Isaac.DebugString("LotF: Loaded Selected Items");
}

// Remove collectibles on damage from spiders based on chance
export function playerTakeDmg(): void {
  // get the current luck stat and cap it at 8
  const luck = g.p.Luck >= 8 ? 8 : g.p.Luck;

  // default 90% chance player loses an item minus the luck stat, lowest chance 82%
  removeRandomItem(ITEMS, 0.9, luck / 10);

  // default 30% chance player loses an item minus the luck stat, lowest change 22%
  removeRandomItem(ITEMS, 0.3, luck / 100);
}

// remove a random item from the player and the items array
function removeRandomItem(
  items: ConfigArray,
  chance: number,
  luck: number,
): void {
  if (math.random() <= chance - luck) {
    // get a random item from the array
    const randomItem = items[Math.floor(Math.random() * items.length)];

    // make sure we have a random item
    if (randomItem !== null) {
      // remove the item from the player
      g.p.RemoveCollectible(randomItem[1][0]);

      // remove the item from the array
      items.splice(items.indexOf(randomItem), 1);

      Isaac.DebugString("LotF: lost LotF Item");
    }
  }
}
