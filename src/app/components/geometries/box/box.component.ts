import { GeometryService } from './../../../shared/services/geometry.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { Geometry } from '../../../shared/models/geometry.model';
import { IScene } from '../../../shared/models/scene.model';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent implements AfterViewInit {

  @ViewChild('canvasContainer', { static: true }) canvasContainer!: ElementRef;
  private geometry!: Geometry;

  constructor(private geometryService: GeometryService) {}

  ngAfterViewInit(): void {
    this.initScene();
  }

  private initScene(): void {
    this.geometryService.initScene(this.canvasContainer.nativeElement);
    this.geometry = new Geometry(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x808080, opacity: 0.7 }));

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
