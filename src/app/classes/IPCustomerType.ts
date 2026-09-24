import { IPCustomers } from './IPCustomers';

export interface IPCustomerType {
  CustomerTypeId: number;
  CustomterTypeName: string;
  Customers: IPCustomers[];
}