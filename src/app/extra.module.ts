import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { NgMaterialIconComponent } from 'ng-material-icon';


@NgModule({
  declarations: [ViewComponent],
  imports: [CommonModule, NgMaterialIconComponent],
  exports: [ViewComponent, NgMaterialIconComponent],
})
export class ExtraModule {}