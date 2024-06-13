import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ProcessInfoTypeConfig, ProcessInfoTypes} from "./process-info.model";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-process-info',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './process-info.component.html',
  styleUrl: './process-info.component.css'
})
export class ProcessInfoComponent implements OnChanges{
  @Input() type: string = ProcessInfoTypes.RESEARCH;

  dataState: any = {};

  ngOnChanges(changes: SimpleChanges) {
    if (changes['type']) {
      switch (this.type) {
        case ProcessInfoTypes.RESEARCH: this.dataState = ProcessInfoTypeConfig[ProcessInfoTypes.RESEARCH];
          break;
        case ProcessInfoTypes.DESIGN: this.dataState = ProcessInfoTypeConfig[ProcessInfoTypes.DESIGN];
          break;
        case ProcessInfoTypes.DEV: this.dataState = ProcessInfoTypeConfig[ProcessInfoTypes.DEV];
          break;
        case ProcessInfoTypes.QA: this.dataState = ProcessInfoTypeConfig[ProcessInfoTypes.QA];
          break;
      }
    }
  }
}
