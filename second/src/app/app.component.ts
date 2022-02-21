import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second';
  imgUrl='https://picsum.photos/id/237/200/300';
  changeImage(e:KeyboardEvent) {
    this.imgUrl=(e.target as HTMLInputElement).value;    
  }
  logImg(event:string){
    console.log(event);
  }
}
