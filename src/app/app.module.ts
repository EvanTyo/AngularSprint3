import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './bills/bills.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AddBillComponent } from './add-bill/add-bill.component';
import { EditBillComponent } from './edit-bill/edit-bill.component';
import { PatchBillComponent } from './patch-bill/patch-bill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    HomeComponent,
    AddBillComponent,
    EditBillComponent,
    PatchBillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
