import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeHomeComponent } from './edite-home.component';

describe('EditeHomeComponent', () => {
  let component: EditeHomeComponent;
  let fixture: ComponentFixture<EditeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
