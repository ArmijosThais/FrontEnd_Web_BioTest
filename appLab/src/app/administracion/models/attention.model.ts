export class Attention {
    _id?:string
    patient: string
    date:Date
    state:string

    constructor(patient:string, date:Date, state:string){
        this.patient = patient
        this.date = date
        this.state = state
    }
}