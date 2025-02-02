import * as THREE from 'three';

/**
 * Interface representing the essential components of a 3D scene in Three.js.
 * This interface defines the core elements needed for rendering a scene:
 * the scene itself, the camera, the renderer.
 */
export interface IScene {
  /**
   * The scene object where all the 3D objects, lights, and cameras are added.
   */
  scene: THREE.Scene;

  /**
   * The camera used to view the 3D scene.
   */
  camera: THREE.PerspectiveCamera;

  /**
   * The WebGL renderer responsible for rendering the 3D scene to the screen.
   */
  renderer: THREE.WebGLRenderer;
}
