import {Component, SimpleChanges, Input, OnChanges} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [NgClass],
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent{
  @Input() headingText: string = '';
  styleState: object = {};

}
export enum HeadingColors {
  DEFAULT_GRADIENT = 'DEFAULT_GRADIENT',
  DEFAULT = 'DEFAULT'
}
export const HeadingColorClasses : { [key: string ]: string} = {
  DEFAULT_GRADIENT: "bg__gradient__default",
  DEFAULT : "text-gray-100"
}
