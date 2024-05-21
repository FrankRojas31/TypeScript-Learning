

export function whatsMyType<T> ( argument:T ): T{


    return argument;
} 

let amIString = whatsMyType<string>("Hola Mundo");
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<string[]>(["Hola", "Mundo"]);
console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(amIArray.join("-"));