import { Component, signal } from '@angular/core';
import { Hero } from './features/hero/hero';
import { Header } from './shared/header/header';
import { About } from "./features/about/about";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Hero, Header, About],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('yussif-bashiru-portfolio');
}
