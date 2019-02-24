import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCareersComponent} from  '../../src/app/components/list-careers/list-careers.component'
import { CreateCareerComponent} from  '../../src/app/components/create-career/create-career.component'
import { CareerDetailsComponent} from  '../../src/app/components/career-details/career-details.component'
import { HomeComponent} from  '../../src/app/components/home/home.component'
import { CourseDetailsComponent} from  '../../src/app/components/course-details/course-details.component'
import { AuthGuard } from './services/auth.guard';
import { PaypalComponent } from './components/paypal/paypal.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'donate', component: PaypalComponent },
  { path: 'careersList', component: ListCareersComponent , canActivate: [AuthGuard]},
  { path: 'create', component: CreateCareerComponent , canActivate: [AuthGuard]},
  { path: 'careers/:id', component: CareerDetailsComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: CourseDetailsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
