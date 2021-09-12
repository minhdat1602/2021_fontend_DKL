export class Qna {
    id: Number
    topic: String
    question: String
    answer: String
    constructor(id: Number, topic: String, question: String, answer: String) {
        this.id = id
        this.topic = topic
        this.question = question
        this.answer = answer
    }
}
