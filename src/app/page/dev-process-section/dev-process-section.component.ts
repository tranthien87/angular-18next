import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {staggerFade} from "../../animations/animations";
import {HeadingComponent} from "../../share/heading/heading.component";
import {SubHeadingComponent} from "../../share/sub-heading/sub-heading.component";
import {ProcessInfoComponent} from "../../share/process-info/process-info.component";

@Component({
  selector: 'app-dev-process-section',
  standalone: true,
  imports: [HeadingComponent, SubHeadingComponent, ProcessInfoComponent],
  templateUrl: './dev-process-section.component.html',
  styleUrl: './dev-process-section.component.css',
  animations: [
    staggerFade
  ]
})
export class DevProcessSectionComponent {
  inView : boolean = false;
  @ViewChild('devProcess') devProcess!: ElementRef;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.devProcess && this.devProcess.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }
}
