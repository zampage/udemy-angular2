import {Component} from "@angular/core";
import {StockService} from './stock.service';

@Component({
  selector: 'stocks',
  template: `<h3>Stocks</h3>
    {{title}}
    <ul [ngStyle]="{'color': mycolor, 'font-size': mysize}" [ngClass]="'centerClass'">
      <li *ngFor="let s of stocks">{{s}}</li>
    </ul>
    
    <hr>
    
    List of Stock Markets: <small>({{stockMarkets.length}} available)</small>
    <ul *ngIf="stockMarkets.length >= 3" [ngClass]="{customClass:false, centerClass:iscenter}">
      <li *ngFor="let sm of stockMarkets">{{sm}}</li>
    </ul>
    
    <hr>
    
    <div [ngSwitch]="market" [ngClass]="'customClass'">
      <div *ngSwitchCase="'NYSE'">New York Stock Exchange</div>
      <div *ngSwitchCase="'LSE'">London Stock Exchange</div>
      <div *ngSwitchCase="'HKSE'">Hong Kong Stock Exchange</div>
      <div *ngSwitchCase="'NASDAQ'">National Association of Securities Dealers Automated Quotations</div>
      <div *ngSwitchDefault>Could not find market: {{market}}</div>
    </div>
  `,
  styles: [`
    .customClass{
      color: #0099ff;
    }
    
    .centerClass{
      text-align:center;
    }
  `]
})

export class StocksComponent{

  title = 'List of Stocks: ';
  stocks;

  stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE'];
  showStockMarkets = true;
  market = this.stockMarkets[2];

  mycolor = '#ff9900';
  mysize = '150%';
  iscenter = true;

  constructor(ss : StockService){
    this.stocks = ss.getStocks();
  }

}
