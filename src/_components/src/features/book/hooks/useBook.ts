import { bookApiClient } from '../apiClient/bookApiClient';

export async function useBook(...[options]: Parameters<typeof bookApiClient.fetch>) {
  console.log('useBook')
  return {data: await bookApiClient.fetch(options)};
}
