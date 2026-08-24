import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [['About Me', 'about'], ['Skills', 'skills'], ['Certifications', 'certifications'], ['Goals', 'goals'], ['Contact', 'contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="nav-wrap"><nav className="navbar"><a className="brand" href="#home"><span>NB</span> Nandini BM</a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button><div className={`nav-links ${open ? 'is-open' : ''}`}>{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's connect <span>↗</span></a></div></nav></header>
}
