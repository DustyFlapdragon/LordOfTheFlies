import g from "../globals";
import Config, { ConfigArray, ITEMS } from "../types/Config";

// Add all the collectibles to the player
export function postGameStarted(): void {
  const player = Isaac.GetPlayer(0) as EntityPlayer;
  const game = Game();
  // loop through our optional items and check if we should process them
  for (const [configName, array] of ITEMS) {
    const [itemID] = array;
    // has ModConfig been used to change our users preferences
    if (g.config[configName as keyof Config]) {
      // give the player the item
      player.AddCollectible(itemID);
      // remove the item from teh pool
      game.GetItemPool().RemoveCollectible(itemID);
      // remove all item specific costumes
      player.RemoveCostume(Isaac.GetItemConfig().GetCollectible(itemID));
    }
  }
  // for each item we have set to on, give that item to the player
  /* for (const [itemID, option] of itemsGivenToPlayer.entries()) {
    // give player the item if on
    if (option) {
      player.AddCollectible(itemID);
      // remove the item from the pool
      game.GetItemPool().RemoveCollectible(itemID);
      // remove all item specific costumes
      player.RemoveCostume(Isaac.GetItemConfig().GetCollectible(itemID));
    }
  } */
  Isaac.DebugString("LotF: Loaded Selected Items");
}

// Remove collectibles on damage from spiders
export function playerTakeDmg(): void {
  const player = Isaac.GetPlayer(0) as EntityPlayer;
  // get the current luck stat and cap it at 8
  const luck = player.Luck >= 8 ? 8 : player.Luck;

  // default 90% chance play loses an item minus the luck stat, lowest chance 82%
  removeRandomItem(ITEMS, 0.9, luck / 10);
  /* if (math.random() <= 0.9 - luck / 10) {
    const randomItem = ITEMS[Math.floor(Math.random() * ITEMS.length)];
    if (randomItem !== null) {
      player.RemoveCollectible(randomItem[1][0]);
      ITEMS.splice(ITEMS.indexOf(randomItem), 1);
      Isaac.DebugString("LotF: lost LotF Item");
    }
  } */
  // default 30% chance player loses an item minus the luck stat, lowest change 22%
  removeRandomItem(ITEMS, 0.3, luck / 100);
  /* if (math.random() <= 0.3 - luck / 100) {
    const randomItem = getRandomEntryFromMap(itemsGivenToPlayer);
    if (randomItem) {
      player.RemoveCollectible(randomItem);
      itemsGivenToPlayer.delete(randomItem);
      Isaac.DebugString("LotF: lost LotF Item");
    }
  } */
}

// remove a random item from the player and the items array
function removeRandomItem(
  items: ConfigArray,
  chance: number,
  luck: number,
): void {
  if (math.random() <= chance - luck) {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    if (randomItem !== null) {
      g.p.RemoveCollectible(randomItem[1][0]);
      items.splice(items.indexOf(randomItem), 1);
      Isaac.DebugString("LotF: lost LotF Item");
    }
  }
}
