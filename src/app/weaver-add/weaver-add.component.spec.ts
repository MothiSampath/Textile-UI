import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaverAddComponent } from './weaver-add.component';

describe('WeaverAddComponent', () => {
  let component: WeaverAddComponent;
  let fixture: ComponentFixture<WeaverAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaverAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaverAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
