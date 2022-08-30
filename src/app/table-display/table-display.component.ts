import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  date:any;
  selectedValue:any;
  data:any;

  ChangeDate(date : any){
    console.log('value:' + date);
    this.selectedValue = date;

    this.service.getDatabyDate(date).subscribe((res:any)=>{
      console.log(res,"dateres==>");

      this.data = res.data;

    });
  }

  ngOnInit(): void {
    
    this.service.getDate().subscribe((res:any)=>{
      console.log(res,"res==>");

      this.date = res.data;

    });

  }


}

