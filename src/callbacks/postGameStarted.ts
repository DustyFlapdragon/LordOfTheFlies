import * as managePlayerItems from "../features/managePlayerItems";
import * as managePlayerTrinkets from "../features/managePlayerTrinkets";
import { isNewStandardGame } from "../misc";

// Check if this is a new standard game
export function main(isContinue: boolean): void {
  if (isNewStandardGame(isContinue)) {
    managePlayerItems.postGameStarted();
    managePlayerTrinkets.postGameStarted();
    Isaac.DebugString("LotF: Callback triggered: MC_POST_GAME_STARTED");
  }
}
