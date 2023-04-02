import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableComponent } from './table/table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'project';
  registerForm!: FormGroup;
  submitted = false;
  reset=false;
  formValue: any;
  formValueArray: any[]=[];
  
  constructor(private formBuilder: FormBuilder,
    private router:Router){}
  ngOnInit(){

      this.registerForm = this.formBuilder.group({
        UserName: new FormControl(null, Validators.required),
        Email:new FormControl(null, [Validators.required, Validators.email]),
       phone:new FormControl('', [Validators.required, Validators.pattern(("[0-9]\\d{9}"))]),
       gender: new FormControl('1',Validators.required),
       DOB:new FormControl(null, Validators.required),
  
      });
    }

    

    onsubmit(){
      this.submitted=true;
      if (this.registerForm.invalid) {
        return;
      }
      this.formValue = this.registerForm.value;
      this.formValueArray.push(this.formValue);
      this.registerForm.reset();
      this.submitted=false;
      // this.router.navigateByUrl('table')
      console.log(this.formValueArray)
    }
  
  }
  