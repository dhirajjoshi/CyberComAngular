import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second';
  currDate =new Date();
  price = 2000;
  temp =26.8;
  pizza={
    topings:['origano','chilli'],
    size:'large'
  }
color(){
  return 'red';
}
  blueClass=false;
  imgUrl='https://picsum.photos/id/237/200/300';
  changeImage(e:KeyboardEvent) {
    this.imgUrl=(e.target as HTMLInputElement).value;    
  }
  logImg(event:string){
    console.log(event);
  }
}
