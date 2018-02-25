
export interface origin {
    lat: number;
    lon: number;
}

export interface destination {
    lat: number;
    lon: number;
}

export class Distancer  {

    private metric: string = "K"
    private originPoint: origin;
    private destinationPoint: destination;

    public setOrigin(o: origin): void {
        this.originPoint = o;
    }

    public setDestination(d: destination): void {
        this.destinationPoint = d;
    }

    public setMetric(m: string): void {
        this.metric = m;
    }

    public calculateDistance(): number {

        // Set up the variables we use for the calculation
        const lat1: number = this.originPoint.lat;
        const lon1: number = this.originPoint.lon;
        const lat2: number = this.destinationPoint.lat;
        const lon2: number = this.destinationPoint.lon;
        const unit: string = this.metric;
        const theta: number = lon1 - lon2;

        // Do the sin/cos calculation
        let dist: number = Math.sin(this.deg2rad(lat1)) * Math.sin(this.deg2rad(lat2)) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.cos(this.deg2rad(theta));

        // Some Math
        dist = Math.acos(dist);
        dist = this.rad2deg(dist);
        dist = dist * 60 * 1.1515;

        // Do the unit
        if (unit == "K") {
            dist = dist * 1.609344;
        } else if (unit == "M") {
            dist = dist * 0.8684;
        }

        // Return the distance
        return dist;
    }

    private deg2rad(deg: number) {
        return (deg * Math.PI / 180.0);
    }

    private rad2deg(rad: number) {
        return (rad * 180.0 / Math.PI);
    }
}
