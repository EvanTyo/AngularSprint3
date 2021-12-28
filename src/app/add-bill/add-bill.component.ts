import { Component, OnInit } from '@angular/core';
import { BillsService } from '../bills.service';
import { BillsComponent } from '../bills/bills.component';
import { Bills } from '../bills/bills.model';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.scss']
})
export class AddBillComponent implements OnInit {

  bill: Bills[] = [];
  addButton = this.billsComponent.addButtonDisplay;

  addBill: any = {
    title: "",
    description: "",
    dueDate: "",
    amount: 0,
    paid: false
  }

  constructor(private billsService: BillsService, private billsComponent: BillsComponent) { }

  ngOnInit(): void {
    this.billsComponent.getData();
  }

  postData() {
    this.billsService.addBill(this.addBill).subscribe(data => {
      alert("Bill successfully added!");
      this.billsComponent.getData();
    });
  }

  hideAdd() {
    this.addButton = false;
    this.billsComponent.hideAddFields();
  }
}
