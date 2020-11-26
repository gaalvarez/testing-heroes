import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let service: MockHeroService;

  class MockHeroService {
    deleteHero = function (hero: Hero): Observable<Hero> {
      return of(hero);
    };
  }

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'Batman', strength: 8 },
      { id: 2, name: 'Superman', strength: 10 },
      { id: 3, name: 'Linterna Verde', strength: 6 },
    ];
    service = new MockHeroService();

    component = new HeroesComponent(service as HeroService);
  });

  describe('delete', () => {
    it('debería eliminar un elemento si llamo a delete', () => {
      component.heroes = HEROES;

      component.delete(HEROES[1]);

      expect(component.heroes.length).toBe(2);
    });

    it('debería llamar al método delete del servicio', () => {
      component.heroes = HEROES;
      const spy = spyOn(service, 'deleteHero').and.returnValue(of(HEROES[0]));

      component.delete(HEROES[1]);

      expect(service.deleteHero).toHaveBeenCalledTimes(1);
    });
  });
});
