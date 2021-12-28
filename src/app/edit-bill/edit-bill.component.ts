import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillsService } from '../bills.service';
import { BillsComponent } from '../bills/bills.component';
import { Bills } from '../bills/bills.model';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  bill: Bills[] = [];

  editBill: any = {
    title: "",
    description: "",
    dueDate: "",
    amount: 0
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
        this.editBill = payload;
      })
    })
  }

  putData() {
    this.billsService.editBill(this.editBill).subscribe(data => {
      alert("Bill successfully edited!");
      this.returnToBills();
    })
  }

  returnToBills() {
    this.router.navigateByUrl("/bills");
  }
}
