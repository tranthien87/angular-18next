import {Component, inject, Inject} from '@angular/core';
import {HomeLandingSectionComponent} from "../home-landing-section/home-landing-section.component";
import {DOCUMENT} from "@angular/common";
import {DevProcessSectionComponent} from "../dev-process-section/dev-process-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeLandingSectionComponent, DevProcessSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {
  }

  // scrolling to header page
  goToDevProcess(){
    // this.document.getElementById("devProcess").scrollIntoView({behavior:'smooth'});
  }
}
