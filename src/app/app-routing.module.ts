import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubjectComponent } from './subject/subject.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full', title: 'Library' },
    { path: 'subject', component: SubjectComponent, title: 'Subject' },
];
NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
