import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section>
      <div className="hero">
        <div>
          <h1>Works that whisper, paintings that speak.</h1>
          <p>Welcome to the studio of Ibrahim Poonawala — painter & illustrator exploring urban life, monsoon skies and intimate interiors. Browse the gallery or reach out for commissions.</p>
          <div className="cta">
            <Link to="/gallery"><button className="btn btn-primary">View Gallery</button></Link>
            <Link to="/contact"><button className="btn btn-outline">Contact Artist</button></Link>
          </div>
        </div>
        <div>
          <div style={{borderRadius:12,overflow:'hidden'}}>
            <img src="public/assets/artworks/mumbai-street.jpg" alt="Featured artwork" style={{width:'100%',height:420,objectFit:'cover'}} />
          </div>
        </div>
      </div>

      <h2 style={{marginTop:28}}>Featured Works</h2>
      <div style={{marginTop:16}} className="gallery-grid">
        {/* We'll show a few manual featured cards for the Home page — in production map from data */}
        <article className="card">
          <img src="public/assets/artworks/monsoon-india.jpg" alt="Monsoon" />
          <div className="meta"><strong>Monsoon Over Mumbai</strong><div style={{color:'var(--muted)'}}>Oil on Canvas — ₹75,000</div></div>
        </article>
        <article className="card">
          <img src="public/assets/artworks/varanasi-ghat.jpg" alt="Ghat" />
          <div className="meta"><strong>Ghat</strong><div style={{color:'var(--muted)'}}>Ink on Paper — ₹18,500</div></div>
        </article>
      </div>
    </section>
  )
}