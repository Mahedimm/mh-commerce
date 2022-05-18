import "swiper/css/bundle";
import { Layout } from '../components';
import '../styles/globals.css';
import '../styles/swiper.css';
function MyApp({ Component, pageProps }) {
  return(
    <Layout>
       <Component {...pageProps} />
    </Layout>
   
  )
}

export default MyApp
