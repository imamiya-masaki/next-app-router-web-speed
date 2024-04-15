
import "./globals.css"
import { type ReactNode } from 'react';
import { RegisterServiceWorker } from "@/_components/src/utils/RegisterServiceWorkerComponents";
interface LayoutProps {
  children?: ReactNode; // ReactNode型を使用して、childrenの型を指定します。
}


// import { ChakraProvider, useToast } from '@chakra-ui/react';
// import { queryClient } from '../_components/src/admin/lib/api/queryClient';
// import { QueryClientProvider } from '@tanstack/react-query';


import { init as ucaInit } from 'unicode-collation-algorithm2';
ucaInit();

// const AdminSetUpComponent: React.FC<LayoutProps> = ({ children  }) => {
//   const toast = useToast();

//   useEffect(() => {
//     const mutationCache = queryClient.getMutationCache();
//     const onError = mutationCache.config.onError?.bind(mutationCache.config);

//     queryClient.getMutationCache().config.onError = (...args) => {
//       toast({
//         duration: 1000,
//         isClosable: true,
//         status: 'error',
//         title: 'リクエストの処理に失敗しました',
//       });
//       onError?.(...args);
//     };

//     return () => {
//       queryClient.getMutationCache().config.onError = onError;
//     };
//   }, [toast]);
//   return (<Suspense fallback={<div>Loading...</div>}>
//     <QueryClientProvider client={queryClient}>
//       <ChakraProvider>
//         {children}
//       </ChakraProvider>
//     </QueryClientProvider>
//   </Suspense>)
// }

// import { Dialog } from '../_components/src/foundation/components/Dialog';
// import { GlobalStyle } from '../_components/src/foundation/styles/GlobalStyle';
// import { usePathname } from "next/navigation";

// const ClientSetUpComponent: React.FC<LayoutProps> = ({ children  }) => {
//   return (
//     <>
//     <GlobalStyle />
//     <Dialog />
//     {children ?? null}
//     </>
//   )
// }


export default function RootLayout({ children }: {children: React.ReactNode}) {
  // const path = usePathname();
  return     (
  <html lang="ja">
    <RegisterServiceWorker />
  <body>
  {/* <GlobalStyle /> */}
  {/* <Dialog /> */}
  {children}
  </body>
    </html>)
  // return <ClientSetUpComponent><Component {...pageProps} /></ClientSetUpComponent>
  // if (path.includes('/admin')) {
  //   return <AdminSetUpComponent><Component {...pageProps} /></AdminSetUpComponent>;
  // } else {
  //   return <ClientSetUpComponent><Component {...pageProps} /></ClientSetUpComponent>
  // }
}
