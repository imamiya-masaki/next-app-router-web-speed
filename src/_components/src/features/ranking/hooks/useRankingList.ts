import { rankingApiClient } from '../apiClient/rankingApiClient';

export async function useRankingList(...[options]: Parameters<typeof rankingApiClient.fetchList>) {
  return await rankingApiClient.fetchList(options);
}
