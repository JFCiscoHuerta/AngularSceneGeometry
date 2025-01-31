import * as THREE from 'three';
import { GeometryService } from './../../../shared/services/geometry.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Geometry } from '../../../shared/models/geometry.model';
import WebGL from 'three/examples/jsm/capabilities/WebGL.js';

@Component({
  selector: 'app-cylinder',
  imports: [],
  templateUrl: './cylinder.component.html',
  styleUrl: './cylinder.component.css'
})
export class CylinderComponent implements AfterViewInit {
  @ViewChild('canvasContainer', {static: true }) canvasContainer!: ElementRef;
  private geometry!: Geometry;

  constructor(private geometryService: GeometryService) {}

  ngAfterViewInit(): void {
    this.initScene();
  }

  private initScene(): void {
    this.geometryService.initScene(this.canvasContainer.nativeElement);
    this.geometry = new Geometry(
      new THREE.CylinderGeometry(1.5, 1.5, 1, 32),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 })
    );

    const scene = this.geometryService.getSceneData().scene;
    const camera = this.geometryService.getSceneData().camera;
    const renderer = this.geometryService.getSceneData().renderer;

    scene.add(this.geometry.mesh);

    if (this.geometryService.isWebGL2Available()) {
      this.geometryService.animate(scene, camera, renderer, this.geometry.mesh);
    } else {
      const warning = WebGL.getErrorMessage;
      this.canvasContainer.nativeElement.appendChile(warning);
    }
  }
}
