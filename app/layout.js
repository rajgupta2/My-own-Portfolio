"use client";
import Navbar from '@/Components/Navbar';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
  return (
    <html>
      <head>
        <title>Raj Gupta Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="008JgsUeBih0IuChXpLy5t96SrF78JfO5Y1-8raKKcc" />
      </head>
      <body className='bg-black text-white'>
        <div className='container-fluid'>
          <div id="navbar" className='row'>
            <Navbar />
          </div>
          <div id="main">
            {children}
          </div>
          <div id="footer" className='row'>
            <div className='col-12 col-md-12 col-lg-12'>
              <h6 className="text-center" style={{fontWeight:'lighter'}}>All &copy; are reserved - Raj Gupta - 2024</h6>
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}
