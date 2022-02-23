import { 
  Component, Input ,EventEmitter, Output, OnInit,
  OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
  AfterViewInit,AfterViewChecked,OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl:'./post.component.html' ,
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnChanges,DoCheck
,AfterContentInit, AfterContentChecked, AfterViewInit ,
AfterViewChecked, OnDestroy
{
  name='dhiraj joshi'
  @Input() postUrl=''
  @Output() imgSelected = new EventEmitter<string>()  
  ngOnDestroy(){
    console.log('On Destroy!');}
  ngAfterViewChecked()
  {console.log('After View Checked!');}
  ngAfterViewInit(){
    console.log('After View Init!');
  }
  ngAfterContentChecked(){
    console.log('After Content Checked!');
  }
  ngOnInit(): void {
      console.log('On Init Hook'+this.postUrl); 
  }
  ngAfterContentInit(){
    console.log('After Content Init!');
  }

  ngOnChanges(){
    console.log('On Change Runs!'); 
  }
  ngDoCheck(){
    console.log('Do Check Runs!!'); 
  }
}
