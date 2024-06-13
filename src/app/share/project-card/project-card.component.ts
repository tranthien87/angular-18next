import {Component, Input} from '@angular/core';
import {CustomButtonComponent} from "../custom-button/custom-button.component";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ChipsComponent} from "../chips/chips.component";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CustomButtonComponent, NgIf, ChipsComponent, NgOptimizedImage],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project: any;
  viewProject(event: any) {
    window.open(this.project.projectLiveLink, "_blank");
  }
  viewGithubProject(event: any) {
    window.open(this.project.projectGithubLink, "_blank");

  }
}
