import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillsService } from '../bills.service';
import { BillsComponent } from '../bills/bills.component';
import { Bills } from '../bills/bills.model';

@Component({
  selector: 'app-patch-bill',
  templateUrl: './patch-bill.component.html',
  styleUrls: ['./patch-bill.component.scss']
})
export class PatchBillComponent implements OnInit {

  bill: Bills[] = [];
  patchChecked: Boolean = false;

  patchBill: any = {
    title: "",
    description: "",
    dueDate: "",
    amount: 0,
    paid: false
  }

  constructor(private billsService: BillsService, 
              private billsComponent: BillsComponent,
              private route: ActivatedRoute,
              private router: Router) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = params['id'];
      this.billsService.getSingleBill(myid).subscribe(payload=>{
        this.patchBill = payload;
      })
    })
  }

  patchData() {

    if (this.patchBill.paid == false) {
      this.billsService.patchPaidBill(this.patchBill).subscribe(data => {
        this.ngOnInit();
      })
    }

    else if (this.patchBill.paid == true) {
      this.billsService.patchUnpaidBill(this.patchBill).subscribe(data => {
        this.ngOnInit();
      })
    }
  }
}
