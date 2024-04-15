import { authApiClient } from '../apiClient/authApiClient';

export async function useAuthUser() {
  const user = await authApiClient.fetchAuthUser();
  return {data: user}
}
