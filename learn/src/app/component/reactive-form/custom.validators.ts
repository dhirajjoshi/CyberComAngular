import { AbstractControl,ValidationErrors } from '@angular/forms'

export class CustomVelidators{
    static cannotContainSpace(control :AbstractControl):ValidationErrors | null{
        if((control.value as string).indexOf(' ')>=0){
            return { cannotContainSpace:true}
        }
        return null;
    }
    static shouldBeUnique(control: AbstractControl):Promise<ValidationErrors | null>{
        return new Promise((resolve) => {
            setTimeout(() => {
                if(control.value  === 'Dhiraj' || control.value ==='dhiraj'){
                    resolve({ shouldBeUnique:true})
                }
                else {resolve(null);}
            }, 2000);
        });
        
        
    }
}