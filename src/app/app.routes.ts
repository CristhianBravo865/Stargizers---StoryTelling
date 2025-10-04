import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { BasicStory } from './pages/basic-story/basic-story';
import { IntermediateStory } from './pages/intermediate-story/intermediate-story';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'basic', component: BasicStory },
  { path: 'intermediate', component: IntermediateStory },
  { path: '**', redirectTo: '' },
];
