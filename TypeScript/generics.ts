class Bank <T> {
    private data : T[] =[];
    add(a:T){
        this.data.push(a);      
    }
    remove(){
        this.data.shift();
    } 
    // display(data:T);
    // display(data):Boolean{
    //     for (let i = 0; i < data.length; i++) {
    //         console.log(data[i]); 
    //     }  
    //     return false;
    // }
}

const stringBank = new Bank<string>();
stringBank.add('sdfgdf');
stringBank.add("457");

const numberBank = new Bank();
numberBank.add(424);