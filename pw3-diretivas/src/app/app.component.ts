import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';
import { NgComponentOutlet } from '@angular/common';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IfComponent, SwitchComponent, ForComponent, NgcontentComponent, CardComponent], //Adicionar todos os componentes aqui
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-diretivas';
}
