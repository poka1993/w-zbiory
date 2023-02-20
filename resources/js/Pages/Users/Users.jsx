import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Navigation from '@/Components/Navigation'
import UsersList from '@/Components/UsersList'
import Footer from '@/Components/Footer'
import { Head } from '@inertiajs/inertia-react';
import React, { useState } from 'react';


export default function Users() {
  const [selectedList, setSelectedList] = useState("Najnowsze konta");
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

            <h4 class="col-sm-7 col-md-8 col-xl-9 col-xl-9 mb-1 mb-sm-0 text-start font-weight-bold ms-lg-0 me-lg-0 align-self-start">Lista użytkowników</h4>
            <div class=" input-group input-group-sm ms-auto me-2 align-items-end mb-0 ms-sm-auto text-nowrap">
                    <span type="button" class="input-group-text text-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                      </svg>
                    </span>
                    <input type="text" class="form-control form-control-sm" placeholder="Szukaj użytkownika" />
                  </div>
</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

    
    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4 px-3">
    <div class="row">
        <div class="col-12">
          <div class="card border shadow-xs mb-4">
            <div class="card-header border-bottom pb-0">
            <div class="row">
                  <div class="col-7">
                    <h6 class="mb-0 font-weight-semibold text-lg">Użytkownicy</h6>
                  </div>
                  <div class="col-5 text-end">
                  <div class="dropdown">
                  <div className='d-flex justify-content-end align-items-end align-items-sm-center mt-1 mt-sm-0 flex-column flex-sm-row'><p className='text-sm me-2 mb-1 mb-sm-3'>Sortowanie:</p>
                  <button type="button" class="btn btn-white btn-icon px-2 py-2 ps-3 pe-3 text-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
                 {selectedList} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                    </button>
                 
                  
<ul class="dropdown-menu dropdown-menu-end">
    <li><a onClick={(e) => setSelectedList(e.target.textContent)} class="dropdown-item">Najnowsze konta</a></li>
    <li><a onClick={(e) => setSelectedList(e.target.textContent)} class="dropdown-item">Ostatnio online</a></li>
    <li><a onClick={(e) => setSelectedList(e.target.textContent)} class="dropdown-item">Alfabetycznie</a></li>
    <li><a onClick={(e) => setSelectedList(e.target.textContent)} class="dropdown-item">Najwięcej opinii</a></li>
  </ul>

                  </div>   
                  </div>
                  </div>
                </div>
            </div>
      <UsersList />
      </div>
        </div>
      </div>
      <Footer />  
    </div>
  </main>                  
  </>
  // </AuthenticatedLayout>
    );
}
