import * as THREE from 'three';

/**
 * Class representing a 3D geometry using Three.js.
 * This class wraps a `THREE.Mesh` object, which is the combination
 * of a geometry and a material, forming a mesh that can be added to the scene.
 */
export class Geometry {
  mesh: THREE.Mesh;

  /**
   * Creates a new instance of the `Geometry` class with a specific geometry and material.
   *
   * @param {THREE.BufferGeometry} geometry - The geometry defining tha shape of the mesh.
   * @param {THREE.Material} material - The material defining the appareance of the mesh.
   *
   * @description
   * This class combines a geometry (`THREE.BufferGeometry`) and a material (`THREE.Material`)
   * to create a mesh (`THREE.Mesh`) that can be added to a Three.js scene.
   *
   */
  constructor(public geometry: THREE.BufferGeometry, public material: THREE.Material) {
    this.mesh = new THREE.Mesh(this.geometry, material);
  }
}
