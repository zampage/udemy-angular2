import {Component} from "@angular/core";
import {StockService} from './stock.service';

@Component({
  selector: 'stocks',
  template: `<h3>Stocks</h3>
    {{title}}
    <ul>
      <li *ngFor="let s of stocks">{{s}}</li>
    </ul>
  `
})

export class StocksComponent{

  title = 'List of Stocks: ';
  stocks;

  constructor(ss : StockService){
    this.stocks = ss.getStocks();
  }

}
