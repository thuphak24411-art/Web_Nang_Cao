import { Component, OnInit, signal } from '@angular/core';
import { CustomerHttpService } from '../services/customer-http-service';
import { IPCustomerType } from '../classes/IPCustomerType';
@Component({
  selector: 'app-service-customer-http',
  standalone: false,
  styleUrl: './service-customer-http.css',
  templateUrl: './service-customer-http.html',
})
export class ServiceCustomerHttp implements OnInit {
  customers = signal<IPCustomerType[]>([]);
  errorMessage = signal('');

  constructor(private customerService: CustomerHttpService) {}

  ngOnInit(): void {
    this.customerService.getCustomersHandleError().subscribe({
      next: (data: IPCustomerType[]) => {
        this.customers.set(data);
      },
      error: (error: Error) => {
        this.errorMessage.set(error.message);
      },
    });
  }
}
