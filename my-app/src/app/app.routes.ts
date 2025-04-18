import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'devNotes',
    loadComponent: () =>
      import('./components/dev-notes-table/dev-notes-table.component').then(
        (m) => m.DevNotesComponent
      ),
  },
  { path: '**', redirectTo: 'home' },
];
