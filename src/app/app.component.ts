import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarComponent } from "./bar/bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BarComponent]
})
export class AppComponent {
  title = 'shoppingList';
}
