import { Component, signal } from '@angular/core';
import { Header } from "./shared/header/header";
import { Sidebar } from "./shared/sidebar/sidebar";
import { Breadcrumbs } from "./shared/breadcrumbs/breadcrumbs";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Breadcrumbs, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hospitales');
}
