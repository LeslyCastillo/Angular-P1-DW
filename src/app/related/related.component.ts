import {Component, Input, OnInit} from '@angular/core';
import {PlayerComponent} from "../player/player.component";
import {ServicioImagenesService} from "../servicio-imagenes.service";

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css']
})
export class RelatedComponent implements OnInit {

  related: any = [
    {
      title: "Perritos Weimaraner",
      description: "Perritos de la raza weimaraner jugando",
      img: "weimaraners.jpg",
      view: 2000
    },
    {
      title: "Chocolates",
      description: "Mucho mucho cholate, hersheys, snickers, kisses",
      img: "kisses.jpg",
      view: 1200
    },
    {
      title: "Bicicleta Montaña",
      description: "Cicilistas en bicicleta de montaña",
      img: "mtb.jpg",
      view: 1800
    }
  ]
  constructor(private servicioImagenes: ServicioImagenesService) {
  }

  ngOnInit(): void {
  }

  verImagen(item: string){
    this.servicioImagenes.selecion.emit({
      data: item
    })
  }

}
