import { trinketsGivenToPlayer } from "../constants";
import g from "../globals";
import { getRandomEntryFromMap } from "../misc";
import Config, { TRINKETS } from "../types/Config";

// here we add all the collectibles to the player
export function postGameStarted(): void {
  // loop through our optional trinket and check if we should process them
  for (const [configName, array] of TRINKETS) {
    const [itemID] = array;
    const player = Isaac.GetPlayer(0) as EntityPlayer;
    const game = Game();
    // has ModConfig been used to change our users preferences
    if (g.config[configName as keyof Config]) {
      // give player the trinket
      player.AddTrinket(itemID, false);
      // smelt the trinket so its always active
      player.UseActiveItem(CollectibleType.COLLECTIBLE_SMELTER);
      // remove the trinket from the pool
      game.GetItemPool().RemoveTrinket(itemID);
    }
  }
  // for each trinket we have set to on, give that trinket to the player
  /* for (const [itemID, option] of trinketsGivenToPlayer.entries()) {
    const player = Isaac.GetPlayer(0) as EntityPlayer;
    const game = Game();
    if (option) {
      // give player the trinket
      player.AddTrinket(itemID, false);
      // smelt the trinket so its always active
      player.UseActiveItem(CollectibleType.COLLECTIBLE_SMELTER);
      // remove the trinket from the pool
      game.GetItemPool().RemoveTrinket(itemID);
    }
  } */
  Isaac.DebugString("LotF: Loaded Selected Trinkets");
}
// 100% chance of losing a trinket on taking spider damage
export function playerTakeDmg(): void {
  const player = Isaac.GetPlayer(0) as EntityPlayer;

  const randomTrinket = getRandomEntryFromMap(trinketsGivenToPlayer);
  if (randomTrinket !== null) {
    player.TryRemoveTrinket(randomTrinket);
    trinketsGivenToPlayer.delete(randomTrinket);
    Isaac.DebugString("LotF: lost LotF trinket");
  }
}
