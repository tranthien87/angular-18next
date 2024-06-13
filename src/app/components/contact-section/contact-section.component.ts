import { Component } from '@angular/core';
import {IconComponent} from "../../share/icon/icon.component";
import {HeadingComponent} from "../../share/heading/heading.component";
import {SubHeadingComponent} from "../../share/sub-heading/sub-heading.component";

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [IconComponent, HeadingComponent, SubHeadingComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {

}
