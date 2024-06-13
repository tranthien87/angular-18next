import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {SubHeadingComponent} from "../../share/sub-heading/sub-heading.component";
import {HeadingComponent} from "../../share/heading/heading.component";
import {IconComponent} from "../../share/icon/icon.component";
import {staggerFade} from "../../animations/animations";

@Component({
  selector: 'app-technologies-section',
  standalone: true,
  imports: [SubHeadingComponent, HeadingComponent, IconComponent],
  templateUrl: './technologies-section.component.html',
  styleUrl: './technologies-section.component.css',
  animations: [
    staggerFade
  ]
})
export class TechnologiesSectionComponent {
  inView : boolean = false;
  @ViewChild('techUsed') techUsed!: ElementRef;

  @HostListener('window:scroll') checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.techUsed && this.techUsed.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }
}
