import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.scss']
})
export class TableDisplayComponent implements OnInit {

  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }

  date:any;
  selectedValue:any;
  data:any;
  readData:any;
  getparamid:any;
  errormsg:any;


  ChangeDate(date : any){
    console.log('value:' + date);
    this.selectedValue = date;

    this.service.getDatabyDate(date).subscribe((res:any)=>{
      console.log(res,"dateres==>");

      this.data = res.data;

    });
  }

  ngOnInit(): void {

    this.getparamid = this.router.snapshot.paramMap.get('id');

    this.service.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,'res==>');
      this.updateForm.patchValue({
        date:res.data[0].date,
        name:res.data[0].name,
        visitor:res.data[0].visitor
      });
    });
    
    this.service.getDate().subscribe((res:any)=>{
      console.log(res,"res==>");

      this.date = res.data;


      this.service.getAllData().subscribe((res)=>{
        console.log(res,"res==>");
  
        this.readData = res.data;
        
  
      });

    });

  }

   //Delete Data

   deleteID(id:any){
    console.log(id,'deleteid==>')
    this.service.DeleteData(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      window.location.reload();
    });
  }

  //Update Data

  userUpdate(){
    
    console.log(this.updateForm.value,'updatedform');

    if(this.updateForm.valid){
        this.service.UpdateData(this.updateForm.value,this.getparamid).subscribe((res)=>{
          console.log(res,'resupdated');
          window.location.href="index.html/data";
        });
    }else{
        this.errormsg = 'all field is requreied';
    }

  }

  updateForm = new FormGroup({

    'date': new FormControl('',Validators.required),
    'name': new FormControl('',Validators.required),
    'visitor': new FormControl('',Validators.required)

  });


}

