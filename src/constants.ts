// The version is updated automatically by IsaacScript
export const VERSION = "0.0.1";

// get our fly trinkets
export const trinketsGivenToPlayer = new Map([
  [TrinketType.TRINKET_LOCUST_OF_WRATH, true],
  [TrinketType.TRINKET_LOCUST_OF_PESTILENCE, true],
  [TrinketType.TRINKET_LOCUST_OF_FAMINE, true],
  [TrinketType.TRINKET_LOCUST_OF_DEATH, true],
  [TrinketType.TRINKET_LOCUST_OF_CONQUEST, true],
  [TrinketType.TRINKET_APOLLYONS_BEST_FRIEND, true],
]);

// Get our Fly Collectibles
export const itemsGivenToPlayer = new Map([
  [CollectibleType.COLLECTIBLE_SMART_FLY, true],
  [CollectibleType.COLLECTIBLE_PSY_FLY, true],
  [CollectibleType.COLLECTIBLE_LOST_FLY, true],
  [CollectibleType.COLLECTIBLE_PAPA_FLY, true],
  [CollectibleType.COLLECTIBLE_SWARM, true],
  [CollectibleType.COLLECTIBLE_ANGRY_FLY, true],
  [CollectibleType.COLLECTIBLE_BOT_FLY, true],
  [CollectibleType.COLLECTIBLE_FRUITY_PLUM, true],
  [CollectibleType.COLLECTIBLE_SKATOLE, true],
  [CollectibleType.COLLECTIBLE_HALO_OF_FLIES, true],
  [CollectibleType.COLLECTIBLE_DISTANT_ADMIRATION, true],
  [CollectibleType.COLLECTIBLE_FOREVER_ALONE, true],
  [CollectibleType.COLLECTIBLE_BBF, true],
  [CollectibleType.COLLECTIBLE_BIG_FAN, true],
  [CollectibleType.COLLECTIBLE_FRIEND_ZONE, true],
  [CollectibleType.COLLECTIBLE_OBSESSED_FAN, true],
  [CollectibleType.COLLECTIBLE_BLUE_BABYS_ONLY_FRIEND, true],
  [CollectibleType.COLLECTIBLE_MULLIGAN, true],
]);

// array of in game spider enemies
export const spiderEnemies = [
  EntityType.ENTITY_SPIDER,
  EntityType.ENTITY_BIGSPIDER,
  EntityType.ENTITY_SPIDER_L2,
  EntityType.ENTITY_TICKING_SPIDER,
  EntityType.ENTITY_ROCK_SPIDER,
  EntityType.ENTITY_SWARM_SPIDER,
  EntityType.ENTITY_STRIDER,
  EntityType.ENTITY_MIGRAINE,
  EntityType.ENTITY_RAGLING,
  EntityType.ENTITY_BLISTER,
  EntityType.ENTITY_TWITCHY,
  EntityType.ENTITY_BABY_LONG_LEGS,
  EntityType.ENTITY_CRAZY_LONG_LEGS,
  EntityType.ENTITY_DADDYLONGLEGS, // boss
  EntityType.ENTITY_WIDOW, // boss
  EntityType.ENTITY_FIREPLACE,
];
