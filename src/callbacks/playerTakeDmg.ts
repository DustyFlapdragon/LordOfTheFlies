import { spiderEnemies } from "../constants";
import * as managePlayerItems from "../features/managePlayerItems";
import * as managePlayerTrinkets from "../features/managePlayerTrinkets";

// we only manage items if its in the spider array and the player is damaged
// also account for Trite (29.1)
export function main(
  tookDmg: Entity,
  _dmgAmount: float,
  _dmgFlags: DamageFlag,
  dmgSource: EntityRef,
  _dmgCountdownFrames: int,
): boolean | void {
  if (
    tookDmg.Type === 1 &&
    (spiderEnemies.includes(dmgSource.Type) ||
      (dmgSource.Type === 29 && dmgSource.Variant === 1))
  ) {
    managePlayerItems.playerTakeDmg();
    managePlayerTrinkets.playerTakeDmg();
    Isaac.DebugString("LotF: Callback triggered: ENTITY_TAKE_DMG");
  }
}
