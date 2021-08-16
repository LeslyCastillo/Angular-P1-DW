import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServicioImagenesService} from "../servicio-imagenes.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  title: any = 'Muchas Flores flores'
  img: any = "flores.png"
  description: any = "Imagen con muchas flores"

  constructor(private servicioImagenes: ServicioImagenesService){
  }

  ngOnInit(): void {
    this.servicioImagenes.selecion.subscribe(data =>{
      this.title = data.data.title
      this.img = data.data.img
      this.description = data.data.description
    })
  }

}
