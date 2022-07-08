import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoCreateComponent } from './dino-create.component';

describe('DinoCreateComponent', () => {
  let component: DinoCreateComponent;
  let fixture: ComponentFixture<DinoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
