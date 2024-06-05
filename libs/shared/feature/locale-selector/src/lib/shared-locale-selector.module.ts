import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '@backbase/ui-ang/icon';
import { LocaleSelectorModule } from '@backbase/ui-ang/locale-selector';
import { SharedLocaleSelectorService } from './shared-locale-selector.service';
import { SharedLocaleSelectorComponent } from './shared-locale-selector.component';

@NgModule({
  declarations: [SharedLocaleSelectorComponent],
  imports: [CommonModule, LocaleSelectorModule, IconModule],
  exports: [SharedLocaleSelectorComponent],
  providers: [SharedLocaleSelectorService],
})
export class SharedLocaleSelectorModule {}
