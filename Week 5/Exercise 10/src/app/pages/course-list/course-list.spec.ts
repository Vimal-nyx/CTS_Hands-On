import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseList } from './course-list';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Course } from '../../models/course.model';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';


describe('CourseListComponent with NgRx', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;
  let store: MockStore;
  const initialState = {
    course: { courses: [], loading: false, error: null }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseList],
      providers: [
        provideMockStore({ initialState }),
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should render course cards based on store state', () => {
    const mockCourses: Course[] = [
      { id: 1, name: 'NgRx Course', code: 'NG1', credits: 4, gradeStatus: 'passed' }
    ];
    store.setState({ course: { courses: mockCourses, loading: false, error: null } });
    fixture.detectChanges(); // trigger data binding

    const cards = fixture.debugElement.queryAll(By.css('app-course-card'));
    expect(cards.length).toBe(1);
  });

  it('should show loading indicator when loading is true', () => {
    store.setState({ course: { courses: [], loading: true, error: null } });
    fixture.detectChanges();

    const p = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(p.textContent).toContain('Loading courses');
  });
});
