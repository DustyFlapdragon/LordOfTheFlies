// order needs to match TRINKETS & ITEMS
export default class Config {
  // Trinkets
  locustOfWar = true;
  locustOfPestilence = true;
  locustOfFamine = true;
  locustOfDeath = true;
  locustOfConquest = true;
  appolyonsBestFriend = true;

  // items
  theD6 = true;
  smartFly = true;
  psyFly = true;
  lostFly = true;
  papaFly = true;
  theSwarm = true;
  angryFly = true;
  botFly = true;
  fruityPlum = true;
  skatole = true;
  haloOfFlies = true;
  distantAdmiration = true;
  foreverAlone = true;
  bbf = true;
  bigFan = true;
  friendZone = true;
  obsessedFan = true;
  blueBabysOnlyFriend = true;
  theMulligan = true;
}

// the ConfigArray has uses the key of Config
export type ConfigArray = Array<
  [
    keyof Config | null,
    [TrinketType | CollectibleType, ModConfigMenuOptionType, boolean],
  ]
>;

// Hold all of our trinkets and config settings
// by default everything is turned on
export const TRINKETS: ConfigArray = [
  [
    "locustOfWar",
    [
      TrinketType.TRINKET_LOCUST_OF_WRATH,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "locustOfPestilence",
    [
      TrinketType.TRINKET_LOCUST_OF_PESTILENCE,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "locustOfFamine",
    [
      TrinketType.TRINKET_LOCUST_OF_FAMINE,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "locustOfDeath",
    [
      TrinketType.TRINKET_LOCUST_OF_DEATH,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "locustOfConquest",
    [
      TrinketType.TRINKET_LOCUST_OF_CONQUEST,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "appolyonsBestFriend",
    [
      TrinketType.TRINKET_APOLLYONS_BEST_FRIEND,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
];

// Hold all of our Items and config settings
// by default everything is turned on
export const ITEMS: ConfigArray = [
  [
    "smartFly",
    [
      CollectibleType.COLLECTIBLE_SMART_FLY,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "psyFly",
    [
      CollectibleType.COLLECTIBLE_PSY_FLY,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "lostFly",
    [
      CollectibleType.COLLECTIBLE_LOST_FLY,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "papaFly",
    [
      CollectibleType.COLLECTIBLE_PAPA_FLY,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "theSwarm",
    [CollectibleType.COLLECTIBLE_SWARM, ModConfigMenuOptionType.BOOLEAN, true],
  ],
  [
    "angryFly",
    [
      CollectibleType.COLLECTIBLE_ANGRY_FLY,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "botFly",
    [
      CollectibleType.COLLECTIBLE_BOT_FLY,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "fruityPlum",
    [
      CollectibleType.COLLECTIBLE_FRUITY_PLUM,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "skatole",
    [
      CollectibleType.COLLECTIBLE_SKATOLE,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "haloOfFlies",
    [
      CollectibleType.COLLECTIBLE_HALO_OF_FLIES,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "distantAdmiration",
    [
      CollectibleType.COLLECTIBLE_DISTANT_ADMIRATION,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "foreverAlone",
    [
      CollectibleType.COLLECTIBLE_FOREVER_ALONE,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "bbf",
    [CollectibleType.COLLECTIBLE_BBF, ModConfigMenuOptionType.BOOLEAN, true],
  ],
  [
    "bigFan",
    [
      CollectibleType.COLLECTIBLE_BIG_FAN,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "friendZone",
    [
      CollectibleType.COLLECTIBLE_FRIEND_ZONE,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "obsessedFan",
    [
      CollectibleType.COLLECTIBLE_OBSESSED_FAN,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "blueBabysOnlyFriend",
    [
      CollectibleType.COLLECTIBLE_BLUE_BABYS_ONLY_FRIEND,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
  [
    "theMulligan",
    [
      CollectibleType.COLLECTIBLE_MULLIGAN,
      ModConfigMenuOptionType.BOOLEAN,
      true,
    ],
  ],
];
