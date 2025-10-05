import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoryStateService } from '../../services/story-state';

type SceneOption = { text: string; next: string };
type Scene = { id: string; title: string; text: string; image?: string; options: SceneOption[] };

@Component({
  selector: 'app-basic-story',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './basic-story.html',
  styleUrls: ['./basic-story.scss']
})
export class BasicStory {
  // profile form model
  profile = {
    ageRange: '',
    gender: '',
    knowledge: 'beginner'
  };

  // UI state
  showIntroForm = true;
  currentScene: Scene | null = null;
  history: string[] = [];

  // Scenes (English). Use paths to images in assets/story/*.webp
  scenes: Scene[] = [
    {
      id: 'esc1',
      title: 'A house at dusk',
      text: 'A two-story cream house with a red roof sits near some power poles. The camera slowly zooms in toward the house.',
      image: 'assets/story/esc1.webp',
      options: [{ text: 'Continue', next: 'esc2' }]
    },
    {
      id: 'esc2',
      title: 'Lira on the lawn',
      text: 'Lira lies on her stomach in the backyard, reading a magazine about the planets. She points at Mercury in the picture.',
      image: 'assets/story/esc2.webp',
      options: [{ text: 'Keep watching', next: 'esc3' }]
    },
    {
      id: 'esc3',
      title: 'The breeze',
      text: 'Her legs swing gently, and her red wavy hair moves with the wind. She wears a pumpkin sweater and a dark midi skirt.',
      image: 'assets/story/esc3.webp',
      options: [{ text: 'Listen', next: 'esc4' }]
    },
    {
      id: 'esc4',
      title: 'Called inside',
      text: `"Lira! Come inside, the Sun is setting." — her mother calls. "I\'ll be right there!" Lira replies, holding the magazine.`,
      image: 'assets/story/esc4.webp',
      options: [{ text: 'Watch the sunset', next: 'esc5' }]
    },
    {
      id: 'esc5',
      title: 'Watching the sunset',
      text: 'Lira sits, stretches her legs, and watches the sunset. "I\'ve always wondered what it would be like to see the Sun up close..."',
      image: 'assets/story/esc5.webp',
      options: [{ text: 'Dream', next: 'esc6' }]
    },
    {
      id: 'esc6',
      title: 'Trying to catch the Sun',
      text: 'She cups her hands as if to catch the Sun between them while it slips below the horizon.',
      image: 'assets/story/esc6.webp',
      options: [{ text: 'Go inside', next: 'esc7' }]
    },
    {
      id: 'esc7',
      title: 'In her room',
      text: 'Lira stands in her cream-walled room looking at a solar system poster and a Sky-Watcher telescope by the window.',
      image: 'assets/story/esc7.webp',
      options: [{ text: 'Look through the telescope', next: 'esc11' }]
    },
    {
      id: 'esc11',
      title: 'Through the lens',
      text: 'Through the telescope she sees stars — but in one spot there is a missing glow where the Sun should be.',
      image: 'assets/story/esc11.webp',
      options: [{ text: 'Sigh', next: 'esc13' }]
    },
    {
      id: 'esc13',
      title: 'Bedtime',
      text: 'Lira goes to bed, stares at the ceiling and eventually falls asleep — zzz.',
      image: 'assets/story/esc13.webp',
      options: [{ text: 'Dream', next: 'esc17' }]
    },
    {
      id: 'esc17',
      title: 'Space — far away',
      text: 'In Lira\'s dream the screen fills with space. A cream-colored spaceship appears with orange stripes and green thrusters.',
      image: 'assets/story/esc17.webp',
      options: [{ text: 'Approach the ship', next: 'esc19' }]
    },
    {
      id: 'esc19',
      title: 'Inside the ship',
      text: 'Inside, a small orange alien with a star-shaped head and four crab-like legs monitors a screen showing a blue planet.',
      image: 'assets/story/esc19.webp',
      options: [{ text: 'Listen', next: 'esc21' }]
    },
    {
      id: 'esc21',
      title: 'A curious captain',
      text: `ELIO (the alien): "This small planet has been here a long time. Their evolution is impressive."`,
      image: 'assets/story/esc21.webp',
      options: [{ text: 'Continue', next: 'esc22' }]
    },
    {
      id: 'esc22',
      title: 'System warning',
      text: 'A red light blinks: circuits failing. The ship must find the nearest planet to make an emergency landing.',
      image: 'assets/story/esc22.webp',
      options: [{ text: 'Scan for planets', next: 'esc24' }]
    },
    {
      id: 'esc24',
      title: 'Monitor result',
      text: 'MONITOR: "Planet Earth." ELIO: "Prepare to descend."',
      image: 'assets/story/esc24.webp',
      options: [
        { text: 'Go to Earth (land)', next: 'esc26_go_earth' },
        { text: 'Search for another planet', next: 'esc34_search_other' }
      ]
    },

    // Branch A: go to Earth
    {
      id: 'esc26_go_earth',
      title: 'Entering atmosphere',
      text: 'The ship descends. The atmosphere heats the hull but the pilot holds course toward a field.',
      image: 'assets/story/esc26.webp',
      options: [{ text: 'Land', next: 'esc36_landed' }]
    },
    {
      id: 'esc36_landed',
      title: 'Emergency landing',
      text: 'The ship lands in a starry field. NARRATOR: "Planet Earth — 2:00 a.m."',
      image: 'assets/story/esc36.webp',
      options: [{ text: 'Continue', next: 'esc39_morning' }]
    },

    // Branch B: search other -> asteroid field -> crash -> restart to esc22
    {
      id: 'esc34_search_other',
      title: 'Searching nearby',
      text: 'ELIO: "Search for another nearby planet." The monitor finds only an asteroid cluster.',
      image: 'assets/story/esc34.webp',
      options: [{ text: 'Fly through asteroid field', next: 'esc35_asteroids' }]
    },
    {
      id: 'esc35_asteroids',
      title: 'Danger ahead',
      text: 'The ship navigates the asteroids but collides and begins to break apart.',
      image: 'assets/story/esc35.webp',
      options: [{ text: 'RESTART (go back)', next: 'esc22' }]
    },

    // After landing: follow Lira next day
    {
      id: 'esc39_morning',
      title: 'The next morning',
      text: 'Lira walks through the city wearing her navy beanie. On her phone there is no internet connection.',
      image: 'assets/story/esc39.webp',
      options: [{ text: 'Think about telescopes', next: 'esc41' }]
    },
    {
      id: 'esc41',
      title: 'A curious mind',
      text: 'Lira thinks of telescopes, a moon rock, a toy rocket and a globe — she wants to find an astronomy shop.',
      image: 'assets/story/esc41.webp',
      options: [{ text: 'Take a taxi', next: 'esc42' }]
    },
    {
      id: 'esc42',
      title: 'In the taxi',
      text: 'She hails a taxi. The radio in the car begins to sound strange — the broadcast has interference.',
      image: 'assets/story/esc42.webp',
      options: [{ text: 'Look concerned', next: 'esc44' }]
    },
    {
      id: 'esc44',
      title: 'An unusual day',
      text: 'Lira wonders why the radio and networks are glitchy. She arrives at the astronomy shop.',
      image: 'assets/story/esc44.webp',
      options: [{ text: 'Enter the shop', next: 'esc45' }]
    },
    {
      id: 'esc45',
      title: 'At the shop',
      text: 'Inside the shop Lira explores telescopes and models. She feels excited by the map showing many satellites.',
      image: 'assets/story/esc45.webp',
      options: [{ text: 'Head home with map', next: 'esc46' }]
    },
    {
      id: 'esc46',
      title: 'Returning home',
      text: 'Lira walks back and hears a faint motor starting nearby — something (or someone) is close.',
      image: 'assets/story/esc46.webp',
      options: [{ text: 'Investigate', next: 'esc47' }]
    },
    {
      id: 'esc47',
      title: 'To be continued...',
      text: 'Lira approaches the sound... (end of demo chapter).',
      image: 'assets/story/esc47.webp',
      options: [{ text: 'Restart story', next: 'restart' }]
    }
  ];

