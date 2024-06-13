import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {HeadingComponent} from "../../share/heading/heading.component";
import {SubHeadingComponent} from "../../share/sub-heading/sub-heading.component";
import {TestimonialCardComponent} from "../../share/testimonial-card/testimonial-card.component";
import {staggerFade} from "../../animations/animations";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-recommendation-section',
  standalone: true,
  imports: [HeadingComponent, SubHeadingComponent, TestimonialCardComponent, NgForOf],
  templateUrl: './recommendation-section.component.html',
  styleUrl: './recommendation-section.component.css',
  animations: [
    staggerFade
  ]
})
export class RecommendationSectionComponent {
  inView : boolean = false;
  @ViewChild('recommSection') recommSec!: ElementRef;
  testimonialDataList: Array<object> = [
    {
      feedback: '"Working with Harsh was a real pleasure. His technical abilities and problem solving skills are top notch. He is always ready to move out of his comfort zone and learn new technologies. His dedication towards work is really commendable. He would be an asset to the team/organization he works with."',
      feedbackBy: 'Shirsha Bhattacharyya'
    },
    {
      feedback: '"I rarely come across a self-motivated talent who stand out like Harsh. Harsh is proactive, result oriented, responsible and technically sound person. Harsh’s ability to troubleshoot and analyse a technical problem was unlike any I’ve seen before."',
      feedbackBy: 'Neha Verma'
    },
    {
      feedback: '"Not many people can be so efficient as Harsh. I enjoyed working with Harsh for one year as full stack developer. I have always been amazed by Harsh’s ability to act in a highly stressful environment."',
      feedbackBy: 'Saurabh Srivastava'
    }
  ]
  trackByFeedbackBy(index: number, testimonial: any) {
    return testimonial.feedbackBy;
  }

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    if (this.recommSec && this.recommSec.nativeElement.offsetTop <= scrollPosition) {
      this.inView = true;
    }
  }
}
