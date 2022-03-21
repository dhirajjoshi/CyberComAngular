import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  visible = false;
  modals=true
  constructor() { }

//memory leak Fix
//unregister(id:string){
// this.modals=this.modals.filter(
// element=> element.id !== id
// )
// }


  // isModalOpen(){
  //   console.log('Modal Open Call');
  //   console.log(this.visible);
    
  //   return this.visible
  // }

  // toggleModal(){
  //   console.log('toggle Modal call');
  //   console.log(this.visible);
  //   this.visible= !this.visible
  // }
}
