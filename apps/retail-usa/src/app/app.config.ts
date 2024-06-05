import { AppLevelConfig } from '@backbase/shared/feature/config';

export const APP_CONFIG: AppLevelConfig = {
  /**
   * Note: `infinite-scroll` option is supported by a limited amount of journeys.
   * You can trace the usage of `APP_CONFIG.paginationType` and `appPaginationTypeMapper`
   * to find out which journeys don't support it.
   */
  paginationType: 'pagination',
  pageSize: 10,
};
