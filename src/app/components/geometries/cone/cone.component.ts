import * as THREE  from 'three';
import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { Geometry } from '../../../shared/models/geometry.model';
import { GeometryService } from '../../../shared/services/geometry.service';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

@Component({
  selector: 'app-cone',
  imports: [],
  templateUrl: './cone.component.html',
  styleUrl: './cone.component.css'
})
export class ConeComponent implements AfterViewInit {
  @ViewChild('canvasContainer', { static: true}) canvasContainer!: ElementRef;
  private geometry!: Geometry;

  constructor(private geometryService: GeometryService) {}

  ngAfterViewInit(): void {
    this.initScene();
  }

  private initScene(): void {
    this.geometryService.initScene(this.canvasContainer.nativeElement);
    this.geometry = new Geometry(
      new THREE.ConeGeometry(1, 2, 32),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7})
    );

    const scene = this.geometryService.getSceneData().scene;
    const camera = this.geometryService.getSceneData().camera;
    const renderer = this.geometryService.getSceneData().renderer;

    scene.add(this.geometry.mesh);

    if(this.geometryService.isWebGL2Available()) {
      this.geometryService.animate(scene, camera, renderer, this.geometry.mesh);
    } else {
      const warning = WebGL.getErrorMessage;
      this.canvasContainer.nativeElement.appendChild(warning);
    }

  }

}
