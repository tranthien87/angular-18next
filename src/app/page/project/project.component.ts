import {Component, ElementRef, HostListener, QueryList, ViewChildren} from '@angular/core';
import {HeadingComponent} from "../../share/heading/heading.component";
import {SubHeadingComponent} from "../../share/sub-heading/sub-heading.component";
import {ProjectCardComponent} from "../../share/project-card/project-card.component";
import {fadeInView} from "../../animations/animations";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [HeadingComponent, SubHeadingComponent, ProjectCardComponent, NgForOf],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  animations: [
    fadeInView
  ]
})
export class ProjectComponent {
  @ViewChildren(ProjectCardComponent ,{ read: ElementRef }) projs!: QueryList<ElementRef>
  inViewList: Array<boolean> = [];
  projects: Array<any> = [
    {
      projectImg: 'structuresWizImg.png',
      projectName: 'Structures-Wiz',
      projectDescription: 'An optimised 🚀 implementation of Data structures like Stack, Queue, Priority Queue, Linked List etc for enterprise usage in our favourite ❤️ language - JavaScript',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://www.npmjs.com/package/structures-wiz',
      isProjectGithubLinkPresent: true,
      projectGithubLink: 'https://github.com/harsh07bharvada/structures-wiz',
      isOpenSource: true
    },
    {
      projectImg: 'horrorscopeImg.png',
      projectName: 'Horrorscope',
      projectDescription: 'Webapp to explore more about your zodiac sign and which celebrity one shares it’s zodiac sign.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://your-horrorscope.netlify.app/',
      isProjectGithubLinkPresent: true,
      projectGithubLink: 'https://github.com/harsh07bharvada/Horrorscope',
      isOpenSource: false
    },
    {
      projectImg: 'clothingStoreImg.png',
      projectName: 'Clothing Store',
      projectDescription: 'Fashion e-commerce webapp with Stripe Payments integration.',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://thecloth.netlify.app/',
      isProjectGithubLinkPresent: true,
      projectGithubLink: 'https://github.com/harsh07bharvada/Clothing-Store',
      isOpenSource: false
    }, {
      projectImg: 'elektrofyImg.png',
      projectName: 'Elektrofy',
      projectDescription: 'Electrical items e-commerce shop with images upload to Google drive for the clients',
      isProjectLinkPresent: true,
      projectLiveLink: 'https://www.elektrofy.com/',
      isProjectGithubLinkPresent: true,
      projectGithubLink: 'https://github.com/Elektrofy/Elektrofy',
      isOpenSource: false
    }
  ];
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset + window.innerHeight;

    this.projs.forEach((v, index) => {
      if (index && v && v.nativeElement.offsetTop <= scrollPosition) {
        this.inViewList[index] = true;
      }
    })
  }
}
