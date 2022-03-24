import { Component } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-mergeall',
  templateUrl: './mergeall.component.html',
  styleUrls: ['./mergeall.component.css']
})
export class MergeallComponent {
getdata(data: any){
  return of(data + ' Data')
}
  constructor() { 
    const source=from(['Hello','Hii','World'])

    source.pipe(
      map(res=>this.getdata(res)),
      mergeAll()
      // mergeMap(res=>this.getdata(res))
    ).subscribe(res=>{console.log(res);
    })
  }
}
