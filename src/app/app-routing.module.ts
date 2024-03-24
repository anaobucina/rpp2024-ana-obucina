import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { GrupaComponent } from './grupa/grupa.component';
import { SmerComponent } from './smer/smer.component';
import { StudentComponent } from './student/student.component';
import { ProjekatComponent } from './projekat/projekat.component';

const routes: Routes = [{path: 'home', component:HomeComponent},
{path: 'grupa', component: GrupaComponent},
{path: 'smer', component: SmerComponent},
{path: 'student', component: StudentComponent},
{path: 'projekat', component: ProjekatComponent},
{path: '', redirectTo: '/home', pathMatch: 'full'}        
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
