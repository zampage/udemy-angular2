import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks : string[];

  constructor( private ss :  StockService ) {

  }

  getAllStocks(){
    this.ss.getStocksApi()
      .subscribe(
        data => this.stocks = data,
        error => console.log('Server Error')
      )
  }

  ngOnInit() {
    this.getAllStocks();
  }

}
