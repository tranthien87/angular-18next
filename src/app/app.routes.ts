import { Routes } from '@angular/router';
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";


export const routes: Routes = [
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
    path: "", redirectTo: "/profile", pathMatch: "full"
  },
  {
    path: "**", component: NotFoundPageComponent, title: "Not Found Page"
  }
];
