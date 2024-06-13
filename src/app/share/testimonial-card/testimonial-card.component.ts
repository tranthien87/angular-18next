import {Component, Input} from '@angular/core';
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css'
})
export class TestimonialCardComponent {
  @Input() testimonialData : any = {
    feedback:'',
    feedbackBy:''
  };
}
