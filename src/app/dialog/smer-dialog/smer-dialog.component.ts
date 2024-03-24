import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Smer } from 'src/app/model/smer.model';
import { SmerService } from 'src/app/service/smer.service';

@Component({
  selector: 'app-smer-dialog',
  templateUrl: './smer-dialog.component.html',
  styleUrls: ['./smer-dialog.component.css']
})
export class SmerDialogComponent {

  public flag!:number

  constructor(
  @Inject(MAT_DIALOG_DATA)public smer:Smer,
  public dialogRef: MatDialogRef<SmerDialogComponent>,
  public smerService:SmerService,
  public snackBar: MatSnackBar,
  ){}
  
  add()
  {
  this.smerService.addSmer(this.smer)
  this.snackBar.open('Uspesno ste dodali smer!','OK',{duration:1500})
  
  }
  update()
  {this.smerService.updateSmer(this.smer)
    this.snackBar.open('Uspesno ste azurirali smer!','OK',{duration:1500})}
  delete()
  {
    this.smerService.deleteSmer(this.smer)
    this.snackBar.open('Uspesno ste izbrisali smer!','OK',{duration:1500})
  }
  cancel()
  {
    this.dialogRef.close()
  }


}
