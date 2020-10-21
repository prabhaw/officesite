import "./../styles/tailwind.css";
import "./../styles/global.css";
import "react-multi-carousel/lib/styles.css";
import { wrapper } from "./../Redux/store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
