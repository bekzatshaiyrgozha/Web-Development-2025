import { Component } from '@angular/core';
import { MainComponent } from './main-page/main.component';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <header>
    <img src="/assets/logo.svg" alt="logo" aria-hidden="true">
  </header>
  <section>
    <app-main></app-main>
  </section>
  `,
  styleUrls: ['./app.component.css'],
  imports: [MainComponent]
})
export class AppComponent {
  title = 'homes';
}
