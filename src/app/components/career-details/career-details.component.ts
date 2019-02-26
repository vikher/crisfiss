import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';
import { Career } from '../../models/career.model';
import { CareerService } from '../../services/career.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.css']
})
export class CareerDetailsComponent implements OnInit {
  private _id;
  career: Career;
  courses: Course[];
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _careerService: CareerService) { }

  ngOnInit() {
    // const id = +this._route.snapshot.paramMap.get('id');
    // this.career = this._careerService.getCareer(id);

    this._route.params.subscribe(params => {
      this._id = +params['id'];
      this.career = this._careerService.getCareer(this._id);
      this.courses = this._careerService.getCoursesByCareerId(this.career.id)
    })
  };

  onClick( courseId: number) {
    this._router.navigate(['/courses' , courseId]);
  }

  getNextCareer() {
    if (this._id < 5) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }
    this._router.navigate(['/careers', this._id]);
  }

}
