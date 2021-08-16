import { TestBed } from '@angular/core/testing';

import { ServicioImagenesService } from './servicio-imagenes.service';

describe('ServicioImagenesService', () => {
  let service: ServicioImagenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioImagenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
