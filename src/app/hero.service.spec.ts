import { TestBed } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MessageService } from './message.service';

describe('HeroService', () => {
  let service: HeroService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, { provide: MessageService, useValue: { add: jest.fn() } }],
    });
    service = TestBed.get(HeroService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  describe('getHero', () => {
    it('Debería enviar la solicitud a la url correcta', () => {
      service.getHero(4).subscribe((res) => console.log(res));

      const req = httpTestingController.expectOne('api/heroes/4');
      expect(req.request.method).toEqual('GET');
      req.flush({ id: 1, name: 'Chibcha', strength: 1 });
    });
  });
});
