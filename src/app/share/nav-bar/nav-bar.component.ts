import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, NgClass, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements AfterViewInit {
  private contact: HTMLElement | null = null;
  active: string = 'Home';
  constructor(
    private _router: Router,
  ) { }

  navigateTo(destination: string) {
    this.active = destination;
    switch (destination) {
      case 'About': this._router.navigate(['/about']); break;

      case 'Projects': this._router.navigate(['/projects']); break;

      case 'Home': this._router.navigate(['']); break;

      case 'Contact' :
        if (this.contact) {
          this.contact.scrollIntoView({behavior: "smooth"});
        }
        break;
      default: this._router.navigate(['']); break;

    }
  }
  ngAfterViewInit() {
    this.contact = document.getElementById('contact');
  }
}
