import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-all-time',
  templateUrl: './all-time.component.html',
  styleUrls: ['./all-time.component.scss']
})
export class AllTimeComponent implements OnInit {
  data: any;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {

    this.service.getAllTimeData().subscribe((res:any)=>{
      console.log(res,"res==>");

      this.data = res.data;

    });
  }

}
