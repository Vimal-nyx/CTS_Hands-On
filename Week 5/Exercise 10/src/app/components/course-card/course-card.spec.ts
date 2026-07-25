import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCard } from './course-card';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';


describe('CourseCardComponent', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course input', () => {
    component.course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };
    fixture.detectChanges();
    const heading = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(heading.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested output on click', () => {
    component.course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };
    fixture.detectChanges();
    
    spyOn(component.enrollRequested, 'emit');
    
    const enrollButton = fixture.debugElement.queryAll(By.css('button'))[1].nativeElement;
    enrollButton.click();
    
    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  it('should log on ngOnChanges', () => {
    spyOn(console, 'log');
    component.course = { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' };
    component.ngOnChanges({
      course: new SimpleChange(null, component.course, true)
    });
    expect(console.log).toHaveBeenCalled();
  });
});
