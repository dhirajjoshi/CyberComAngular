import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //Service For component Level
  //providers:[ModalService]
})
export class AppComponent {
  images = [
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500'
  ];
  showModal=true;

  //Global services
  constructor(public modal : ModalService) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // Memory Leak
    // setInterval(()=>{
    //   this.showModal= !this.showModal,
    //   console.log(this.modal.visible);
    // }
    // ,5000)
  }


 //memory fix
    // ngOnDestroy(){
    //   this.modal.unregister('abc')
    // }

  //Toggal Service Property
//   openModal($event:Event){
//     $event.preventDefault()
    
//     this.modal.toggleModal()
//   }
//   closeModal(){
// this.modal.toggleModal()
//   }

}