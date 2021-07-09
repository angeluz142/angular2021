import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Thor', 'Irom Man', 'Pantera Negra'];
  heroeBorrado:string = '';

  BorrarHeroe(){
    console.log('borrando....');
    this.heroeBorrado =  this.heroes.shift() || '';   
    
    
  }

}
