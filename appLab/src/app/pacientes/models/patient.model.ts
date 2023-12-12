export class Patient {
    id:string
    name: string
    lastname:string
    phone:string
    address:string

    constructor(id:string,name:string, lastname:string, phone:string, address:string){
        this.id = id
        this.name = name
        this.lastname=lastname
        this.phone=phone
        this.address = address
    }
}