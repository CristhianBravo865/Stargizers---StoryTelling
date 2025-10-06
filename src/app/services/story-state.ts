  import { Injectable } from '@angular/core';

  export interface Scene {
    id: number;
    title: string;
    image: string;
    text?: string;       
    narration?: string;  // 🟢 narrador (cuadro arriba)
    dialogue?: string;  
  }


  @Injectable({ providedIn: 'root' })
  export class StoryStateService {
    private scenes: Scene[] = [
      { id: 1, title: 'La casa al atardecer', narration: 'En una casa entre el campo y la ciudad, vive una soñadora llamada Lira.', dialogue: 'NARRADOR: “En una casa entre el campo y la ciudad, vive una soñadora llamada Lira.”', image: '/assets/story/1.jpg' },
      { id: 2, title: 'Lira en el jardín', text: 'Lira lee una revista de astronomía mientras el viento mueve su cabello.', dialogue: 'LIRA: “Mercurio… el planeta más cercano al Sol…”', image: 'assets/story/scene2.png' },
      { id: 3, title: 'El Sol se oculta', text: '“Qué bonito sería verlo de cerca”, piensa Lira mientras observa el atardecer.', dialogue: 'LIRA: “Qué bonito sería verlo de cerca.”', image: 'assets/story/scene3.png' },
      { id: 4, title: 'La noche cae', text: 'Lira se acuesta y mira las estrellas a través de su telescopio.', dialogue: 'NARRADOR: “Cada noche viajaba sin moverse, solo mirando al cielo.”', image: 'assets/story/scene4.png' },
      // … aquí seguirían tus 40 escenas del storyboard
    ];

    private currentIndex = 0;

    get currentScene() {
      return this.scenes[this.currentIndex];
    }

    next() {
      if (this.currentIndex < this.scenes.length - 1) this.currentIndex++;
    }

    prev() {
      if (this.currentIndex > 0) this.currentIndex--;
    }

    restart() {
      this.currentIndex = 0;
    }

    get isFirst() {
      return this.currentIndex === 0;
    }

    get isLast() {
      return this.currentIndex === this.scenes.length - 1;
    }
  }
