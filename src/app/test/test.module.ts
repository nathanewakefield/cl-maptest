import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test.component';

const routes: Routes = [
  {
    path: ':testId',
    component: TestComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestComponent]
})
export class TestModule { }