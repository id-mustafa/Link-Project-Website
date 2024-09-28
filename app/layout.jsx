import '@styles/globals.css';
import Navbar from '@components/Navbar'
import Footer from '@components/Footer';

export const metadata = {
  title: "Link Towing and Recovery",
  description: "Link Transportation towing and recovery is a local North Carolina business that specializes in towing."
}

const Rootlayout = ({children}) => {
  return (
    <html>
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <Navbar />
        {/* Add margin or padding equal to navbar height */}
        <main className='app mt-24'> {/* `mt-24` adds margin-top of 96px */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default Rootlayout;
