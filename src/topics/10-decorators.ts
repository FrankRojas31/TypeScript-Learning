
function classDecorator<T extends { new (...args:any[]): {}}>(
    constructor:T
){
    return class extends constructor {
        newProperty = "New Property";
        hello= "Override";
    } 
}

/* function classDecorator(
    constructor:any
){
    return class extends constructor {
        newProperty = "New Property";
        hello= "Override";
    } 
} */

@classDecorator
export class SuperClass {

    public Myproperty:string = "123";

    print(){
        console.log("Hola, mundo")
    }

}


console.log(SuperClass);

const MyClass = new SuperClass();

console.log(MyClass);