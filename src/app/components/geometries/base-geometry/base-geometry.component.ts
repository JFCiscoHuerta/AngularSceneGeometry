import { Component, ElementRef, ViewChild } from '@angular/core';
import { Geometry } from '../../../shared/models/geometry.model';
import { GeometryService } from '../../../shared/services/geometry.service';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

/**
 * Abstract base component for handling 3D geometries using Three.js.
 * This component initializes the scene and manages rendering and animations.
 */
@Component({
  selector: 'app-base-geometry',
  imports: [],
  templateUrl: './base-geometry.component.html',
  styleUrl: './base-geometry.component.css'
})
export abstract class BaseGeometryComponent {

  /**
   * Reference to the container where the Three.js canvas will be appended.
   */
  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;

  /**
   * Geometry instance managed by the component.
   */
  protected geometry!: Geometry;

  /**
   * Creates an instance of `BaseGeometryComponent`.
   * @param {GeometryService} geometryService - responsible for handling the Three.js scene.
   */
  constructor(protected geometryService: GeometryService) {}

  /**
   * Lifecycle hook called after the view has been initialized.
   * It initializes the 3D scene.
   */
  ngAfterViewInit(): void {
    this.initScene();
  }

  /**
   * Initializes the Three.js scene and adds the geometry to it.
   * If WebGL 2 is available, the animation starts; otherwhise, a warning is displayed.
   */
  private initScene(): void {
    this.geometryService.initScene(this.canvasContainer.nativeElement);
    this.geometry = this.createGeometry();

    const { scene, camera, renderer } = this.geometryService.getSceneData();
    scene.add(this.geometry.mesh);

    if (this.geometryService.isWebGL2Available()) {
      this.geometryService.animate(scene, camera, renderer, this.geometry.mesh);
    } else {
      const warning = WebGL.getErrorMessage;
      this.canvasContainer.nativeElement.appendChild(warning);
    }
  }

  /**
   * Abstract method to create and return the geometry.
   * Must be implemented by derived components.
   * @returns An instance of `Geometry`.
   */
  protected abstract createGeometry(): Geometry;

}
