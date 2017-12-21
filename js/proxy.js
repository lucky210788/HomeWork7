class Map{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

let weakMap = new WeakMap();
let map = new Map(50, 45);

let mapProxy = new Proxy(Map, {
    construct: function (target, argumentsList) {
        weakMap.set(map, argumentsList);
        return new target(...argumentsList);
    }
});
let mapClon = new mapProxy(100, 90);
console.log(mapClon);
console.log(map);