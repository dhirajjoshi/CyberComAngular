import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectValue:string | undefined;
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params:Params)=>{
      if(params['select']==='1')
      {
        this.selectValue='1'
      }
      else{
        this.selectValue='2'
      }
    })
  }
select(event: Event){
  const {value} = (event.target as HTMLSelectElement)
  this.router.navigate(['/upload'],{
  // redirectTo:this.route,
  queryParams:{'select':`${value}`}})
  // console.log(this.selectValue);
  
}
}
