class Roadrace {
  constructor(race) {
    this.name = race.title;
    this.location = race.city;
    this.distance = null;
    this.participants = [];
  }
  setDistance(distance) {
    this.distance = distance;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`;
  }
  registerParticipants(runner) {
    this.participants.push(runner);
  }
  completeRace() {
    this.participants.map((x) => x.runRace(this.name, this.distance));
  }
}

module.exports = Roadrace;
