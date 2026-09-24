import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceCatalogEvent } from './service-catalog-event/service-catalog-event';
import { ServiceCustomerHttp } from './service-customer-http/service-customer-http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeMenu } from './home-menu/home-menu';

@NgModule({
  declarations: [
    App,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    ServiceCatalogEvent,
    ServiceCustomerHttp,
    HomeMenu,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, RouterModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
