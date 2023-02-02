import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Filter from '@/Components/Filter'
import Navigation from '@/Components/Navigation'
import Statistics from '@/Components/Statistics'
import WinePage from '@/Components/Wines/WinePage'
import Footer from '@/Components/Footer'
import { Head } from '@inertiajs/inertia-react';



export default function Wine(props) {
    return (
      <>
        {/* // <AuthenticatedLayout
        //     auth={props.auth}
        //     errors={props.errors}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // > */}
        
            <Head title="Strona główna" />
            
{/* menu boczne */}
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
<Navigation />
<div className='ms-lg-6 me-lg-6 ms-3 me-3 text-align-center border-radius-md'>
      <div className="col-12">
          <div className="card shadow-xs border mb-1 pb-3 nav-grapes pt-5 pb-6 bg-cover" style={{backgroundImage: `url('storage/img/header-blue2.jpg')`}}> 
      </div>
    </div>
    <div className='d-flex align-items-center justify-content-center'>
    <div class="w-xxl-80 w-xl-80 w-lg-80 w-md-85 w-95"> 
    {/* container */}
      <div class="row mt-sm-n8 mt-n8">
        <div class="col-12">
          <div class="card blur border border-white mb-4 shadow-xs">         
            <div class="card-body p-sm-4 d-flex flex-column flex-sm-row align-items-end align-items-sm-start">

              <h4 class="mb-1 mb-sm-0 text-start font-weight-bold ms-lg-0 me-lg-0 align-self-start"><span class="badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <div class="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9.6</div>
                          </span>Lamita Chardonnay</h4>
                          <button type="button" class="btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 ms-sm-auto text-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-heart me-2" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
  </svg>
  Dodaj do ulubionych
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

    
    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4 px-3">
      <WinePage />      
      <Footer />  
    </div>
  </main>                  
  </>
  // </AuthenticatedLayout>
    );
}
