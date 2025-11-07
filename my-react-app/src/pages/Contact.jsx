import React, {useState} from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const [sent, setSent] = useState(false)

  function handleChange(e){
    setForm(prev=> ({...prev,[e.target.name]: e.target.value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    // client-side validation
    if(!form.name || !form.email || !form.message){
      alert('Please fill all fields')
      return
    }
    // Simulate submission
    setTimeout(()=> setSent(true),700)
  }

  if(sent) return <div style={{padding:20,background:'rgba(255,255,255,0.02)',borderRadius:12}}>Thank you — your message has been sent. We'll reply to {form.email} soon.</div>

  return (
    <section>
      <h2>Contact</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:20}}>
        <form onSubmit={handleSubmit} style={{padding:20,background:'rgba(255,255,255,0.02)',borderRadius:12}}>
          <label className="label">Name</label>
          <input name="name" className="input" value={form.name} onChange={handleChange} />
          <label className="label">Email</label>
          <input name="email" className="input" value={form.email} onChange={handleChange} />
          <label className="label">Message</label>
          <textarea name="message" className="input" rows={6} value={form.message} onChange={handleChange} />
          <div style={{marginTop:12}}>
            <button className="btn btn-primary" type="submit">Send Message</button>
          </div>
        </form>

        <aside style={{padding:16}}>
          <div style={{fontWeight:700}}>Studio</div>
          <div style={{color:'var(--muted)'}}>C/o 42, Shukrawar Peth, Pune 411002, Maharashtra, India</div>
          <div style={{color:'var(--muted)',marginTop:8}}>Phone: +91-98765-43210</div>
          <div style={{color:'var(--muted)',marginTop:8}}>Email: poonawalaibrahim9@gmail.com</div>
        </aside>
      </div>
    </section>
  )
}