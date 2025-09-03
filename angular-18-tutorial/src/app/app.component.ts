import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DesignationComponent } from './components/designation/designation.component';
import { RolesComponent } from './components/roles/roles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DesignationComponent,RolesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-tutorial';
}
