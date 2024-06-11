import {Component, effect, signal} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommandModule} from "@angular/cli/src/command-builder/command-module";
import {data} from "autoprefixer";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  readonly  age = signal(0);

  constructor(private activeRoute: ActivatedRoute, private title: Title) {
    activeRoute.data.subscribe(data => this.title.setTitle(data['title']));
    effect(() => {
      console.log(`The current age is: ${this.age()}`);
    });
  }
  increment = () => {
    this.age.update(value => value + 1);

  }


}
