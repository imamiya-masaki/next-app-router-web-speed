import { authorApiClient } from '../apiClient/authorApiClient';

export async function useAuthor(...[options]: Parameters<typeof authorApiClient.fetch>) {
  return {data: await authorApiClient.fetch(options)};
}