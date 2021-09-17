import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  faSearch = faSearch;
  searchText = ''

  ngOnInit(): void {
    Aos.init();
    console.log(this.searchText)
  }

}
