import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activarSonido(sonido: number) {
    let audio = new Audio();
    audio.src = `../assets/sonidos/note${sonido}.wav`;
    audio.load();
    audio.play();
  }
}
