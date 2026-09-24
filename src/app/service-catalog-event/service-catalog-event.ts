import { Component } from '@angular/core';
import { CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-service-catalog-event',
  standalone: false,
  styleUrl: './service-catalog-event.css',
  templateUrl: './service-catalog-event.html',
})
export class ServiceCatalogEvent {
  categories:any[] = [];

  constructor(catalogService: CatalogService){
    this.categories = catalogService.getCategories();
  }
}
