import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorComponent } from '../form-error/form-error.component';
import { FormMessageComponent } from '../form-message/form-message.component';

@NgModule({
  declarations: [FormErrorComponent, FormMessageComponent],
  imports: [CommonModule],
  exports: [FormErrorComponent, FormMessageComponent],
})
export class ErrorsFormModule {}
