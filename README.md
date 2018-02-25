# Distancer
## Lightweight utility library for measuring the distance between 2 GPS points.

### Installation

Install the package via GitHub with `npm install https://github.com/joduplessis/Distancer.git` or `yarn add https://github.com/joduplessis/Distancer.git`.

### Usage

This example assumes ES6 usage.
```
import { Distancer } from './Distancer';

// Instantiate the class
const distancer = new Distancer();

// Set your origin
distancer.setOrigin({
    lat: -29.8483609,
    lon: 30.9224223,
});

// Set your destination
distancer.setDestination({
    lat: 53.5765144,
    lon: 9.9716112,
});

// This could be "M" (miles) or "K" (kilometers)
distancer.setMetric("K")

// How far it is
const distance: number = distancer.calculateDistance();

console.log("The distance from your location:", distance);
```
