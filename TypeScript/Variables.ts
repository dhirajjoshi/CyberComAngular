const myName : String='';

let a : string[]=[];

const acc ={ name:'zdv',balance:0};

const accs: { name:string , balance:number }={ name:'dgvs',balance:9};

const accounts: {name:string,balance:number,status?:string} = {name:'dgfsv',balance:47};

let account : {}[];

interface IAccount{
	name: string,
	balance: number,
	status?: string,
	deposit?: () => void     // It is a method and it return nothing 
}
//use interface
const ac: IAccount={
	name:'gfdb',
	balance:543
}
//for array of interface
let accc: IAccount[];
