import { Toaster } from 'react-hot-toast';
import "swiper/css/bundle";
import { Layout } from '../components';
import { StateContext } from "../context/StateContext";
import '../styles/bestProductSwiper.css';
import '../styles/globals.css';
import '../styles/recommendedSwiper.css';
function MyApp({ Component, pageProps }) {
  return(
    <StateContext>
      <Layout>
      <Toaster />
           <Component {...pageProps} />
      </Layout>
    </StateContext>
    
   
  )
}

export default MyApp
