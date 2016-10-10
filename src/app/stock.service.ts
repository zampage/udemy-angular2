import { Injectable } from '@angular/core';

@Injectable()

export class StockService{

  getStocks() : string[]{
    return ['APPLE', 'IBM', 'GOOGLE', 'MICROSOFT'];
  }

}
