import { Component } from '@angular/core'; 
import { UserProfileComponent } from './user-profile.component'; 

@Component({
    selector: 'learning-component', 
    template: ` 
        <h1>User Profile</h1>
        <p>This is the user profile page</p> 
        <app-user-profile></app-user-profile>
    `, 
    styles: ` 
        h1 {
            font-family: Arial, Helvetica, sans-serif; 
            color: purple;
        }
    `,
    imports: [UserProfileComponent], 
}) 
export class LearningComponent {}
