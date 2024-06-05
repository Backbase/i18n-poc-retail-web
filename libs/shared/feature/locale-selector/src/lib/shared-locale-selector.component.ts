import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedLocaleSelectorService } from './shared-locale-selector.service';

@Component({
  selector: 'bb-shared-locale-selector',
  templateUrl: './shared-locale-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedLocaleSelectorComponent {
  readonly currentLocale: string;

  constructor(private localeService: SharedLocaleSelectorService) {
    this.currentLocale = this.localeService.currentLocale.split('-')[0];
  }

  onSelectLocale(localeCode: string): void {
    this.localeService.setLocale(localeCode);
  }
}
