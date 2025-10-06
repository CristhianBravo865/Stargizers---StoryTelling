import { Injectable } from '@angular/core';

export interface Scene {
  id: number;
  title: string;
  image: string;
  narration?: string; // main narration or descriptive text
  dialogue?: string;  // character speech inside bubble
}

@Injectable({ providedIn: 'root' })
export class StoryStateService {
  private scenes: Scene[] = [
    { id: 1, title: 'The House at Sunset', image: 'assets/story/ESC1.png', narration: 'In a quiet field, a two-story house stands between power poles. The camera slowly moves closer.' },
    { id: 2, title: 'Lira in the Garden', image: 'assets/story/ESC2.png', narration: 'Lira lies on the grass in her backyard, flipping through an astronomy magazine.' },
    { id: 3, title: 'The Planets', image: 'assets/story/ESC3.png', narration: 'The magazine shows images of the planets. Her finger points at Mercury.' },
    { id: 4, title: 'Breeze and Dreams', image: 'assets/story/ESC4.png', narration: 'The breeze gently moves her red hair as she keeps reading, lost among the stars.' },
    { id: 5, title: 'Her Mother Calls', image: 'assets/story/ESC5.png', narration: 'From the house, her mother calls out loudly.', dialogue: 'Just a few more minutes, Mom! I want to see the sunset first.' },
    { id: 6, title: 'The Sunset', image: 'assets/story/ESC6.png', narration: 'Lira gazes at the horizon as the Sun descends.', dialogue: 'Ahh, how beautiful it is when the Sun goes down. I’ve always wondered what it would be like to see it up close.' },
    { id: 7, title: 'Catching the Sun', image: 'assets/story/ESC7.png', narration: 'She makes a gesture as if trying to catch the Sun between her hands, smiling.' },
    { id: 8, title: 'Back Home', image: 'assets/story/ESC8.png', narration: 'She gets up and walks back to her house as the Sun disappears behind the horizon.' },
    { id: 9, title: 'The Starry Room', image: 'assets/story/ESC9.png', narration: 'In her room, Lira stares at a Solar System poster beside her Sky-Watcher telescope.' },
    { id: 10, title: 'A Thought', image: 'assets/story/ESC10.png', narration: 'Her eyes reflect starlight as she wonders.', dialogue: 'I’ve seen so many stars… but never, directly… our Sun.' },
    { id: 11, title: 'The Telescope', image: 'assets/story/ESC11.png', narration: 'Lira peers through her telescope, gazing at the distant stars.' },
    { id: 12, title: 'The Missing Sun', image: 'assets/story/ESC12.png', narration: 'The sky glows faintly orange on the horizon.', dialogue: 'Ah, what a pity it’s already gone!' },
    { id: 13, title: 'Time to Rest', image: 'assets/story/ESC13.png', narration: 'Night falls. Lira lies on her bed, lost in thoughts of space.' },
    { id: 14, title: 'The Infinite Space', image: 'assets/story/ESC14.png', narration: 'Far above, the universe expands in silence.' },
    { id: 15, title: 'A Ship Appears', image: 'assets/story/ESC15.png', narration: 'A cream-colored spaceship glides quietly among the stars.' },
    { id: 16, title: 'Elio', image: 'assets/story/ESC16.png', narration: 'Inside, a small orange being with a star-shaped head looks at a monitor.' },
    { id: 17, title: 'Cosmic Curiosity', image: 'assets/story/ESC17.png', dialogue: 'This small planet has been orbiting here for a long time. Its inhabitants have evolved quickly.' },
    { id: 18, title: 'Discovery', image: 'assets/story/ESC18.png', dialogue: 'They even have spaceships already! Wow!' },
    { id: 19, title: 'A System Failure', image: 'assets/story/ESC19.png', dialogue: 'It must be a tiny malfunction… maybe.' },
    { id: 20, title: 'Critical Error', image: 'assets/story/ESC20.png', narration: 'A red light flashes on the command console.', dialogue: 'Monitor! Find the nearest planet for an emergency landing!' },
    { id: 21, title: 'Destination: Earth', image: 'assets/story/ESC21.png', narration: 'The monitor displays a blue planet — Earth.' },
    { id: 22, title: 'Emergency Landing', image: 'assets/story/ESC22.png', narration: 'The ship enters the atmosphere and crash-lands in a field.' },
    { id: 23, title: 'Planet Earth', image: 'assets/story/ESC23.png', narration: 'Planet Earth. 2:00 a.m. The next day.' },
    { id: 24, title: 'A Strange Day', image: 'assets/story/ESC24.png', narration: 'Lira walks through the city, checking her phone — no connection.', dialogue: 'That’s weird… there’s a cell tower right nearby.' },
    { id: 25, title: 'Astronomical Curiosity', image: 'assets/story/ESC25.png', dialogue: 'I want to find a shop that sells astronomy stuff.' },
    { id: 26, title: 'The Taxi Ride', image: 'assets/story/ESC26.png', narration: 'Lira takes a taxi as the radio starts to distort.', dialogue: 'What a strange… day.' },
    { id: 27, title: 'The Astronomy Store', image: 'assets/story/ESC27.png', narration: 'She visits a small astronomy shop, but doesn’t find what she’s looking for.' },
    { id: 28, title: 'Returning Home', image: 'assets/story/ESC28.png', narration: 'As she returns home, she hears an engine starting beyond the trees.' },
    { id: 29, title: 'The Crashed Ship', image: 'assets/story/ESC29.png', narration: 'Behind the bushes, a spaceship lies damaged in the field.' },
    { id: 30, title: 'The Encounter', image: 'assets/story/ESC30.png', dialogue: 'Wow! What are you?' },
    { id: 31, title: 'Meeting Elio', image: 'assets/story/ESC31.png', dialogue: 'Oh! Nice to meet you — you almost scared me!' },
    { id: 32, title: 'Introductions', image: 'assets/story/ESC32.png', narration: 'They introduce themselves. Lira and Elio stand in front of the ship, curious about each other.' },
    { id: 33, title: 'System Failure Explained', image: 'assets/story/ESC33.png', dialogue: 'My ship’s system failed. I had to make an emergency landing.' },
    { id: 34, title: 'The Alarm', image: 'assets/story/ESC34.png', narration: 'An alarm blares inside the ship. Both run inside quickly.' },
    { id: 35, title: 'Solar Radiation', image: 'assets/story/ESC35.png', dialogue: 'Detected: high-velocity radiation particles.' },
    { id: 36, title: 'Solar Cycles', image: 'assets/story/ESC36.png', dialogue: 'My dad used to talk about “dangerous solar cycles”… when the Sun becomes more active than ever.' },
    { id: 37, title: 'Repairing the Ship', image: 'assets/story/ESC37.png', narration: 'Elio adjusts a dial — the ship hums back to life, repaired.' },
    { id: 38, title: 'A Bigger Problem', image: 'assets/story/ESC38.png', dialogue: 'Since last night the whole city’s lost internet. Something’s really off!' },
    { id: 39, title: 'The Decision', image: 'assets/story/ESC39.png', dialogue: 'Lira, if we want to understand what’s happening, we can’t do it from the ground.' },
    { id: 40, title: 'Lift-Off', image: 'assets/story/ESC40.png', narration: 'The ship rises quickly into the atmosphere, leaving the field behind.' },
    { id: 41, title: 'Observing the Sun', image: 'assets/story/ESC41.png', dialogue: 'The Sun’s activity is creating Class M solar flares.' },
    { id: 42, title: 'Imminent Threat', image: 'assets/story/ESC42.png', dialogue: 'Warning: A Coronal Mass Ejection detected. Emergency landing recommended!' },
    { id: 43, title: 'Back to Earth', image: 'assets/story/ESC43.png', narration: 'The ship speeds back to Earth, descending into Lira’s field.' },
    { id: 44, title: 'Geomagnetic Storm', image: 'assets/story/ESC44.png', dialogue: 'NASA reports a massive Coronal Mass Ejection. A global geomagnetic storm is expected.' },
    { id: 45, title: 'Global Blackout', image: 'assets/story/ESC45.png', narration: 'The lights across the distant city flicker… and go out. The solar plasma hits Earth.' },
    { id: 46, title: 'Unexpected Auroras', image: 'assets/story/ESC46.png', dialogue: 'Look, Elio! Auroras… here in our city!' },
    { id: 47, title: 'Magnetosphere at Work', image: 'assets/story/ESC47.png', dialogue: 'Amazing! Your planet’s magnetosphere is working overtime!' },
    { id: 48, title: 'The Satellite', image: 'assets/story/ESC48.png', dialogue: 'Wait! Beyond the auroras… that satellite is sparking!' },
    { id: 49, title: 'Electromagnetic Pulse', image: 'assets/story/ESC49.png', narration: 'A massive pulse disables Elio’s ship and every nearby device.' },
    { id: 50, title: 'The Solar Glitch', image: 'assets/story/ESC50.png', dialogue: 'That “solar glitch” might have disrupted electrical systems and destabilized the magnetic field.' },
    { id: 51, title: 'Recovery', image: 'assets/story/ESC51.png', narration: 'Slowly, Earth’s magnetic field stabilizes. The city lights flicker back on.' },
    { id: 52, title: 'We Did It', image: 'assets/story/ESC52.png', dialogue: 'We did it.' },
    { id: 53, title: 'Farewell', image: 'assets/story/ESC53.png', dialogue: 'Someday I’ll come back to visit and bring you news from the stars. Keep exploring, Lira.' },
    { id: 54, title: 'A Star in the Sky', image: 'assets/story/ESC54.png', narration: 'Elio’s ship ascends and vanishes among the stars. Lira smiles.' },
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
