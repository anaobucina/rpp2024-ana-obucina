import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Grupa } from 'src/app/model/grupa.model';
import { Projekat } from 'src/app/model/projekat.model';
import { GrupaService } from 'src/app/service/grupa.service';
import { ProjekatService } from 'src/app/service/projekat.service';

@Component({
  selector: 'app-projekat-dialog',
  templateUrl: './projekat-dialog.component.html',
  styleUrls: ['./projekat-dialog.component.css']
})
export class ProjekatDialogComponent implements OnInit {

  
  public flag!:number
  

  constructor(
  @Inject(MAT_DIALOG_DATA)public projekat:Projekat,
  public dialogRef: MatDialogRef<ProjekatDialogComponent>,
  public projekatService:ProjekatService,
  public grupaService:GrupaService,
  public snackBar: MatSnackBar,
  ){}
  ngOnInit(): void {
   
  }
  
  add()
  {
  this.projekatService.addProjekat(this.projekat)
  this.snackBar.open('Uspesno ste dodali projekat!','OK',{duration:1500})
  
  }
  update()
  {this.projekatService.updateProjekat(this.projekat)
    this.snackBar.open('Uspesno ste azurirali projekat!','OK',{duration:1500})}
  delete()
  {
    this.projekatService.deleteProjekat(this.projekat)
    this.snackBar.open('Uspesno ste izbrisali projekat!','OK',{duration:1500})
  }
  cancel()
  {
    this.dialogRef.close()
  }



}
