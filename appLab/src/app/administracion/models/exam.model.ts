export class Exam {
    attention: string
    _id?:string
    exam: string
    result:string

    constructor(attention:string, exam:string,result:string){
        this.attention = attention
        this.exam = exam
        this.result = result
    }
}