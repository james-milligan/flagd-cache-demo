import React, { useEffect, useState } from 'react';
import './App.css';
import {Client} from '@openfeature/js-sdk'

function App(props: {
  client: Client
}) {
  const [color, setColor] = useState<string>("#B75CFF");
  const [tf, setTf] = useState(false);

  useEffect(() => {
    async function setBannerColour() {
      setColor(await props.client.getStringValue("bannerColor","#B75CFF"))
      setTf(false);
    }
    if (tf) {
      setBannerColour();
    }
  }, [tf])

  return (
    <div className="App">
      <div className="banner" style={{backgroundColor: color}}/> 
      <h1>✨ FlagD Connect API ✨</h1>
      <h3>
        This webapp is listening to the flagd event stream via the connect protocol
      </h3>

      <button className='go-button' onMouseUp={() => setTf(true)}>
        FETCH BANNER COLOR
      </button>

      <h3>Update the 'flag-config' ConfigMap to update the default flag value and bust the cache</h3>
      <h3 style={{backgroundColor:"#B75CFF", margin: 2}}>
        {color === '#B75CFF' ? '-->': ''}#B75CFF{color === '#B75CFF' ? '<--': ''}
      </h3>
      <h3 style={{backgroundColor:"#35A4FB", color: "#000", margin: 3}}>
        {color === '#5522fa' ? '-->  ': ''}#5522fa {color === '#5522fa' ? '  <--': ''}
      </h3>
      <h3 style={{backgroundColor:"#FFA500", color: "#000", margin: 3}}>
        {color === '#FFA500' ? '-->  ': ''}#FFA500 {color === '#FFA500' ? '  <--': ''}
      </h3>
      <div className="data-box">
      <pre>
      </pre>
      </div>

    </div>
  );
}

export default App;
