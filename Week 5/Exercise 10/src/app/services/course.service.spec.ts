import { TestBed } from '@angular/core/testing';
import { CourseService } from './course.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Course } from '../models/course.model';


describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CourseService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // asserts no outstanding requests
  });

  it('should fetch courses', () => {
    const mockCourses: Course[] = [
      { id: 1, name: 'Test Course 1', code: 'TC1', credits: 3, gradeStatus: 'pending' },
      { id: 2, name: 'Test Course 2', code: 'TC2', credits: 4, gradeStatus: 'passed' }
    ];

    service.getCourses().subscribe(courses => {
      expect(courses.length).toBe(2);
      expect(courses).toEqual(mockCourses);
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    expect(req.request.method).toBe('GET');
    req.flush(mockCourses);
  });

  it('should handle error gracefully', () => {
    service.getCourses().subscribe(courses => {
      expect(courses).toEqual([]); // our service catches error and returns []
    });

    const req = httpMock.expectOne('http://localhost:3000/courses');
    
    // Fail 3 times because our service has retry(2) which means 1 initial + 2 retries
    req.flush('Error', { status: 500, statusText: 'Server Error' });
    const req2 = httpMock.expectOne('http://localhost:3000/courses');
    req2.flush('Error', { status: 500, statusText: 'Server Error' });
    const req3 = httpMock.expectOne('http://localhost:3000/courses');
    req3.flush('Error', { status: 500, statusText: 'Server Error' });
  });
});
