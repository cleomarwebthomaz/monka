import { Provider } from 'react-redux';
import App from 'next/app'

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import 'react-toastify/dist/ReactToastify.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

import MonkaApp from './App';

import store from '../store';
import { get } from '../services/http';

import '../styles/global.scss';

export default class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {
      let pageProps = {}
  
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }

      const setting = await get('/setting');
      pageProps.setting = setting;

      return { pageProps }
    }

    componentWillMount() {
    }    
  
    render () {
      const { Component, pageProps } = this.props
  
      return (
        <Provider store={store}>
            <MonkaApp {...pageProps}>
                <Header {...pageProps} />

                <div id="wrapper">
                    <Component {...pageProps} />
                </div>

                <Footer {...pageProps} />            
            </MonkaApp>
        </Provider>
      )
    }
  }
