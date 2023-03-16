import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(){
    let coursesUrl: string = `${environment.host}/${environment.version}/core/preview-courses`; 
    return this.http.get<{courses: Course[]}>(coursesUrl);
  }
  getCourse(courseId: string| null){
    let courseUrl: string = `${environment.host}/${environment.version}/core/preview-courses/${courseId}`; 
    return this.http.get<Course>(courseUrl);
  }
}
