// write code here to use map
// It should output: [ 15, 13, 11, 16, 10, 11, 10 ]

const lighthouses = ["Gibraltar Point", "Peggy's Point", "Cove Island", "Discovery Island", "Cape Scott", "Point Clark", "Kincardine"];

const mapOfLenghts = lighthouses.map(word => word.length);
console.log(mapOfLenghts);
