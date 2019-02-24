import { Injectable } from '@angular/core';
import { Career } from '../models/career.model';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  
musicCompositionCourses: Course[] = [
  {
    id: 1,
    name: 'Formar',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/1.png',
    videoPath: 'assets/images/sample2.mp4'
  },
  {
    id: 2,
    name: 'Idioma',
    startDate: new Date('11/20/2019'),
    isActive: true,
    photoPath: 'assets/images/2.png',
    videoPath: 'assets/images/sample2.mp4'

  },
  {
    id: 3,
    name: 'Tecnicas instrumentales',
    startDate: new Date('12/20/2019'),
    isActive: true,
    photoPath: 'assets/images/3.png',
    videoPath: 'assets/images/sample2.mp4'
  },
  {
    id: 4,
    name: 'Escritura y estetica.',
    startDate: new Date('1/20/2019'),
    isActive: true,
    photoPath: 'assets/images/4.png',
    videoPath: 'assets/images/sample2.mp4'
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

  private listCarrers: Career[] = [
    {
      id: 1,
      name: 'Composición musical',
      startDate: new Date('2/20/2019'),
      isActive: true,
      photoPath: 'assets/images/composicionmusical.png',
      course: this.musicCompositionCourses
    },
    {
      id: 2,
      name: 'Escritura de la canción:',
      startDate: new Date('3/20/2019'),
      isActive: true,
      photoPath: 'assets/images/escrituracancion.png',
      course: this.songwritingCourses
    },
    {
      id: 3,
      name: 'Multiinstrumentismo',
      startDate: new Date('11/20/2019'),
      isActive: true,
      photoPath: 'assets/images/multinstrumentista.png',
      course: this.multiinstrumentismCourses
    },
    {
      id: 4,
      name: 'Interdisciplina',
      startDate: new Date('11/20/2019'),
      isActive: true,
      photoPath: 'assets/images/interdisciplina.png',
      course: this.musicProductionCourses
    },{
      id: 5,
      name: 'Produccion musical',
      startDate: new Date('11/20/2019'),
      isActive: true,
      photoPath: 'assets/images/produccionmusical.png',
      course: this.InterdisciplineCourses
    },
  ];
  constructor() { }

  getListCareers():Career[]{
    return this.listCarrers;
  }

  getCareer(id: number): Career {
    return this.listCarrers.find(e => e.id === id);
  } 

  getCourse(id: number): Course {
    return this.musicCompositionCourses.find(e => e.id === id);
  } 
}
