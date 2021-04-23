import { Component } from '@angular/core';
import { User } from './core/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly users: User[] = [
    {
      name: 'Jeiferson de Almeida',
      email: 'jeifersonalmeida@teste.com.br',
      birthday: new Date(1999, 0, 8),
    },
    {
      name: 'Tiago Trojahn',
      email: 'tiagotrojahn@teste.com.br',
      birthday: new Date(1997, 2, 13),
    },
    {
      name: 'Rafael Marcos',
      email: 'rafaelmarcos@teste.com.br',
      birthday: new Date(2001, 5, 21),
    },
  ];

}