  constructor(private state: StoryStateService) {
    // if a profile exists in storage, prefill
    const saved = this.state.loadProfile();
    if (saved) {
      this.profile = saved;
    }
  }

  startStory() {
    // basic validation
    if (!this.profile.ageRange || !this.profile.gender) {
      alert('Please select age range and gender to start the experience.');
      return;
    }
    this.state.saveProfile(this.profile);
    this.showIntroForm = false;
    this.gotoScene('esc1');
  }

  gotoScene(id: string) {
    if (id === 'restart') {
      // restart to decision point or beginning
      this.resetToStart();
      return;
    }
    const next = this.scenes.find(s => s.id === id);
    if (next) {
      this.currentScene = next;
      this.history.push(next.id);
      // small auto-scroll to top for UX
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
    } else {
      console.warn('Scene not found', id);
    }
  }

  selectOption(nextId: string) {
    // support special token 'restart' if needed
    if (nextId === 'restart') {
      this.resetToStart();
    } else {
      this.gotoScene(nextId);
    }
  }

  back() {
    // pop current, go to previous
    if (this.history.length <= 1) {
      // if none or only one, go to intro form
      this.resetToStart();
      return;
    }
    this.history.pop();
    const prevId = this.history[this.history.length - 1];
    this.currentScene = this.scenes.find(s => s.id === prevId) || null;
  }

  resetToStart() {
    this.showIntroForm = true;
    this.currentScene = null;
    this.history = [];
    // keep profile in storage so user doesn't retype
  }
  handleImageError(event: Event) {
  const img = event.target as HTMLImageElement;
  img.style.opacity = '0.6';
  img.src = 'assets/images/placeholder.png'; // opcional: imagen de respaldo
}

}
