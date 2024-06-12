import {Component, EventEmitter, Output} from '@angular/core';
import {fade, slideInFromRightAndFade} from "../../animations/animations";
import { HeadingComponent} from "../../share/heading/heading.component";
import {NgOptimizedImage} from "@angular/common";
import {CustomButtonComponent} from "../../share/custom-button/custom-button.component";

@Component({
  selector: 'app-home-landing-section',
  standalone: true,
  imports: [HeadingComponent, NgOptimizedImage, CustomButtonComponent],
  templateUrl: './home-landing-section.component.html',
  styleUrl: './home-landing-section.component.css',
  animations: [
    slideInFromRightAndFade,fade
  ]
})
export class HomeLandingSectionComponent {
  public readonly  DEFAULT_GRADIENT='DEFAULT_GRADIENT'
  @Output() scrollToDevProcess = new EventEmitter<any>();
  goToDevProcess(event: any): void {
    this.scrollToDevProcess.emit();
  }
}
