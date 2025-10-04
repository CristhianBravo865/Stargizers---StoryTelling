import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStory } from './basic-story';

describe('BasicStory', () => {
  let component: BasicStory;
  let fixture: ComponentFixture<BasicStory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicStory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicStory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
