"use client"

import styles from './page.module.css'
import {useEffect, useRef, useState} from "react";

import './css/juicyslider.css';

export default function Home() {
  const [images, setImages] = useState([]);
  const [onLoad, setOnLoad] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    (async function(){
      if(window !== undefined){
        await import('./js/jquery.min.js');
        await import('./js/jquery-ui.min');
        await import('./js/juicyslider');
        setOnLoad(true)
      }
    })()
  }, [])

  useEffect(() => {
    fetch('http://218.145.27.85:1337/api/photos?populate=*&filters')
      .then(response => {
        if (response.ok) {
          return response.json(); // Parsing response data as JSON
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(data => {
        const images = data.data.map((item) => item.attributes.img.data.attributes.url)
        setImages(images);
      }).catch(error => console.error(error));
  }, [])

  useEffect(() => {
    if (onLoad && images.length > 0) {
      $(sliderRef.current).juicyslider();
    }
  }, [images, onLoad])

  return (
    <main className={styles.main}>
      <section style={{width: '500px', height: '500px'}}>
        <div ref={sliderRef} id="myslider" className="juicyslider">
          <ul>
            {
              images.map((image) => (
                <li key={image}>
                  <img src={image} alt="tt"/>
                </li>
              ))
            }
          </ul>

          <div className="nav next"></div>
          <div className="nav prev"></div>
          <div className="mask"></div>
        </div>
      </section>
    </main>
  )
}