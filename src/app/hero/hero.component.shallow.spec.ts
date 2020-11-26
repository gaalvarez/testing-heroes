import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeroComponent } from './hero.component';

describe('HeroComponent (shallow)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('debería tener el hero correcto', () => {
    fixture.componentInstance.hero = { id: 1, name: 'Hombre Araña', strength: 10 };

    expect(fixture.componentInstance.hero.name).toEqual('Hombre Araña');
  });

  it('debería tener el hero correcto en el template', () => {
    fixture.componentInstance.hero = { id: 1, name: 'Hombre Araña', strength: 10 };

    fixture.detectChanges();

    let deA = fixture.debugElement.query(By.css('a'));
    expect(deA.nativeElement.textContent).toContain('Hombre Araña');

    // expect(fixture.nativeElement.querySelector('a').textContent).toContain('Hombre Araña');
  });
});
