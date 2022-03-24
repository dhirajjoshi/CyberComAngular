import { Component } from '@angular/core';
import { from, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent {

  getdata(data: any){
    return of(data + ' Data')
  }
    constructor() { 
      const source=from(['Hello','Hii','World'])
  
      source.pipe(
        // map(res=>this.getdata(res)),
        // mergeAll()
        mergeMap(res=>this.getdata(res))
      ).subscribe(res=>{console.log(res);
      })
    }
  

}
