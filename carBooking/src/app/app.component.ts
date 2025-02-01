import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carRental';
}
