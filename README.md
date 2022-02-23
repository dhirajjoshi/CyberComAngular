# CyberComAngular
TypeScript
Data Types:
Boolean,
Number,
String,
Object,
Function,
Undefined,

Install TypeScript through NPM
npm install typescript --save-dev

To run compiler 
npx tsc file_name.ts

Function
function add(num1 : number, num2 : number){
console.log(num1+num2);
}
add(10,20);

If we Want to return an number
function add(num1 : number, num2 : number) : number {
console.log(num1+num2);
}
add(10,20);

Annotation in Variables 
Types of Annotation in variables are:
String,
Number,
Boolean,
Null,
Undefined

let myName: String = ‘’;
Or
let myName = ’’; //it is restricted to string because we had define string vale 
Both are same String variable we can not change to other data type

If we not define value it automatically take any ad data type

If we want to declare variable it can b string or number not other than that
We have to declare as
Let myName number | string =’’;


Array Annotation
Let a : string[] = [];

Object Annotation
const acc={name:’fbxdc’,balance:0};
//automatically take string and number
If we want to define data type we use
Const acc: {name:string,balance:number} = {name:’xvfb’,balance:45};
And if we want to define property for future use we can use
Const acc: {name:string,balance:number,status?:string} = {name:’’,balance:};

For object of array we use
Let accounts : {}[]

Interface
interface IAccount{
	name: string,
	balance: number,
	status?: string,
	deposit?: () => void     // It is a method and it return nothing 
}
//use interface
const account: IAccount={
	Name:’dvx’,
	balance:543
}
// for array of interface
Let accc:IAccount[] ;


Life Cycle Hooks in Angular
ngOnChanges() -> Called before ngOnInit()
ngOnInit() -> Called once, after the first ngOnChanges(). ngOnInit() is still called even when ngOnChanges() is not 
ngDoCheck() -> Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
ngAfterContentInit() -> Called once after the first ngDoCheck().
ngAfterContentChecked() -> Called after ngAfterContentInit() and every subsequent ngDoCheck().
ngAfterViewInit() ->Called once after the first ngAfterContentChecked()
ngAfterViewChecked() -> Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked()
ngOnDestroy() -> Called immediately before Angular destroys the directive or component.

-1 constructor will rin
-2 ngOnChanges will run
-3 ngOnInit will run
-4 ngDoCheck will run 
-5 ngAfterContentInit will run
-6 ngAfterContentChecked will run
-7 ngAfterViewInit will run
-8 ngAfterViewChecked will run
-9 ngOnDestroy will run
- componenet or directive distroy hone pr OnDestroy wala hook run hoga

-> jitni b check wale hooks hai vo 2 bar run honge

-> Most Commonly used hooks
ngOnInit()
ngOnChanges()
ngOnDestroy()
- Hooks jo ek se zyada bar run hote hai vo app ki performance pr impact krte hai.

ngOnInit(){} //it runs when our component is initilize
//OnInit is an interface
//we can implements it in class

-> component.spec.ts file use for unit testing
-> unit testing individuals part testing
-> relative path -> (./)current folder path
-> absolute path -> whole path of file eg(A:\Cyber Com\JS\...) 

-> npm vs ng serve
ng serve- project development server pe serve hoti hai
npm start- package.json me 'start' name ki property hai usme 'ng serve' value hai vo run krta hai

production buid types
local(option),production,staging


PIPE
- curDate=new Date();
{{curDate | date:'formate of the date eg. MMM d y'}} //output feb 22 2022
there are some predefine formate for date eg. 'short' //it display M/d/yy, h:mm a

json pipe -> it is use to display the object

directives :
there are two types of directives 
1. attribute directive -> it focus on change the appearance or behavior of an element

ngClass & ngStyle
->app.componenet.html
-[ngStyle]="{'background-color':color()}"

->app.componenet.ts
color(){
  return 'red';
}

2. structural directive -> it focus on add or remove elements from the DOM
