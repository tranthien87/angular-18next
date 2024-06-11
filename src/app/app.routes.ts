import { Routes } from '@angular/router';
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./page/home/home.component";


export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "profile", component: ProfilePageComponent,
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
