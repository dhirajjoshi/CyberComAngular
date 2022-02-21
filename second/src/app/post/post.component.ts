import { 
  Component, Input ,EventEmitter, Output, OnInit 
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl:'./post.component.html' ,
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postUrl=''
  @Output() imgSelected = new EventEmitter<string>()  

  ngOnInit(): void {
      console.log('On Init Hook'+this.postUrl); 
  }
}
