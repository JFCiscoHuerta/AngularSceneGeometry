import { ColorService } from './../../shared/services/color.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule,
    ColorPickerModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  isToolbarVisible = true;
  selectedColor: string = '#808080';

  constructor(private colorService: ColorService) {}

  onColorChange(newColor: string) {
    this.selectedColor = newColor;
    this.colorService.setColor(newColor);
  }

}
