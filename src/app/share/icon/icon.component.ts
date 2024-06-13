import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {addClassToObject} from "../../utils/config.utils";
import {IconSize, IconSizeClasses} from "../../constants/icon-size.constants";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent implements OnChanges{
  @Input() iconSize: string = IconSize['MD'];
  @Input() iconType: string = 'default';
  iconStyleState:  {[kye: string]: boolean} = {};
  ngOnChanges(changes: SimpleChanges) {

    if (changes) {
      addClassToObject(this.iconStyleState, [IconSizeClasses[this.iconSize]]);
    }
  }
}
