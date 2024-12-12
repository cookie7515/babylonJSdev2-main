import { SceneData } from "./interfaces";

import {
  Scene,
  ArcRotateCamera,
  Vector3,
  MeshBuilder,
  Mesh,
  StandardMaterial,
  HemisphericLight,
  Color3,
  Engine,
  Texture,
} from "@babylonjs/core";

//Assets from https://github.com/BabylonJS/Assets/blob/master/Assets.md

function createGround(scene: Scene) {
  let ground = MeshBuilder.CreateGround(
    "ground",
    { width: 3, height: 3 },
    scene
  );
  var groundMaterial = new StandardMaterial("groundMaterial", scene);
  groundMaterial.backFaceCulling = false;
  ground.material = groundMaterial;
  groundMaterial.diffuseColor = new Color3(0.1, 1, 0.5);
  return ground;
}


function createSphere(scene: Scene) {
  let sphere = MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 1, segments: 32 },
    scene
  );
  sphere.position.y = -1.5;
  var texture = new StandardMaterial("grass1", scene);
  texture.emissiveTexture = new Texture("./src/assets/textures/lavatile.jpg", scene);
  sphere.material = texture;
  return sphere;
}

function createBox(scene: Scene) {
  let box = MeshBuilder.CreateBox(
    "box",
    { width: 2.5, height: 0.2 },
    scene
  );
  box.position.x = 0.25;
  box.position.y = 0.1;
  box.position.z = 1;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/deck.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  box.material = texture;
  return box;
}

function createCylinder(scene: Scene) {
  let cylinder = MeshBuilder.CreateCylinder(
    "cylinder",
    { height: 3, diameter: 0.2 },
    scene
  );
  cylinder.position.x = 1.4;
  cylinder.position.y = 1.5;
  cylinder.position.z = 1.4;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/pipe.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  cylinder.material = texture;
  return cylinder;
}

function createCone(scene: Scene) {
  let cone = MeshBuilder.CreateCylinder(
    "cone",
    { height: 1, diameterBottom: 0.7, diameterTop: 0 },
    scene
  );
  cone.position.x = 1;
  cone.position.y = 0.5;
  cone.position.z = -1;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/rock.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  cone.material = texture;
  return cone;
}

function createTriangle(scene: Scene) {
  let triangle = MeshBuilder.CreateCylinder(
    "triangle",
    { height: 0.1, diameter: 0.4, tessellation: 3 },
    scene
  );
  triangle.position.x = 0;
  triangle.position.y = 0.25;
  triangle.position.z = 1;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/pizza.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  triangle.material = texture;
  return triangle;
}

function createCapsule(scene: Scene) {
  let capsule = MeshBuilder.CreateCapsule(
    "capsule",
    { radius: 0.35, height: 1, radiusTop: 0.1 },
    scene
  );
  capsule.position.x = -1;
  capsule.position.y = 0.5;
  capsule.position.z = -1;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/bush.png", scene);
  texture.diffuseColor = new Color3(1, 0.6, 0.6);
  capsule.material = texture;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/bush.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  capsule.material = texture;
  return capsule;
}

function createTorus(scene: Scene) {
  let torus = MeshBuilder.CreateTorus(
    "torus",
    { diameter: 0.1, thickness: 0.075, tessellation: 10 },
    scene
  );
  torus.position.x = -0.8;
  torus.position.y = 0.225;
  torus.position.z = 0.7;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/donut2.jpg", scene);
  texture.diffuseColor = new Color3(0.6, 0.6, 1);
  torus.material = texture;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/donut2.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  torus.material = texture;
  return torus;
}

function createTube(scene: Scene) {
  const myPath = [
    new Vector3(0.85, -0.85, 0.85),
    new Vector3(0.35, -0.35, 0.35),
  ];

  const tube = MeshBuilder.CreateTube(
    "tube",
    { path: myPath, radius: 0.1, sideOrientation: Mesh.DOUBLESIDE },
    scene
  );
  tube.position.x = 0.6;
  tube.position.y = 1.5;
  tube.position.z = .6;
  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/pipe.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  tube.material = texture;
  return tube;
}

