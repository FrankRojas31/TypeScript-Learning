

function AddNumber (a:number, b: number){
    return a + b;
}

const AddNumberRows = (a: number, b: number):String => {
    return `${a + b}`;
}

function Multiply (firstNumber:number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}

/* const results:number = AddNumber(1,2);
const resultsLambda:String = AddNumberRows(1,2);
const multiply: number = Multiply(1,2);
console.log({results, resultsLambda, multiply}); */

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount:number) => {

    character.hp += amount;
}

const Strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp () {
        console.log(`Puntos de Vida ${ this.hp }`)
    }
}

healCharacter(Strider, 10);
healCharacter(Strider, 10);
Strider.showHp();

export {}