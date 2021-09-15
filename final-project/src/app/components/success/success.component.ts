import { Component, OnInit } from '@angular/core';
import { FormatNumberService } from '../../services/format-number.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(
    public formatNumberService: FormatNumberService
  ) { }

  ngOnInit(): void {
  }

}
