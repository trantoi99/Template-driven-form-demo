import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  @ViewChild('f') f!: NgForm;
  @ViewChild('nameEle') nameEle!: NgModel;
  @ViewChild('phoneEle') phoneELe!: NgModel;

  title = 'DemoApp';
  name: string = '';
  phone: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(this.f){
      this.f.valueChanges?.subscribe((data) => {
        console.log(data);
      })
    }

    if(this.nameEle){
      this.nameEle.valueChanges?.subscribe((name: any) => {
        console.log(name);
      })
    }

    if(this.phoneELe){
      this.phoneELe.valueChanges?.subscribe((phone: any) => {
        console.log(phone);
      })
    }
  }


  submit(f: NgForm){
    console.log(f.status);
  }

  refreshData(){
    this.f.reset();
  }
}
