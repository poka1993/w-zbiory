import { Link, Head } from '@inertiajs/inertia-react';
import Navigation from '@/Components/Navigation'
import Wines from '@/Components/Wines/Wines'
import Footer from '@/Components/Footer'
import NavButtons from '@/Components/NavButtons';
import React, { useState, useEffect } from 'react';

export default function Welcome(props) {

    const [flash, setFlash] = useState(props.flash.message);
    const [showFlash, setShowFlash] = useState(false);
    const [flashMessage, setFlashMessage] = useState(null);
    const handleCloseFlash = () => {
      setShowFlash(false);
      setFlashMessage(null);
    }

    useEffect(() => {
      if (flash) {
        setFlashMessage(props.flash.message);
        setShowFlash(true);
        setFlash(null);
      }
    });

    const title = "Wina oczekujące";

    return (
        <>
         
         <Head>
            <title>{title}</title>
            <meta head-key="description" name="description"
            content="Portal internetowy gromadzący najlepsze marki wina oraz opinie na ich temat. Zbiór winogronowych trunków, który pozwala skompletować listę ulubionych produktów." />
            </Head>
              
  {/* menu boczne */}
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-auto d-flex flex-column min-vh-100">
  <Navigation props={props.auth.user} notifications={props.notifications} new_notifications={props.new_notifications} title={title}/>      
  <div className='flex-grow-1'>
  <div className='ms-lg-6 me-lg-6 ms-3 me-3 text-align-center border-radius-md flex-grow-1'>
  <div className="col-12">
          <div className="card shadow-xs border mb-1 pb-3 nav-grapes pt-5 pb-6 z-1">
            <div className='nav-grapes-img'></div>        
          </div>
        </div>
        <div className='d-flex row'>
  
      <div className='w-20'> 
  
          <NavButtons />
  
      </div>
  
      </div>
      <div className='d-flex align-items-center justify-content-center'>
      <div className="w-xxl-80 w-xl-80 w-lg-80 w-md-85 w-95"> 
      {/* container */}
        <div className="row mt-sm-n8 mt-n8">
          <div className="col-12">
            <div className="card blur border border-white mb-4 shadow-xs">         
            <div className="card-body p-sm-4 d-flex flex-row align-items-end align-items-sm-start flex-wrap">
  
              <h4 className="mb-1 mb-sm-0 text-start font-weight-bold ms-lg-0 me-lg-0 align-self-start">Wina oczekujące</h4>
              {Boolean(props.total_wines) ?
              <h4 className="mb-1 mb-sm-0 text-start font-weight-bold  align-self-start ms-auto">
                <span className="badge badge-sm border border-success text-success bg-success border-radius-sm me-2 d-flex">Ilość win:
                  <div className="d-flex align-items-center ms-2">{props.total_wines}</div>
                </span>
              </h4> : null}
               </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4 px-3">

    <div className={`card border shadow-xs p-3 alert-card position-fixed d-flex flex-row ${Boolean(showFlash) ? null : "d-none" }`} >
          <div className='d-flex col-10 align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="text-success bi bi-check-circle-fill me-2" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
<p className="text-sm mb-0 text-gray">{flashMessage}</p>
</div>
<div className="text-end col-2">
                <div className="dropdown">
                <button type="button" className="btn btn-white btn-icon px-2 mt-n1 mb-n1 me-n1 py-2 m-0 " onClick={handleCloseFlash} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </button>   

          </div>

        </div>
                  
                  </div>


      <Wines wines={props.wines} admin={true}/>    
      </div>  </div>
      <Footer />  

  </main>                  


        </>
    );
}
