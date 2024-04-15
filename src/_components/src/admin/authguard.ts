import { authApiClient } from './features/auth/apiClient/authApiClient';
import { queryClient } from './lib/api/queryClient';

export async function authGuard() {
    const user = await queryClient.fetchQuery({
      queryFn: async () => {
        try {
          const user = await authApiClient.fetchAuthUser();
          return user;
        } catch (_err) {
          return null;
        }
      },
      queryKey: authApiClient.fetchAuthUser$$key(),
    });
  
    if (user == null) {
        return {
            redirect: {
              destination: '/admin', // 未認証時のリダイレクト先
              permanent: false,
            },
          };
    } else {
        return {props: user}
    }
  }