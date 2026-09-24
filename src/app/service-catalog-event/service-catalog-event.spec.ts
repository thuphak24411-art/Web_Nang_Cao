import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCatalogEvent } from './service-catalog-event';

describe('ServiceCatalogEvent', () => {
  let component: ServiceCatalogEvent;
  let fixture: ComponentFixture<ServiceCatalogEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceCatalogEvent],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceCatalogEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
