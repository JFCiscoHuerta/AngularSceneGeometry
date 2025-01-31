import { Injectable } from '@angular/core';
import { IScene } from '../models/scene.model';
import * as THREE from 'three';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

@Injectable({
  providedIn: 'root'
})
export class GeometryService {

  private sceneData: IScene =
  {
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
    renderer: new THREE.WebGLRenderer()
  };

  constructor() {}

  public initScene(container: HTMLElement): void {
    this.sceneData.camera.position.z = 5;
    this.sceneData.renderer.setSize(window.innerWidth, window.innerHeight - 100);
    container.appendChild(this.sceneData.renderer.domElement);
  }

  public isWebGL2Available(): boolean {
    return WebGL.isWebGL2Available();
  }

  public getSceneData(): IScene {
    return this.sceneData;
  }

  public animate(scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer,
    mesh: THREE.Mesh): void {
      requestAnimationFrame(() => this.animate(scene, camera, renderer, mesh));
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
  }

}
