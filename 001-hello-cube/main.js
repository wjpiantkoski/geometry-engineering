import * as THREE from "three";

const CAMERA_CONFIG = {
  fov: 75,
  aspect: 2,
  near: 0.1,
  far: 5,
};

const LIGHT_CONFIG = {
  color: 0xffffff,
  intensity: 3,
};

function main() {
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

  const camera = new THREE.PerspectiveCamera(
    CAMERA_CONFIG.fov,
    CAMERA_CONFIG.aspect,
    CAMERA_CONFIG.near,
    CAMERA_CONFIG.far
  );

  // move the camera back a little from the origin in order to see anything
  camera.position.z = 2;

  // create a Scene, the root of a form
  const scene = new THREE.Scene();

  // create a Geometry
  const geometry = new THREE.BoxGeometry(1, 1, 1); // width, height, depth

  // create a Material
  // const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

  // create a Mesh (Geometry + Material + position + orientation)
  // const cube = new THREE.Mesh(geometry, material);

  // add the mesh to the scene
  // scene.add(cube);

  // render ir
  renderer.render(scene, camera);

  // managing rotation speed to match different screen frame rates
  const clock = new THREE.Clock();
  const rotationSpeed = Math.PI / 2; // Rotates 90 degrees (PI/2 radians) per second

  // adding some light
  const light = new THREE.DirectionalLight(
    LIGHT_CONFIG.color,
    LIGHT_CONFIG.intensity
  );

  light.position.set(-1, 2, 4);
  scene.add(light);

  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({ color });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  const cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2),
  ];

  function render() {
    const deltaTime = clock.getDelta();

    cubes.forEach((cube, ndx) => {
      cube.rotation.x += rotationSpeed * deltaTime;
      cube.rotation.y += rotationSpeed * deltaTime;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
