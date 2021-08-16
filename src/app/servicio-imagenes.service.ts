import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioImagenesService {
  @Output() selecion: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
