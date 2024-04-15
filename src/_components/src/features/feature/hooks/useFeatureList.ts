import { featureApiClient } from '../apiClient/featureApiClient';

export async function useFeatureList(...[options]: Parameters<typeof featureApiClient.fetchList>) {
  return await featureApiClient.fetchList(options)
}
