import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  // Linking external files
  templateUrl: '../app/views/user-profile.component.html', 
  styleUrl: '../app/styles/user-profile.component.css', 
})
export class UserProfileComponent {
  // Signals represent the state of the component
  name = signal('Full Name');
  jobTitle = signal('Angular Developer');
  isOnline = signal(true);

  toggleStatus() {
    // Updating the signal automatically refreshes the HTML
    this.isOnline.update(status => !status);
  }
}