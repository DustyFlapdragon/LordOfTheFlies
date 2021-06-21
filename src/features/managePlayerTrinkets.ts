import g from "../globals";
import Config, { TRINKETS } from "../types/Config";

// Add all the Trinkets to the player
export function postGameStarted(): void {
  // reset our trinkets as this is a new game
  g.trinketsAvailable = [...TRINKETS];
  // loop through our optional trinket and check if we should process them
  for (const [configName, array] of TRINKETS) {
    const [itemID] = array;

    // Check our config to see if the preference has been changed to false
    if (g.config[configName as keyof Config]) {
      // give player the trinket
      g.p.AddTrinket(itemID, false);

      // smelt the trinket so its always active
      g.p.UseActiveItem(CollectibleType.COLLECTIBLE_SMELTER);

      // remove the trinket from the pool
      g.g.GetItemPool().RemoveTrinket(itemID);
    }
  }
  Isaac.DebugString("LotF: Loaded Selected Trinkets");
}

// remove a trinket from the player when they take damage from spiders (100% chance)
export function playerTakeDmg(): void {
  // get a random trinket from the Trinkets array
  const randomTrinket =
    g.trinketsAvailable[Math.floor(Math.random() * g.trinketsAvailable.length)];

  // make sure we have a random item
  if (randomTrinket !== null) {
    // remove the random trinket from the player
    g.p.TryRemoveTrinket(randomTrinket[1][0]);

    // remove the random trinket from the trinkets array
    TRINKETS.splice(TRINKETS.indexOf(randomTrinket), 1);

    Isaac.DebugString("LotF: lost LotF Item");
  }
}
