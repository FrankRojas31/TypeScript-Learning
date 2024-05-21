import { Person } from './08-classes';
export class Person {
   //public name: string;
    // public address: string;
    constructor( 
        public name: string,
        public lastname: string, 
        public address: string = "No address"
    ){}
}

/* export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: Number,
        public RealName: string,
    ) {
        super(RealName, "New York");
    }
} */

export class Hero {
    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: Number,
        public RealName: string,
        public person: Person,
    ) {
        // this.person = new Person(RealName)
    }
}

const tony = new Person("Tony", "Stark", "New York");
const IronMan = new Hero("Iron Man", 45, "Tony Stark", tony);

console.log(IronMan);