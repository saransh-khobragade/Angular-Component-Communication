import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Directives';

  imageArr=[]

  ngOnInit(){
    for(let i=0;i<10000;i++){
      this.imageArr.push("../assets/DSCN2117.JPG")
    }
  }
}
