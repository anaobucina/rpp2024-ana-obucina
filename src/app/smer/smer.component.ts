import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Smer } from '../model/smer.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SmerService } from '../service/smer.service';
import { MatDialog } from '@angular/material/dialog';
import { SmerDialogComponent } from '../dialog/smer-dialog/smer-dialog.component';

@Component({
  selector: 'app-smer',
  templateUrl: './smer.component.html',
  styleUrls: ['./smer.component.css']
})
export class SmerComponent {

  displayedColumns=['id','naziv','oznaka','actions'];
  dataSource!:MatTableDataSource<Smer>;
  selektovanaSmer!:Smer

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private smerService:SmerService,private dialog:MatDialog){}

  ngOnInit():void{
    this.loadData();
  }

  ngOnChanges(){
    if(this.selektovanaSmer.id)
    {
      this.loadData()
    }
  }

  public loadData() 
  {
 
    this.smerService.getAllSmers().subscribe( data => {
     this.dataSource = new MatTableDataSource(data);
     this.dataSource.sortingDataAccessor = (data: any, property) => {
       switch(property) {
         case 'id' : return data[property];
         case 'naziv' : return data[property];
         default: return data[property].toLocaleLowerCase();
       }
     };
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
   })
   }

   selectedRow(row:Smer)
  {
  this.selektovanaSmer=row
  }
  applyFilter(filterValue : string) {
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(flag:number,id:Number,naziv:string,oznaka:String)
  {
    const dialog=this.dialog.open(SmerDialogComponent,{data:{id:id,naziv:naziv,oznaka:oznaka}})
    dialog.componentInstance.flag=flag;
    dialog.afterClosed().subscribe(data=>{ if (data===1){this.loadData()}})
  }


}
