import { Component } from '@angular/core';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAddressBook, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  phone = faPhone;
  adress = faAddressBook;
  github = faGithubAlt;
  linkedin = faLinkedinIn;
  linkedinLink = 'https://www.linkedin.com/in/yassine-essid-4a41aa171/';
  githubLink = 'https://github.com/Yassine-Essid';

  openLink(link: string): void {
    window.open(link, '_blank');
  }

  sendMail(): void {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=yassinessid10@gmail.com', '_blank')
  }

  // sendEmail(event: Event) {
  //   event.preventDefault();
  //   const form = event.target as HTMLFormElement;
  //   const formData = new FormData(form);
  //   const name = formData.get('name');
  //   const email = formData.get('email');
  //   const message = formData.get('message');

  //   // Implement your email sending logic here
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Message:', message);
  // }
}
