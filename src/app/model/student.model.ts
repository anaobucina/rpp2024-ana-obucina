import { Grupa } from "./grupa.model"
import { Projekat } from "./projekat.model"

export class Student{
    id!:number
    ime!:string
    broj_indeksa!:string 
    prezime!:string
    grupa!:Grupa
    projekat!:Projekat
}