import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: "geometries", loadChildren: () => import('./components/geometries/geometries.module').then(m => m.GeometriesModule)},
  {path: "**", redirectTo: '/geometries/box'}

];
