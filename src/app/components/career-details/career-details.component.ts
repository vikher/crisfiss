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

  career: Career;
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _careerService: CareerService) { }

  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
    this.career = this._careerService.getCareer(id);
  }

  onClick( courseId: number) {
    this._router.navigate(['/courses' , courseId]);
  }

}
