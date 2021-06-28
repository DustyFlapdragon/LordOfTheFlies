import * as managePlayerItems from "../features/managePlayerItems";
import * as managePlayerTrinkets from "../features/managePlayerTrinkets";
import { isNewStandardGame } from "../misc";
import * as saveData from "../saveData";

// Check if this is a new standard game
export function main(isContinue: boolean): void {
  // if this is a continue, then we should change the array of available items
  if (isContinue) saveData.loadPreviousGameData();
  if (isNewStandardGame(isContinue)) {
    managePlayerItems.postGameStarted();
    managePlayerTrinkets.postGameStarted();
    Isaac.DebugString("LotF: Callback triggered: MC_POST_GAME_STARTED");
  }
}
