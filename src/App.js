import React from 'react';

import iPadImage from './assets/ipad.png';
import iPhoneImage from './assets/iphone.png';
import iMac from './assets/imac.png';

import './styles/global.css';
import Header from './Components/Header';
import ShoppingInformation from './Components/ShoppingInformation';
import ProductBox from './Components/ProductBox';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ShoppingInformation />
      <ProductBox 
        backgroundColor="dark"
        title="iPad Pro"
        caption="Supercharged by the Apple M1 chip."
        subtitle="Available second half of May"
        links={[
          {
            title: "Learn more",
            link: "https://gooogle.com",
          },
          {
            title: "Order",
            link: "https://gooogle.com",
          },
        ]}
        image={{
          image: iPadImage,
          alt: "iPad",
        }}
      />
      <ProductBox 
        backgroundColor="light"
        title="iPhone"
        caption="Blast past fast."
        subtitle="From $29.12/mo. for 24 mo. or $699 before trade-in¹ Buy directly from Apple with special carrier offers"
        links={[
          {
            title: "Learn more",
            link: "https://gooogle.com",
          },
          {
            title: "Buy",
            link: "https://gooogle.com",
          },
        ]}
        image={{
          image: iPhoneImage,
          alt: "iPhone",
        }}
      />
      <ProductBox 
        backgroundColor="light"
        title="iMac"
        caption="Say hello."
        subtitle="Available second half of May"
        links={[
          {
            title: "Learn more",
            link: "https://gooogle.com",
          },
          {
            title: "Order",
            link: "https://gooogle.com",
          },
        ]}
        image={{
          image: iMac,
          alt: "iMac",
        }}
      />
    </div>
  );
}

export default App;
