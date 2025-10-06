import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
})
export class Home {
  constructor(private router: Router) {}

  startStory() {
    this.router.navigate(['/basic']); 
  }
}
