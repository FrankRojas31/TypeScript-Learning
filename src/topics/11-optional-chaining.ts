export interface Passeger {

    name: string;
    children?: string[];


}


const Passenger1: Passeger = {
    name: "Fernando",
}

const Passenger2: Passeger = {
    name: "Melissa",
    children: ["Natalia", "Elizabeth"]
}

const returnChildren = ( passeger: Passeger): number => {
    
    const howManyChildren = passeger.children?.length || 0;
    // const howManyChildren = passeger.children!.length;
    console.log(passeger.name ,howManyChildren)

    return howManyChildren;
}


returnChildren(Passenger1)