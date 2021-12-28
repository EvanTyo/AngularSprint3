import { DatePipe } from '@angular/common';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillsService } from '../bills.service';
import { Bills } from './bills.model';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  bills: Bills[] = [];
  addButtonDisplay: Boolean = false;
  chosenValue: String = "default";

  tempBill: any = {
    title: "",
    description: "",
    dueDate: "",
    amount: 0,
    paid: false
  }

  constructor(private billsService: BillsService, 
              private router: Router,
              private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.billsService.getBills().subscribe(data => {
      this.bills = data;
    })
  }

  getSingleData(billId: any) {
    this.billsService.getSingleBill(billId).subscribe(data => {
      this.getData();
      this.tempBill = data;
    })
  }

  editNavigate(billId: any) {
    this.router.navigateByUrl("/bills/" + billId + "/edit");
  }

  deleteData(billId: any) {
    this.billsService.deleteBill(billId).subscribe(data => {
      alert("Bill successfully deleted!");
      this.getData();
    });
  }

  displayAddFields() {
    this.addButtonDisplay = true;
  }

  hideAddFields() {
    this.addButtonDisplay = false;
  }

  displayDate(dueDate: string) {
    return this.datePipe.transform(dueDate, 'MMMM d, y');
  }

  sortBills() {
    switch (this.chosenValue) {
      case "default":
        this.bills.sort(function (a,b) { return a.id - b.id});
        alert("Bills sorted by default");
        break;
      case "title":
        this.bills.sort((a,b) => a.title.localeCompare(b.title));
        alert("Bills sorted by title");
        break;
      case "date":
        this.bills.sort((a,b) => a.dueDate.localeCompare(b.dueDate));
        alert("Bills sorted by date");
        break;
      case "amount":
        this.bills.sort(function (a,b) { return a.amount - b.amount});
        alert("Bills sorted by amount");
        break;
      case "paid":
        this.bills.sort(a => { return a.paid ? -1 : 1 });
        alert("Bills sorted by paid");
        break;
      case "unpaid":
        this.bills.sort(a => { return a.paid ? 1 : -1 });
        alert("Bills sorted by unpaid");
        break;
    }
  }
}
