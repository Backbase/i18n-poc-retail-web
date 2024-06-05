import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AmountModule } from '@backbase/ui-ang/amount';
import { HeaderModule } from '@backbase/ui-ang/header';
import { TransactionSigningHeaderComponent } from './header.component';

@NgModule({
  declarations: [TransactionSigningHeaderComponent],
  imports: [CommonModule, HeaderModule, AmountModule],
  exports: [TransactionSigningHeaderComponent],
})
export class TransactionSigningHeaderModule {}
