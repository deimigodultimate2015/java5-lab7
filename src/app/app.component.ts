import {Component, OnInit} from '@angular/core';
import {Prods} from './prods';
import {JsonfileService} from './jsonfile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

  prods: Prods[] = [];
  prodsPagination: Prods[] = [];

  type = true;
  column = 'name';

  currentPage = 0;

  constructor(private jsonfile: JsonfileService) {}

  ngOnInit(): void {
    this.jsonfile.getFileData().subscribe(data => {
      this.prods = data as Prods[];
    }, error1 => {
      console.log(error1);
    });
    this.selectPage(0);
  }

  sortByName() {
    this.column = 'name';
    this.type ? this.type = false : this.type = true;
    if ( this.type ) {
      this.prods.sort((o1, o2) => {
        if (o1.name > o2.name ) { return 1; }
        if (o1.name < o2.name) {return -1; }
        return 0;
      });
    } else {
      this.prods.sort((o1, o2) => {
        if (o1.name < o2.name ) { return 1; }
        if (o1.name > o2.name) {return -1; }
        return 0;
      });
    }
    this.selectPage(0);
  }

  sortByPrice() {
    this.column = 'price';
    this.type ? this.type = false : this.type = true;
    if ( this.type ) {
      this.prods.sort((o1, o2) => {
        if (o1.price > o2.price ) { return 1; }
        if (o1.price < o2.price) {return -1; }
        return 0;
      });
    } else {
      this.prods.sort((o1, o2) => {
        if (o1.price < o2.price ) { return 1; }
        if (o1.price > o2.price) {return -1; }
        return 0;
      });
    }
    this.selectPage(0);
  }

  sortByDiscount() {
    this.column = 'discount';
    this.type ? this.type = false : this.type = true;
    if ( this.type ) {
      this.prods.sort((o1, o2) => {
        if (o1.discount > o2.discount ) { return 1; }
        if (o1.discount < o2.discount) {return -1; }
        return 0;
      });
    } else {
      this.prods.sort((o1, o2) => {
        if (o1.discount < o2.discount ) { return 1; }
        if (o1.discount > o2.discount) {return -1; }
        return 0;
      });
    }
    this.selectPage(0);
  }

  sortByDate() {
    this.column = 'date';
    this.type ? this.type = false : this.type = true;
    if ( this.type ) {
      this.prods.sort((o1, o2) => {
        if (o1.date > o2.date ) { return 1; }
        if (o1.date < o2.date) {return -1; }
        return 0;
      });
    } else {
      this.prods.sort((o1, o2) => {
        if (o1.date < o2.date ) { return 1; }
        if (o1.date > o2.date) {return -1; }
        return 0;
      });
    }
    this.selectPage(0);
  }

  selectPage(page: number) {
    this.currentPage += page;
    console.log('clicked');

    if (this.currentPage < 0) { this.currentPage = 0 ; }

    let totalPage: number;
    if (this.prods.length % 8 !== 0) {
      totalPage = Math.floor((this.prods.length / 8)) + 1;
    } else if (this.prods.length % 8 === 0) {
      totalPage = (this.prods.length / 8);
    }

    console.log(totalPage);

    if ( this.currentPage > totalPage -1 ) {
      this.currentPage = totalPage;
    }

    this.prodsPagination = this.prods.slice(this.currentPage * 8, (this.currentPage + 1) * 8);

  }

}
