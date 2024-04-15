import { releaseApiClient } from '../apiClient/releaseApiClient';

export async function useRelease(...[options]: Parameters<typeof releaseApiClient.fetch>) {
  return await releaseApiClient.fetch(options);
}
