import {Component, inject, Inject} from '@angular/core';
import {HomeLandingSectionComponent} from "../home-landing-section/home-landing-section.component";
import {DOCUMENT} from "@angular/common";
import {DevProcessSectionComponent} from "../dev-process-section/dev-process-section.component";
import {TechnologiesSectionComponent} from "../technologies-section/technologies-section.component";
import {RecommendationSectionComponent} from "../recommendation-section/recommendation-section.component";
import {ProjectComponent} from "../project/project.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
      HomeLandingSectionComponent,
      DevProcessSectionComponent,
      TechnologiesSectionComponent,
      RecommendationSectionComponent,
      ProjectComponent
  ],
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
