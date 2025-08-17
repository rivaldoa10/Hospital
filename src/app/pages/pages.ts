import { Component } from '@angular/core';
import { Header } from "../shared/header/header";
import { Sidebar } from "../shared/sidebar/sidebar";
import { Breadcrumbs } from "../shared/breadcrumbs/breadcrumbs";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  imports: [RouterOutlet, Header, Sidebar, Breadcrumbs],
  templateUrl: './pages.html',
  styles: ``
})
export class Pages {

}
