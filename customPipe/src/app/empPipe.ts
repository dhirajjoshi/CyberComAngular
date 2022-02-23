import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'emp'
})
export class EmpPipe implements PipeTransform{
    transform(value: any):string {
        return(value == '' ? '-':'mr.'+value);
    }
}
