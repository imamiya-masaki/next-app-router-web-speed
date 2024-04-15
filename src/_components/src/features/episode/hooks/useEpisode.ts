import { episodeApiClient } from '../apiClient/episodeApiClient';

export async function useEpisode(...[options]: Parameters<typeof episodeApiClient.fetch>) {
  return await episodeApiClient.fetch(options);
}
