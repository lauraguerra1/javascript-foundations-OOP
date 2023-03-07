class Planet {
    constructor(planet) {
        this.name = planet.name;
        this.shop = planet.shop;
        this.coordinates = planet.coordinates;

    }
    landShip(ship) {
        this.currentShip = ship;
    }
    calculateDistance(otherPlanet) {
        var xDist = otherPlanet.coordinates.x - this.coordinates.x
        var yDist = otherPlanet.coordinates.y - this.coordinates.y
        var zDist = otherPlanet.coordinates.z - this.coordinates.z
        var xDistSqrd = xDist * xDist;
        var yDistSqrd = yDist * yDist;
        var zDistSqrd = zDist * zDist; 
        var sum = xDistSqrd + yDistSqrd + zDistSqrd; 
        return Math.sqrt(sum)
    }
    refuel(ship) {
        ship.fuel = ship.fuelCapacity
    }
    giveClearance(otherPlanet) {
        if (!this.currentShip.fuel) {
            return `Clearance denied: Cannot fly without fuel`
        } else if (this.currentShip.fuel < this.calculateDistance(otherPlanet)) {
            return `Clearance denied: Fuel level must be equal to or greater than travel distance: ${this.calculateDistance(otherPlanet)}`
        } else {
            this.currentShip.fuel = 0;
            otherPlanet.landShip(this.currentShip);
            this.currentShip = undefined; 
            return `Clearance granted: Enjoy your trip to ${otherPlanet.name}`
        }
    }
}
module.exports = Planet;