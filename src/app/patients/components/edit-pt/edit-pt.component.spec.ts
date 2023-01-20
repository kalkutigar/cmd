import { importExpr } from '@angular/compiler/src/output/output_ast';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { EditPtComponent } from './edit-pt.component';
// import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
// import { ActivatedRoute } from '@angular/router';

describe('EditPtComponent', () => {
  let component: EditPtComponent;
  let fixture: ComponentFixture<EditPtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule, RouterTestingModule],
      declarations: [ EditPtComponent ],
     
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
