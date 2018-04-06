import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NewTaskComponent } from './new-task/new-task.component';



const appRoutes: Routes = [
  {
  path: '',
  component: HomepageComponent
  },
  {
  path: 'about',
  component: AboutPageComponent
  },
  {
  path: 'add',
  component: NewTaskComponent
  },





];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
