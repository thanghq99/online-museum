import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
    return (
      <div className='min-h-screen flex flex-col'>
        <Navbar />
        <main className='grow'>
            {children}
        </main>
        <Footer />
      </div>
    )
  }
