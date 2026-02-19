export interface ServerStatus {
  name: string;
  map: string;
  players: number;
  maxPlayers: number;
  online: boolean;
  ip: string;
  port: number;
}
