import { Tldraw } from 'tldraw'

export default function Board() {
  return (
    // The fixed header is h-16 (4rem).
    // We create a container that is fixed, inset 0,
    // and adds padding-top to account for the header.
    <div className="fixed inset-0 pt-16">
      <Tldraw 
        // tldraw's dark mode syncs with CSS.
        // Since your body is dark, it will automatically
        // render in dark mode.
        inferDarkMode
        persistenceKey='data'
      />
    </div>
  )
}