/**
 * Note: `infinite-scroll` option is supported by a limited amount of journeys.
 * You can trace the usage of `APP_CONFIG.paginationType` and `appPaginationTypeMapper`
 * to find out which journeys don't support it.
 */
export type AppLevelPagination = 'pagination' | 'load-more' | 'infinite-scroll';

export interface AppLevelConfig {
  paginationType: AppLevelPagination;
  pageSize: number;
}

export function appPaginationTypeMapper<T>(
  mapper: Partial<Record<AppLevelPagination, T>>,
  fallback: T,
): (pagination: AppLevelPagination) => T {
  return (pagination) => {
    if (mapper[pagination]) {
      return mapper[pagination];
    }

    console.warn(`There is no AppLevelPagination match for ${pagination}, falling back to ${fallback}.`);

    return fallback;
  };
}
