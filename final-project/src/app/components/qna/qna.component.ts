import { Component, OnInit } from '@angular/core';
import { Qna } from 'src/app/model/qna.class';
import { QnaService } from '../../services/qna.service';

@Component({
  selector: 'app-qna',
  templateUrl: './qna.component.html',
  styleUrls: ['./qna.component.scss']
})
export class QnaComponent implements OnInit {

  constructor(
    private qnaService: QnaService
  ) { }

  qnaArray: Qna[] = []
  accountArray: Qna[] = []
  progressArray: Qna[] = []
  paymentArray: Qna[] = []
  otherArray: Qna[] = []

  ngOnInit(): void {
    this.qnaService.getAllQna().subscribe(
      (response) => {
        this.qnaArray = response
        this.accountArray = this.qnaArray.filter(
          (item) => {
            return item.topic === "account"
          }
        )
        this.progressArray = this.qnaArray.filter(
          (item) => {
            return item.topic === "progress"
          }
        )
        this.paymentArray = this.qnaArray.filter(
          (item) => {
            return item.topic === "payment"
          }
        )
        this.otherArray = this.qnaArray.filter(
          (item) => {
            return item.topic === "other"
          }
        )
      }
    )

  }



}
