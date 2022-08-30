import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-data-insert',
  templateUrl: './data-insert.component.html',
  styleUrls: ['./data-insert.component.scss']
})
export class DataInsertComponent implements OnInit {

  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }

  errormsg:any;
  readData:any;
  getparamid:any;

 
  
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

    this.service.getAllData().subscribe((res)=>{
      console.log(res,"res==>");

      this.readData = res.data;
      

    });
  };

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
          window.location.href="data#";
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

  //Form Insert Data

  websiteForm = new FormGroup({

    'date': new FormControl('',Validators.required),
    'name': new FormControl('',Validators.required),
    'icon': new FormControl('',Validators.required),
    'link': new FormControl('',Validators.required),
    'visitor': new FormControl('',Validators.required)

  });

  websiteSubmit (){
      if(this.websiteForm.valid){
        console.log(this.websiteForm.value);
        this.service.createData(this.websiteForm.value).subscribe((res)=>{
          console.log(res,'res==>');
          this.websiteForm.reset();
          window.location.reload();
        });
      }
      else{
        this.errormsg = 'all field is required';
      }
  };


}
