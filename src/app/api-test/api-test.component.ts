import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  emp:any;
  constructor(private http: HttpClient) {
    this.getEmp();

   }

   getEmp(){
    this.http.get('http://5b812d2297d8e500144f2de0.mockapi.io/employee').subscribe(data=>{
      if(data!=null){
        this.emp = data;
      }
    })
   }

   addEmp(e){
    this.http.post('', e).subscribe((data:any) => {
      alert(data.message);
      this.getEmp();
    })
   }



  
  ngOnInit() {
  }

}
