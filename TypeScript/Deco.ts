function AbcDef(target : Function) {
    target.prototype.id = 'abc';
}

@AbcDef
class Abc{
    id : string;
}
@AbcDef
class Bcd{
    id:string;
}
console.log(Abc.id);
