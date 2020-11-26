import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { HeroComponent } from '../hero/hero.component';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent (deep test)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let service: HeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'Batman', strength: 8 },
      { id: 2, name: 'Superman', strength: 10 },
      { id: 3, name: 'Linterna Verde', strength: 6 },
    ];
    TestBed.configureTestingModule({
      declarations: [HeroesComponent, HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: HeroService,
          useValue: { getHeroes: jest.fn(), addHero: jest.fn(), deleteHero: jest.fn() },
        },
      ],
    });
    fixture = TestBed.createComponent(HeroesComponent);
    service = TestBed.get(HeroService);
  });

  it('debería renderizar un herocomponent por cada hero', () => {
    spyOn(service, 'getHeroes').and.returnValue(of(HEROES));

    //run ngoninit
    fixture.detectChanges();

    const heroComponentDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
    expect(heroComponentDEs.length).toBe(3);
    for (let index = 0; index < heroComponentDEs.length; index++) {
      const element = heroComponentDEs[index];
      expect(element.componentInstance.hero.name).toEqual(HEROES[index].name);
    }
  });
});
