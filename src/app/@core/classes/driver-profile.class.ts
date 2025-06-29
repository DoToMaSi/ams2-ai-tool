export class DriverProfile {
  liveryName?: string;
  name: string;
  country: string;
  raceSkill: number;
  qualifyingSkill: number;
  aggression: number;
  defending: number;
  stamina: number;
  consistency: number;
  startReactions: number;
  wetSkill: number;
  tyreManagement: number;
  blueFlagConceding: number;
  weatherTyreChanges: number;
  avoidanceOfMistakes: number;
  avoidanceOfForcedMistakes: number;

  constructor(driver?: DriverProfile) {
    this.liveryName = driver ? driver.liveryName : '';
    this.name = driver ? driver.name : '';
    this.country = driver ? driver.country : '';
    this.raceSkill = driver ? driver.raceSkill : 0;
    this.qualifyingSkill = driver ? driver.qualifyingSkill : 0;
    this.aggression = driver ? driver.aggression : 0;
    this.defending = driver ? driver.defending : 0;
    this.stamina = driver ? driver.stamina : 0;
    this.consistency = driver ? driver.consistency : 0;
    this.startReactions = driver ? driver.startReactions : 0;
    this.wetSkill = driver ? driver.wetSkill : 0;
    this.tyreManagement = driver ? driver.tyreManagement : 0;
    this.blueFlagConceding = driver ? driver.blueFlagConceding : 0;
    this.weatherTyreChanges = driver ? driver.weatherTyreChanges : 0;
    this.avoidanceOfMistakes = driver ? driver.avoidanceOfMistakes : 0;
    this.avoidanceOfForcedMistakes = driver ? driver.avoidanceOfForcedMistakes : 0;
  }
}