import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Projekat } from '../model/projekat.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ProjekatService } from '../service/projekat.service';
import { ProjekatDialogComponent } from '../dialog/projekat-dialog/projekat-dialog.component';

@Component({
  selector: 'app-projekat',
  templateUrl: './projekat.component.html',
  styleUrls: ['./projekat.component.css']
})
export class ProjekatComponent {

  displayedColumns=['id','naziv','opis','oznaka','actions'];
  dataSource!:MatTableDataSource<Projekat>;
  selektovanaProjekat!:Projekat

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private projekatService:ProjekatService,private dialog:MatDialog){}

  ngOnInit():void{
    this.loadData();
  }


  public loadData() 
  {
 
    this.projekatService.getAllProjekts().subscribe( data => {
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

   selectedRow(row:Projekat)
  {
  this.selektovanaProjekat=row
  }
  applyFilter(filterValue : string) {
    filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(flag:number,id:Number,naziv:string,opis:string,oznaka:String,)
  {
    const dialog=this.dialog.open(ProjekatDialogComponent,{data:{id:id,naziv:naziv,opis:opis,oznaka:oznaka,}})
    dialog.componentInstance.flag=flag;
    dialog.afterClosed().subscribe(data=>{ if (data===1){this.loadData()}})
  }


}
