import { appPaginationTypeMapper } from './app-level-config';

describe('appPaginationTypeMapper', () => {
  it('should create a mapper function when called', () => {
    const mapperFn = appPaginationTypeMapper({}, 42);
    expect(mapperFn).toBeInstanceOf(Function);
  });

  it('should return the match if it exists', () => {
    const pagination = 'paginationMatch';
    const loadMore = 'loadMoreMatch';
    const infiniteScroll = 'infiniteScrollMatch';
    const mapperFn = appPaginationTypeMapper(
      { pagination: pagination, 'load-more': loadMore, 'infinite-scroll': infiniteScroll },
      'fallback',
    );
    expect(mapperFn('pagination')).toBe(pagination);
    expect(mapperFn('load-more')).toBe(loadMore);
    expect(mapperFn('infinite-scroll')).toBe(infiniteScroll);
  });

  it('should return the fallback if no match is found', () => {
    const fallback = 'fallback';
    const mapperFn = appPaginationTypeMapper({}, fallback);
    expect(mapperFn('pagination')).toBe(fallback);
    expect(mapperFn('load-more')).toBe(fallback);
    expect(mapperFn('infinite-scroll')).toBe(fallback);
  });
});
