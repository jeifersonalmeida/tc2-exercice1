import { Component } from '@angular/core';
import { User } from './core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly user: User = {
    name: 'Jeiferson de Almeida',
    email: 'jeifersonalmeida@teste.com.br',
    birthday: new Date(1999, 0, 8),
  };

}
