import { Component, OnInit } from '@angular/core';
// import Employee Model
import { Course } from '../../models/course.model';
import { Career } from '../../models/career.model';
import { CareerService } from '../../services/career.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-careers',
  templateUrl: './list-careers.component.html',
  styleUrls: ['./list-careers.component.css']
})

export class ListCareersComponent implements OnInit {

musicCompositionCourses: Course[] = [
  {
    id: 1,
    name: 'Formar',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 2,
    name: 'Idioma',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 3,
    name: 'Tecnicas instrumentales',
    startDate: new Date('12/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 4,
    name: 'Escritura y estetica.',
    startDate: new Date('1/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  }
];
songwritingCourses: Course[] = [
  {
    id: 5,
    name: 'Número de líneas',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 6,
    name: 'Longitud de la línea',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 7,
    name: 'Esquema de rima',
    startDate: new Date('12/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 8,
    name: 'Tipos de rima',
    startDate: new Date('1/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 9,
    name: 'Lenguaje corporal',
    startDate: new Date('1/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  }
];
multiinstrumentismCourses: Course[] = [
  {
    id: 10,
    name: 'Teclados',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 11,
    name: 'Instrumentos de cuerda',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 12,
    name: 'Vientos',
    startDate: new Date('12/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 13,
    name: 'Percusiones y electrónica',
    startDate: new Date('1/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  }
];
musicProductionCourses: Course[] = [
  {
    id: 14,
    name: 'Psicoacusticias',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 15,
    name: 'Preproducción',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 16,
    name: 'producción',
    startDate: new Date('12/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 17,
    name: 'post-producción',
    startDate: new Date('1/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  }
];
InterdisciplineCourses: Course[] = [
  {
    id: 18,
    name: 'Música',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 19,
    name: 'Danza',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 20,
    name: 'Literatura',
    startDate: new Date('12/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  },
  {
    id: 21,
    name: 'teatro',
    startDate: new Date('1/20/2019'),
    isActive: true,
    photoPath: 'assets/images/mary.png'
  }
];

careers: Career[] ;

  constructor(
    private _careerService: CareerService,
    private _router: Router ) { }

  ngOnInit() {
    this.careers =  this._careerService.getListCareers();
  }
  
  onClick(careerId: number) {
    this._router.navigate(['/careers', careerId]);
  }

}
