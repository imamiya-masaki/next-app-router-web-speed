import { bookApiClient } from '../apiClient/bookApiClient';

export async function useBookList(...[options]: Parameters<typeof bookApiClient.fetchList>) {
  console.log('useBookList')
  return await bookApiClient.fetchList(options);
}
