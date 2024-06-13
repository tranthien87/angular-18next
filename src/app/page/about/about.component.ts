import { Component } from '@angular/core';
import {CustomButtonComponent} from "../../share/custom-button/custom-button.component";
import {fade, slideInFromRightAndFade} from "../../animations/animations";
import {HeadingComponent} from "../../share/heading/heading.component";
import {SubHeadingComponent} from "../../share/sub-heading/sub-heading.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CustomButtonComponent, HeadingComponent, SubHeadingComponent, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [slideInFromRightAndFade, fade]
})
export class AboutComponent {
  openResume(event: any) {
    window.open("assets/files/Harsh_Bharvada.pdf", "_blank");
  }
}
