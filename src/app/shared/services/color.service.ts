import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * Service to manage the color state in the application.
 * This service provides a way to set color values.
 */
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private colorSubject = new BehaviorSubject<string>('#808080');
  color$ = this.colorSubject.asObservable();

  constructor() { }

  /**
   * Sets a new color value.
   * @param {string} color - material color.
   */
  setColor(color: string) {
    this.colorSubject.next(color);
  }

}
