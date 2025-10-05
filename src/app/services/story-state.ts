import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryStateService {
  private key = 'stellar_profile';

  saveProfile(profile: { ageRange: string; gender: string; knowledge: string }) {
    localStorage.setItem(this.key, JSON.stringify(profile));
  }

  loadProfile(): { ageRange: string; gender: string; knowledge: string } | null {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : null;
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}
