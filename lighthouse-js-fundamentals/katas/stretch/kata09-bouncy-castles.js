// https://web.compass.lighthouselabs.ca/prep/prep/activities/1137

// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!
  return ((PI * 4 / 3) * Math.pow(radius,3)).toFixed(2);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  return ((PI *(Math.pow(radius,2) * height)) / 3).toFixed(2);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  return (height * width * depth);
} 

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  var vol = 0;
  solids.forEach(item => {
    switch (item.type) {
      case 'sphere':
        vol += Number(sphereVolume(item.radius));
        break;
      case 'cone':
        vol += Number(coneVolume(item.radius,item.height));
        break;
      case 'prisma':
        vol += Number(prismVolume(item.height,item.width,item.depth));
        break;
    }
  });
  return vol.toFixed(2);
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
