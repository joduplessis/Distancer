export interface origin {
    lat: number;
    lon: number;
}
export interface destination {
    lat: number;
    lon: number;
}
export declare class Distancer {
    private metric;
    private originPoint;
    private destinationPoint;
    setOrigin(o: origin): void;
    setDestination(d: destination): void;
    setMetric(m: string): void;
    calculateDistance(): number;
    private deg2rad(deg);
    private rad2deg(rad);
}
