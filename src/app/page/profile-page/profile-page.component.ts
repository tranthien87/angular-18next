import {Component, effect, inject, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    private title: Title ,
    private router: Router,
    private viewport: ViewportScroller
  ) {
    activeRoute.data.subscribe(data => this.title.setTitle(data['title']));
  }
  scrollToFragment (fragment: string){
    this.viewport.scrollToAnchor(fragment)
  }
}
