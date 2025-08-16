import { Component, signal } from '@angular/core';
import { Header } from "./shared/header/header";
import { Sidebar } from "./shared/sidebar/sidebar";
import { Breadcrumbs } from "./shared/breadcrumbs/breadcrumbs";

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Breadcrumbs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hospitales');
}
