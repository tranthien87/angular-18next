import {Component, EventEmitter, Input, makeStateKey, OnChanges, Output, SimpleChanges} from '@angular/core';
import {CustomButtonColors, CustomButtonColorClasses} from "./custom-button-color.model";
import {IconSize} from "../../constants/icon-size.constants";
import {FontSize, FontSizeClasses} from "../../constants/font-size.constants";
import {addClassToObject} from "../../utils/config.utils";
import {IconComponent} from "../icon/icon.component";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [IconComponent, NgClass, NgIf],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent implements OnChanges {
  @Input() btnLabel: string = 'Click Me..';
  @Input() isIconOnly: boolean = false;
  @Input() isIconActive: boolean = false;
  @Input() iconType: string = 'default';
  @Input() iconSize: string = IconSize['MD'];
  @Input() iconAnimation : string = '';
  @Input() size: string = FontSize['BASE'];
  @Input() bgColor: string = CustomButtonColors['DEFAULT'];
  @Output() onBtnClicked = new EventEmitter();
  styleState: {[kye: string]: boolean} = {};
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.bgColor)
      addClassToObject(this.styleState, [CustomButtonColorClasses[this.bgColor]]);
    if (changes[this.size])
      addClassToObject(this.styleState, [FontSizeClasses[this.size]]);
  }
  btnClicked(event: any): void {
    this.onBtnClicked.emit(event);
  }
}
