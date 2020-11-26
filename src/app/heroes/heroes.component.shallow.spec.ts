import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroService } from '../hero.service';
import { HeroesComponent } from './heroes.component';

describe('HeroesComponent (shallow test)', () => {
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
      declarations: [HeroesComponent],
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

  it('debería crearse el componente', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('debería inicializar heroes en el componente', () => {
    spyOn(service, 'getHeroes').and.returnValue(of(HEROES));

    //NG ONINIT
    fixture.detectChanges();

    expect(fixture.componentInstance.heroes.length).toBe(2);
  });
});
