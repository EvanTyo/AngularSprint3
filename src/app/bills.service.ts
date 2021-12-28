import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bills } from './bills/bills.model';

@Injectable({
  providedIn: 'root'
})
export class BillsService {
  link = "http://localhost:8082/api/";

  constructor(private http: HttpClient) { }

  getBills(): Observable<any> {
     return this.http.get(this.link + "bills");
  }

  getSingleBill(billId: any) {
    return this.http.get(this.link + "bills/" + billId)
  }

  addBill(bill: Bills): Observable<any> {
    const headers = {'Content-Type': 'application/json'};
    return this.http.post(this.link + 'bills', bill, {'headers': headers});
  }

  editBill(bill: Bills): Observable<any> {
    const headers = {'Content-Type': 'application/json'};
    return this.http.put(this.link + 'bills/' + bill.id + "/edit", bill, {'headers': headers});
  }

  patchPaidBill(bill: Bills) {
    return this.http.patch(this.link + "bills/" + bill.id + "/paid", bill);
  }

  patchUnpaidBill(bill: Bills) {
    return this.http.patch(this.link + "bills/" + bill.id + "/unpaid", bill);
  }

  deleteBill(billId: any) {
    return this.http.delete(this.link + "bills/" + billId);
  }
}
