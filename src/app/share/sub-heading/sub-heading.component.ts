import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {addClassToObject} from "../../utils/config.utils";

@Component({
  selector: 'app-sub-heading',
  standalone: true,
  imports: [],
  templateUrl: './sub-heading.component.html',
  styleUrl: './sub-heading.component.css'
})
export class SubHeadingComponent implements OnChanges{
  @Input() subHeadingText: string = '';
  styleState: {[index: string]: boolean} = {};
  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      addClassToObject(this.styleState, [ "text-gray-600"]);
    }

  }
}