function createExtrusion(scene: Scene) {
  const myShape = [
    new Vector3(0, 0.7, 0),
    new Vector3(0.2, 0.2, 0),
    new Vector3(0.7, 0, 0),
    new Vector3(0.2, -0.2, 0),
    new Vector3(0, -0.7, 0),
    new Vector3(-0.2, -0.2, 0),
    new Vector3(-0.7, 0, 0),
    new Vector3(-0.2, 0.2, 0),
  ];

  const myPath = [
    new Vector3(0.75, -0.75, -0.2),
    new Vector3(0.75, -0.75, -1.2),
  ];

  const extrusion = MeshBuilder.ExtrudeShape(
    "star",
    {
      shape: myShape,
      closeShape: true,
      path: myPath,
      sideOrientation: Mesh.DOUBLESIDE,
    },
    scene
  );
  extrusion.position.y = 2.5;
  extrusion.position.x = -0.8;
  extrusion.position.z = 1.7;
  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/gold.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  extrusion.material = texture;
  return extrusion;
}

function createOctahedron(scene: Scene) {
  let octahedron = MeshBuilder.CreatePolyhedron(
    "oct",
    { type: 1, size: 0.35 },
    scene
  );
  octahedron.position.x = 0;
  octahedron.position.y = 4.0;
  octahedron.position.z = 0;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/eme.jpg", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  octahedron.material = texture;
  return octahedron;
}

function createPlane(scene: Scene) {
  let plane = MeshBuilder.CreatePlane(
    "plane",
    { size: 3, sideOrientation: Mesh.DOUBLESIDE },
    scene
  );
  plane.position.y = 1.5;
  plane.position.z = 1.5;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/wall.png", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  plane.material = texture;
  return plane;
}

function createPlane2(scene: Scene) {
  let plane = MeshBuilder.CreatePlane(
    "plane",
    { size: 3, sideOrientation: Mesh.DOUBLESIDE },
    scene
  );
  plane.position.y = 1.5;
  plane.position.x = 1.5;
  plane.rotation = new Vector3(0, Math.PI / 2, 0);

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./src/assets/textures/wall.png", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  plane.material = texture;
  return plane;
}

function createLight(scene: Scene) {
  const light = new HemisphericLight(
    "light",
    new Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.7;
  light.diffuse = new Color3(1, 1 , 1);
  light.specular = new Color3(1, 1, 1);
  light.groundColor = new Color3(1, 1, 1);
  return light;
}

function createArcRotateCamera(scene: Scene) {
  let camAlpha = -Math.PI / 2,
    camBeta = Math.PI / 2.5,
    camDist = 15,
    camTarget = new Vector3(0, 0, 0);
  let camera = new ArcRotateCamera(
    "camera1",
    camAlpha,
    camBeta,
    camDist,
    camTarget,
    scene
  );
  camera.attachControl(true);
  return camera;
}

export default function createStartScene(engine: Engine) {

  let scene = new Scene(engine);
  scene.ambientColor = new Color3(1, 1, 1);

  let ground = createGround(scene);
  let sphere = createSphere(scene);
  let box = createBox(scene);
  let cylinder = createCylinder(scene);
  let cone = createCone(scene);
  let triangle = createTriangle(scene);
  let capsule = createCapsule(scene);
  let torus = createTorus(scene);
  let plane = createPlane(scene);
  let tube = createTube(scene);
  let extrusion = createExtrusion(scene);
  let octahedron = createOctahedron(scene);
  let plane2 = createPlane2(scene);
  let lightHemispheric = createLight(scene);
  let camera =createArcRotateCamera(scene);

  let that: SceneData = {
    scene,
    ground,
    sphere,
    box,
    cylinder,
    cone,
    triangle,
    capsule,
    torus,
    plane,
    tube,
    extrusion,
    octahedron,
    plane2,
    lightHemispheric,
    camera
  };
  return that;
}


