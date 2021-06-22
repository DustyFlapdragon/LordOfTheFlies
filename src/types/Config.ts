// this is our list of configurable options
// these should match the config array keys
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
  yoListen = true;
}

// the ConfigArray uses the key of Config
export type ConfigArray = Array<
  [
    keyof Config | null,
    [TrinketType | CollectibleType, ModConfigMenuOptionType],
  ]
>;

// Hold all of our trinkets and config settings
export const TRINKETS: ConfigArray = [
  [
    "locustOfWar",
    [TrinketType.TRINKET_LOCUST_OF_WRATH, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "locustOfPestilence",
    [TrinketType.TRINKET_LOCUST_OF_PESTILENCE, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "locustOfFamine",
    [TrinketType.TRINKET_LOCUST_OF_FAMINE, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "locustOfDeath",
    [TrinketType.TRINKET_LOCUST_OF_DEATH, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "locustOfConquest",
    [TrinketType.TRINKET_LOCUST_OF_CONQUEST, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "appolyonsBestFriend",
    [
      TrinketType.TRINKET_APOLLYONS_BEST_FRIEND,
      ModConfigMenuOptionType.BOOLEAN,
    ],
  ],
];

// Hold all of our Items and config settings
// by default everything is turned on
export const ITEMS: ConfigArray = [
  [
    "smartFly",
    [CollectibleType.COLLECTIBLE_SMART_FLY, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "psyFly",
    [CollectibleType.COLLECTIBLE_PSY_FLY, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "lostFly",
    [CollectibleType.COLLECTIBLE_LOST_FLY, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "papaFly",
    [CollectibleType.COLLECTIBLE_PAPA_FLY, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "theSwarm",
    [CollectibleType.COLLECTIBLE_SWARM, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "angryFly",
    [CollectibleType.COLLECTIBLE_ANGRY_FLY, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "botFly",
    [CollectibleType.COLLECTIBLE_BOT_FLY, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "fruityPlum",
    [CollectibleType.COLLECTIBLE_FRUITY_PLUM, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "skatole",
    [CollectibleType.COLLECTIBLE_SKATOLE, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "haloOfFlies",
    [
      CollectibleType.COLLECTIBLE_HALO_OF_FLIES,
      ModConfigMenuOptionType.BOOLEAN,
    ],
  ],
  [
    "distantAdmiration",
    [
      CollectibleType.COLLECTIBLE_DISTANT_ADMIRATION,
      ModConfigMenuOptionType.BOOLEAN,
    ],
  ],
  [
    "foreverAlone",
    [
      CollectibleType.COLLECTIBLE_FOREVER_ALONE,
      ModConfigMenuOptionType.BOOLEAN,
    ],
  ],
  ["bbf", [CollectibleType.COLLECTIBLE_BBF, ModConfigMenuOptionType.BOOLEAN]],
  [
    "bigFan",
    [CollectibleType.COLLECTIBLE_BIG_FAN, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "friendZone",
    [CollectibleType.COLLECTIBLE_FRIEND_ZONE, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "obsessedFan",
    [CollectibleType.COLLECTIBLE_OBSESSED_FAN, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "blueBabysOnlyFriend",
    [
      CollectibleType.COLLECTIBLE_BLUE_BABYS_ONLY_FRIEND,
      ModConfigMenuOptionType.BOOLEAN,
    ],
  ],
  [
    "theMulligan",
    [CollectibleType.COLLECTIBLE_MULLIGAN, ModConfigMenuOptionType.BOOLEAN],
  ],
  [
    "yoListen",
    [CollectibleType.COLLECTIBLE_YO_LISTEN, ModConfigMenuOptionType.BOOLEAN],
  ],
];
