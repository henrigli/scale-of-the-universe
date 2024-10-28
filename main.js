import "./style.css";

import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  200000
);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * 100;
}

document.body.onscroll = moveCamera;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(150);

renderer.render(scene, camera);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 5, 0);

const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.minAzimuthAngle = Math.PI * 2;
controls.maxAzimuthAngle = Math.PI * 2;
controls.minPolarAngle = Math.PI / 2;
controls.maxPolarAngle = Math.PI / 2;

const spaceTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/space-MJ5mlGLKFtwOtA67NUk8itn6c6ClAG.jpeg"
);
scene.background = spaceTexture;

const sunTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/sun-0mXI0Wv0lx708ZS4KSpcxWYNJfBYty.jpeg"
);

const mercuryTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/mercury-ajWqIiWde1vP0KyWLaBPnpzcEQiQOk.webp"
);
const mercuryNmap = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/mercury_nmap-YVzLEcuqp9qzRW7plabwhlEwgB4iuS.jpg"
);

const venusTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/venus-WoHzyajKEyrB2ZKaz4FtbnC4rbcPOm.webp"
);

const earthTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/earth-T7WNfAnHwcyZV2yauaYdCx3vMjrYCb.webp"
);
const earthNmap = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/earth_nmap-dbKruarFp0vck5FwpaqOY5WR4E1BFI.jpg"
);

const marsTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/mars-0MBnroWZf1cFW3PzsDXZoawteRLnRn.webp"
);
const marsNmap = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/mars_nmap-04bhTprd1neRJzrJFKBFkgX9vAGrXH.webp"
);

const jupiterTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/jupiter-OddCFUD2BY8mBaMq8ffIwxItkz2CGr.jpg"
);

const saturnTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/saturn-PPlTfnGYXyidsc54KIE4iltNQ4ePSE.jpeg"
);

const uranusTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/uranus-7ISLqtHki75SJg6WrOleFB953vbz3O.webp"
);

const neptuneTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/neptune-Uf3MQOK5HU33ZO4IvpJRKvzZGG5yzP.webp"
);

const plutoTexture = new THREE.TextureLoader().load(
  "https://ibe1idstddtkn2b7.public.blob.vercel-storage.com/planets/pluto-iR1FMFx8JbygXugEhMtf6xXnEouN5B.webp"
);

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(100, 32, 32),
  new THREE.MeshStandardMaterial({ map: sunTexture })
);

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(0.3504, 64, 64),
  new THREE.MeshStandardMaterial({
    map: mercuryTexture,
    normalMap: mercuryNmap,
  })
);

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(0.8691, 64, 64),
  new THREE.MeshStandardMaterial({ map: venusTexture })
);

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(0.9149, 64, 64),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    normalMap: earthNmap,
  })
);

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(0.4868, 64, 64),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: marsNmap,
  })
);

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(10.0398, 64, 64),
  new THREE.MeshStandardMaterial({ map: jupiterTexture })
);

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(8.3626, 64, 64),
  new THREE.MeshStandardMaterial({ map: saturnTexture })
);

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(0.36422, 64, 64),
  new THREE.MeshStandardMaterial({ map: uranusTexture })
);

const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(0.35359, 64, 64),
  new THREE.MeshStandardMaterial({ map: neptuneTexture })
);

//added a zero to first number to shorten distances
const relativeDistance = 0.0000071870058933 * 149600000;

mercury.position.z = relativeDistance * 0.39;
venus.position.z = relativeDistance * 0.72;
earth.position.z = relativeDistance;
mars.position.z = relativeDistance * 1.52;
jupiter.position.z = relativeDistance * 5.2;
saturn.position.z = relativeDistance * 9.54;
uranus.position.z = relativeDistance * 19.2;
neptune.position.z = relativeDistance * 30.06;

scene.add(sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);

const dayInHours = 24;
const baseSpin = 0.01;

//based on how long one day on each planet is, divided by 24 hours. One day on the sun is 25 days on the sun
function animate() {
  requestAnimationFrame(animate);
  sun.rotation.y += (dayInHours / (24 * 25)) * baseSpin;
  mercury.rotation.y += (dayInHours / 1408) * baseSpin;
  venus.rotation.y -= (dayInHours / 5832) * baseSpin;
  earth.rotation.y += baseSpin;
  mars.rotation.y += (dayInHours / 25) * baseSpin;
  jupiter.rotation.y += (dayInHours / 10) * baseSpin;
  saturn.rotation.y += (dayInHours / 11) * baseSpin;
  uranus.rotation.y -= (dayInHours / 17) * baseSpin;
  neptune.rotation.y += (dayInHours / 16) * baseSpin;

  //controls.update();

  renderer.render(scene, camera);
}

animate();
