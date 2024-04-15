export async function checkAuth() {
    // 認証状態をチェックするロジック（例: APIを叩く、トークンを検証する等）
    const isAuthenticated = true; // 仮の条件
    if (!isAuthenticated) {
      return {
        redirect: {
          destination: '/admin', // 未認証時のリダイレクト先
          permanent: false,
        },
      };
    }
  
    return { props: {} }; // 認証済みの場合はページコンポーネントにプロパティを渡す
  }