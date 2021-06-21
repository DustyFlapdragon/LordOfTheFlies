// function to check if the game is a standard new game and not Greed, a Challenge or continue
export function isNewStandardGame(isContinue: boolean): boolean {
  const game = Game();
  if (
    game.IsGreedMode() === false &&
    game.Challenge === Challenge.CHALLENGE_NULL &&
    isContinue === false
  ) {
    return true;
  }
  return false;
}

// get a radom entry from the trinkets map
export function getRandomEntryFromMap(
  map: Map<CollectibleType | TrinketType, boolean>,
): int | null {
  // don't do any logic on empty maps
  if (map.size > 0) {
    // lets get a random number between 0 and our total number
    const randomNumber = math.random(1, map.size);
    // loop through our map of items and return a random one
    let i = 1;
    for (const [itemID, option] of map.entries()) {
      if (i === randomNumber && option) {
        return itemID;
      }
      i += 1;
    }
  }
  return null;
}
