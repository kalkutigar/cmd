import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { ActivatedRoute } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';

describe('AdminDashboardComponent', () => {
  let component: AdminDashboardComponent;
  let fixture: ComponentFixture<AdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule , RouterTestingModule],
      declarations: [ AdminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  it(`should have title as 'name'` , ()=>{
    const fixture = TestBed.createComponent(AdminDashboardComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    expect(app.querySelector('.page-wrapper span').textContent).toContain('Appointments')
    
  })
});
