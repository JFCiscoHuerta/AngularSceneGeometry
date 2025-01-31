import * as THREE from 'three';

export class Geometry {
  mesh: THREE.Mesh;

  constructor(public geometry: THREE.BufferGeometry, public material: THREE.Material) {
    this.mesh = new THREE.Mesh(this.geometry, material);
  }
}
