import { APP_INITIALIZER, Provider } from '@angular/core';
import { INPUT_EMAIL_CONFIG_TOKEN, InputEmailConfig } from '@backbase/ui-ang/input-email';
import { PageTitleService } from './page-title.service';
import {
  COUNTRY_CODE_FORMAT_CONFIG_TOKEN,
  CountryCodeFormatConfigMap,
  INPUT_PHONE_CONFIG_TOKEN,
  InputPhoneConfig,
} from '@backbase/ui-ang/input-phone';
import { countryCodes } from './input-phone-country-list';

function initializeApp(pageTitleService: PageTitleService) {
  return function (): Promise<any> {
    return new Promise((resolve) => {
      pageTitleService.run();
      resolve(true);
    });
  };
}

const inputEmailConfig: InputEmailConfig = {
  maxLength: 255,
  pattern: '^([A-Z0-9a-z_%+-]+\\.?)+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,64}$',
};

const inputPhoneConfig: InputPhoneConfig = {
  countryList: countryCodes,
  defaultCountryIsoCode: 'US',
  hideSelectedCountryFlag: true,
  enableCountryCode: true,
};

const countryCodeFormatConfig: CountryCodeFormatConfigMap = {
  '+1': {
    mask: '+0 (000) 000-0000',
    minLength: 10,
    maxLength: 10,
  },
};

export type InitOptions = 'pageTitles' | 'inputEmailConfig' | 'inputPhoneConfig' | 'countryCodeFormatConfig';

export const initProviders: Record<InitOptions, Provider> = {
  pageTitles: {
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [PageTitleService],
    multi: true,
  },
  inputEmailConfig: {
    provide: INPUT_EMAIL_CONFIG_TOKEN,
    useValue: inputEmailConfig,
  },
  inputPhoneConfig: {
    provide: INPUT_PHONE_CONFIG_TOKEN,
    useValue: inputPhoneConfig,
  },
  countryCodeFormatConfig: {
    provide: COUNTRY_CODE_FORMAT_CONFIG_TOKEN,
    useValue: countryCodeFormatConfig,
  },
};
