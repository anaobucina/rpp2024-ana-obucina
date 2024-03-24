import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Grupa } from 'src/app/model/grupa.model';
import { Smer } from 'src/app/model/smer.model';

import { GrupaService } from 'src/app/service/grupa.service';
import { SmerService } from 'src/app/service/smer.service';

@Component({
  selector: 'app-grupa-dialog',
  templateUrl: './grupa-dialog.component.html',
  styleUrls: ['./grupa-dialog.component.css']
})
export class GrupaDialogComponent implements OnInit {

  public flag!:number
  smers!:Smer[]

  constructor(
  @Inject(MAT_DIALOG_DATA)public grupa:Grupa,
  public dialogRef: MatDialogRef<GrupaDialogComponent>,
  public grupaService:GrupaService,
  public smerService:SmerService,
  public snackBar: MatSnackBar,
  ){}

  ngOnInit(): void {
    this.smerService.getAllSmers().subscribe(data=>{this.smers=data})
  }
  
  add()
  {
  this.grupaService.addGrupa(this.grupa)
  this.snackBar.open('Uspesno ste dodali grupu!','OK',{duration:1500})
  
  }
  update()
  {this.grupaService.updateGrupa(this.grupa)
    this.snackBar.open('Uspesno ste azurirali grupu!','OK',{duration:1500})}
  delete()
  {
    this.grupaService.deleteGrupa(this.grupa)
    this.snackBar.open('Uspesno ste izbrisali grupu!','OK',{duration:1500})
  }
  cancel()
  {
    this.dialogRef.close()
  }
  compareTo(a: any, b: any) {
    return a.id === b.id;
  }


}
