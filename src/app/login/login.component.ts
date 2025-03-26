import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';  // ✅ Import RouterModule
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],  // ✅ Add RouterModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private backendService: BackendService, private router: Router) {}

  onSubmit() {
    console.log('Login form submitted');  // Debugging log
    this.backendService.authenticatePlayer(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);  // Debugging log
        localStorage.setItem('player', JSON.stringify(response));
  
        // Check if router.navigate works properly
        this.router.navigate(['/dashboard']).then((nav) => {
          if (nav) {
            console.log('Navigation to dashboard successful');
          } else {
            console.error('Navigation to dashboard failed');
          }
        }).catch((err) => {
          console.error('Navigation error:', err);  // Debugging navigation error
        });
      },
      error: (err) => {
        console.error('Login failed:', err);  // Debugging log
        this.error = 'Invalid credentials';  // Display error message
      }
    });
  }

  onSignup() {
    console.log('Signup clicked');
    // Add signup logic here
  }
}