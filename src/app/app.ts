import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected getCopyrightText = computed(() => {
    const year = new Date().getFullYear();
    return `©${
      year !== 2025 ? '2025 - ' : ''
    }${year} Developed by RockettSally - Automobilista 2, AMS2 and any other logo, names or references are property of Reiza Studios - All rights reserved. This is an unofficial tool and is not affiliated with Reiza Studios.`;
  });
}
