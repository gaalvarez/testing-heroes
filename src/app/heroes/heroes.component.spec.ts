import { Observable, of } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

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
    const service = new MockHeroService();

    mockHeroService = spyOn(new MockHeroService(), 'deleteHero');
    component = new HeroesComponent(service as HeroService);
  });

  describe('delete', () => {
    it('debería eliminar un elemento si llamo a delete', () => {
      component.heroes = HEROES;

      component.delete(HEROES[1]);

      expect(component.heroes.length).toBe(2);
    });
  });
});
