import { episodeApiClient } from '../apiClient/episodeApiClient';

export async function useEpisodeList(...[options]: Parameters<typeof episodeApiClient.fetchList>) {
  return await episodeApiClient.fetchList(options);
}
