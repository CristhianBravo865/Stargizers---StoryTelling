import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Navbar],
  templateUrl: './home.html',
})
export class Home {
  imageLoaded = false;

  constructor(private router: Router) { }

  startStory() {
    this.router.navigate(['/basic']);
  }

  onImageLoad() {
    this.imageLoaded = true;
  }
  scrolled = false;
  showNavbar = false;

  onScroll() {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Difumina un poco apenas se baja
    this.scrolled = scrollPosition > 50;

    // Muestra la navbar cuando pasas toda la imagen
    this.showNavbar = scrollPosition > viewportHeight * 0.9;
  }

}
