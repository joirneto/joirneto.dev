import React from 'react'
import '../styles/globals.css'
 
export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
        <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');`}

        </style>
        <Component {...pageProps} />
    </React.Fragment>
  )
}