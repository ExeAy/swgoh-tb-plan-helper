export interface ZoneResult {
  zone: Zone;
  playerResults: ZonePlayerResult[];
  missionPoints: number;
  combatMissionEfficiency: number;
}

export interface Zone {
  name: string;
  phase: number;
  isFleet: boolean;
  missionWavesValue: number[];
}

export interface Player {
  name: string;
  allyCode: number;
}

export interface ZonePlayerResult {
  player: Player;
  result: {
    [key: string]: {
      wavesCompleted: number;
      points: number;
    };
  };
}

export interface TbMetadata {
  numberOfPhases: number;
  numberOfZoneResults: number;
}
