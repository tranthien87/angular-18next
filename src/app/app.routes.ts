import { Routes } from '@angular/router';
import {NotFoundPageComponent} from "./page/not-found-page/not-found-page.component";
import {HomeComponent} from "./page/home/home.component";



export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    loadComponent: () => import('./page/about/about.component').then(c => c.AboutComponent)
  },
  {
    path: "projects",
    loadComponent: () => import('./page/project/project.component' ).then(c => c.ProjectComponent)
  },
  {
    path: "profile",
    loadComponent: () => import('./page/profile-page/profile-page.component').then(c => c.ProfilePageComponent),
    data: {
      title: "Portfolio",
      values: {
        url: "localhost",
        port: "8080"
      }
    }
  },
  {
    path: "", redirectTo: "/home", pathMatch: "full"
  },
  {
    path: "**", component: NotFoundPageComponent, title: "Not Found Page"
  }
];
