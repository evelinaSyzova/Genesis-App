import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CourseService } from './course.service';
import { environment } from 'src/environments/environment';

describe('CourseService', () => {
  let service: CourseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CourseService],
    });
    service = TestBed.inject(CourseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of courses', () => {
    const mockResponse = {
      courses: [
        { id: 1, title: 'Course 1' },
        { id: 2, title: 'Course 2' },
      ],
    };

    const req = httpMock.expectOne(
      `${environment.host}/${environment.version}/core/preview-courses`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should retrieve a single course by id', () => {
    const mockCourse = { id: 1, title: 'Course 1' };

    const req = httpMock.expectOne(
      `${environment.host}/${environment.version}/core/preview-courses/1`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockCourse);
  });
});
