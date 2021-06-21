import * as playerTakeDmg from "./callbacks/playerTakeDmg";
import * as postGameStarted from "./callbacks/postGameStarted";
import * as postPlayerInit from "./callbacks/postPlayerInit";
import * as preGameExit from "./callbacks/preGameExit";
import * as modConfigMenu from "./modConfigMenu";
import * as saveData from "./saveData";

// Register the mod
const LordOfTheFlies = RegisterMod("LordOfTheFlies", 1);

// set our mod and load teh savedata
saveData.setMod(LordOfTheFlies);
saveData.load();

// Register callbacks
LordOfTheFlies.AddCallback(
  ModCallbacks.MC_POST_GAME_STARTED,
  postGameStarted.main,
);
LordOfTheFlies.AddCallback(
  ModCallbacks.MC_ENTITY_TAKE_DMG,
  playerTakeDmg.main,
  EntityType.ENTITY_PLAYER,
);
LordOfTheFlies.AddCallback(
  ModCallbacks.MC_POST_PLAYER_INIT,
  postPlayerInit.main,
);
LordOfTheFlies.AddCallback(ModCallbacks.MC_PRE_GAME_EXIT, preGameExit.main);
// setup mod config
modConfigMenu.register();
// Print an initialization message to the "log.txt" file
Isaac.DebugString("LordOfTheFlies initialized.");
