import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry, switchMap } from 'rxjs/operators';
import { Course } from '../models/course.model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    
    return this.http.get<Course[]>(this.apiUrl).pipe(
      retry(2),
      map(courses => courses.filter(c => c.credits > 0)),
      tap(courses => console.log('Fetched courses via HTTP:', courses)),
      catchError(err => {
        console.error('Error fetching courses', err);
        return of([]);
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course);
  }

  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCourseWithStudents(id: number): Observable<any> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      switchMap(course => this.http.get(`http://localhost:3000/students?courseId=${course.id}`).pipe(
        map(students => ({ ...course, students }))
      ))
    );
  }
}
