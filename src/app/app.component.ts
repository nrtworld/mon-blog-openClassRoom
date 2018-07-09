import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  postsArray = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed urna et libero ultricies semper sed in ex. Duis ultrices vitae odio nec scelerisque.'
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed urna et libero ultricies semper sed in ex. Duis ultrices vitae odio nec scelerisque.'
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed urna et libero ultricies semper sed in ex. Duis ultrices vitae odio nec scelerisque.'
    }
  ];
}
