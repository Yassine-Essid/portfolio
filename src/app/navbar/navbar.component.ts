import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  git = faGithub;
  linkedin = faLinkedin;
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  scrollTo(component:string){
    const Element = document.getElementById(component);
    if (Element) {
      Element.scrollIntoView({ behavior: "smooth" });
    }
  }
  openResume(){
    window.open('https://drive.google.com/file/d/182--e_iaDJSz40-sbaPeaJ8DMp3QO5PW/view?usp=sharing')
  }
  openGithub(){
    window.open('https://github.com/Yassine-Essid')
  }
  openLinkedin(){
    window.open('https://www.linkedin.com/in/yassine-essid-4a41aa171/')
  }

}
