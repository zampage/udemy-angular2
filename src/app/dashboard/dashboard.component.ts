import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks : string[];
  updateEnabled = false;
  selectedStock;

  constructor( private ss :  StockService ) {

  }

  getAllStocks(){
    this.ss.getStocksApi()
      .subscribe(
        data => this.stocks = data,
        error => console.log('Server Error')
      )
  }

  createStock(newCode : any, newName : any){
    this.ss.createStock(newCode.value, newName.value).subscribe(
      data => {
        this.getAllStocks();
        newCode.value = "";
        newName.value = "";
      },
      error => console.log('Server Error')
    );
  }

  updateStock(newCode : any, newName : any){
    this.ss.updateStock(this.selectedStock.id, newCode.value, newName.value).subscribe(
      data => {
        this.getAllStocks();
        this.updateEnabled = false;
        this.selectedStock = undefined;
        newCode.value = "";
        newName.value = "";
      },
      error => console.log('Server Error')
    );
  }

  deleteStock(id : string){
    this.ss.deleteStock(id).subscribe(
      data => {
        this.getAllStocks();
      },
      error => console.log('Server Error')
    )
  }

  loadDetails(stock : any){
    this.updateEnabled = true;
    this.selectedStock = stock;
  }

  ngOnInit() {
    this.getAllStocks();
  }

}
