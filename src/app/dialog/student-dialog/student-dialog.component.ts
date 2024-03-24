import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { distinct } from 'rxjs';
import { Grupa } from 'src/app/model/grupa.model';
import { Projekat } from 'src/app/model/projekat.model';
import { Student } from 'src/app/model/student.model';
import { GrupaService } from 'src/app/service/grupa.service';
import { ProjekatService } from 'src/app/service/projekat.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.css']
})
export class StudentDialogComponent   {
  public flag!:number

  grupas!:Grupa[]
  projekats!:Projekat[]

  constructor(
  @Inject(MAT_DIALOG_DATA)public student:Student,
  public dialogRef: MatDialogRef<StudentDialogComponent>,
  public studentService:StudentService,
  public snackBar: MatSnackBar,
  public grupaService:GrupaService,
  public projekatService:ProjekatService
  ){}
  
  ngOnInit(){
    this.grupaService.getAllGrupas().subscribe(data=>{this.grupas=data})
    this.projekatService.getAllProjekts().pipe(distinct()).subscribe(data=>{this.projekats=data; console.log(data)})
  }

  add()
  {

  this.studentService.addStudent(this.student)
  this.snackBar.open('Uspesno ste dodali studenta!','OK',{duration:1500})
  
  }
  update()
  {this.studentService.updateStudent(this.student)
    this.snackBar.open('Uspesno ste azurirali studenta!','OK',{duration:1500})}
  delete()
  {
    this.studentService.deleteStudent(this.student)
    this.snackBar.open('Uspesno ste izbrisali studenta!','OK',{duration:1500})
  }
  cancel()
  {
    this.dialogRef.close()
  }
  compareTo(a: any, b: any) {
    return a.id === b.id;
  }

}
