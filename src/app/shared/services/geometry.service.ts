import { Injectable } from '@angular/core';
import { IScene } from '../models/scene.model';
import * as THREE from 'three';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

/**
 * Service responsible for managing the 3D scene using Three.js
 */
@Injectable({
  providedIn: 'root'
})
export class GeometryService {

  /**
   * Scene data, including the Three.js scene, camera, and renderer.
   */
  private sceneData: IScene =
  {
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
    renderer: new THREE.WebGLRenderer()
  };

  constructor() {}

  /**
   * Initializes the scene inside the provider container.
   * @param {HTMLElement} container - HTML element where the scene will be rendered.
   */
  public initScene(container: HTMLElement): void {
    this.sceneData.camera.position.z = 5;
    this.sceneData.renderer.setSize(window.innerWidth, window.innerHeight - 100);
    container.appendChild(this.sceneData.renderer.domElement);
  }

  /**
   * Checks is WebGL 2 is available in the browser.
   * @returns `true` if WebGL 2 is available, `false` otherwise.
   */
  public isWebGL2Available(): boolean {
    return WebGL.isWebGL2Available();
  }

  /**
   * Retrieves the current scene data.
   * @returns An object containing the scene, camera, and renderer.
   */
  public getSceneData(): IScene {
    return this.sceneData;
  }

  /**
   * Animates a mesh within the scene, rotating it on the X and Y axes and rendering the changes.
   * @param {THREE.Scene} scene
   * @param {THREE.PerspectiveCamera} camera
   * @param {THREE.WebGLRenderer} renderer
   * @param {THREE.Mesh} mesh
   */
  public animate(scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer,
    mesh: THREE.Mesh): void {
      requestAnimationFrame(() => this.animate(scene, camera, renderer, mesh));
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
  }

}
