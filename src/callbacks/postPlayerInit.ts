import g from "../globals";

// populate the globals player on Init
export function main(player: EntityPlayer): void {
  g.p = player;
}
