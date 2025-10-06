import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryStateService, Scene } from '../../services/story-state';

@Component({
  selector: 'app-basic-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-story.html',
  styleUrls: ['./basic-story.scss']
})
export class BasicStory {
  public currentScene: Scene;

  constructor(public story: StoryStateService) {
    this.currentScene = this.story.currentScene;
  }

  nextScene() {
    this.story.next();
    this.currentScene = this.story.currentScene;
  }

  prevScene() {
    this.story.prev();
    this.currentScene = this.story.currentScene;
  }

  onImageError(event: Event) {
    const element = event.target as HTMLImageElement;
    element.src = 'assets/images/placeholder.png';
  }
}
