import "antd/dist/reset.css";
import "@fontsource/tajawal";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPageWithLayout } from "../src/types";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  const authenticationRequired = Component.authenticationRequired ?? false;

  return (
    <>
        {/* <ModalProvider> */}
          <>
            {/* <DefaultSeo /> */}
            {authenticationRequired ? (
              <></>
              // <PrivateRoute>
              //   {getLayout(<Component {...pageProps} />)}
              // </PrivateRoute>
            ) : (
              getLayout(<Component {...pageProps} />)
            )}
            {/* <ManagedModal /> */}
            {/* <ManagedDrawer /> */}
            {/* <ToastContainer autoClose={2000} theme="colored" /> */}
            {/* <SocialLogin /> */}
          </>
        {/* </ModalProvider> */}
      </>
  );
}
export default CustomApp;
