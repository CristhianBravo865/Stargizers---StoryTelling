import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
})
export class Home implements OnInit {
  step = 1;
  userAge = '';
  userGender = '';
  userKnowledge = '';
  started = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Si ya existe información en sessionStorage, redirigir directamente
    if (sessionStorage.getItem('formCompleted')) {
      this.router.navigate(['/basic'], {
        queryParams: JSON.parse(sessionStorage.getItem('userInfo') || '{}'),
      });
    }
  }

  nextStep() {
    if (this.step === 1 && this.userAge) {
      this.step = 2;
    } else if (this.step === 2 && this.userGender) {
      this.step = 3;
    } else if (this.step === 3 && this.userKnowledge) {
      this.step = 4;
    }
  }

  startExperience() {
    const userInfo = {
      age: this.userAge,
      gender: this.userGender,
      level: this.userKnowledge,
    };

    // Guardar la información del usuario
    sessionStorage.setItem('formCompleted', 'true');
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Navegar a la historia básica con los parámetros
    this.router.navigate(['/basic'], {
      queryParams: userInfo,
    });
  }
}
