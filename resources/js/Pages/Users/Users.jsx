import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Navigation from '@/Components/Navigation'
import UsersList from '@/Components/UsersList'
import Footer from '@/Components/Footer'
import { Head } from '@inertiajs/inertia-react';
import React, { useState, useEffect } from 'react';
import NavButtons from '@/Components/NavButtons';
import { useForm } from '@inertiajs/inertia-react';

export default function Users(props) {
    const title = "Lista użytkowników";
    const { data, setData, get, processing, errors, reset } = useForm({
      selectedList: props.selected_list,
      searchPhrase: Boolean(props.search_phrase) ? props.search_phrase : null
    });
    
    const { selectedList, searchPhrase } = data;



  const [sortUsers, handleSortUsers] = useState(false);
  useEffect(() => {
    if (sortUsers) {
        return get(`/users`, { params: data, preserveScroll: true });
    }
  });

  const findUser = () => {
    handleSortUsers(true);
  }

  const setSearchPhrase = (e) => {
    const { value } = e.target;
      setData({
        ...data,
        searchPhrase: value
      });
  }

  const handleSelectedList = (e) => {
    const { textContent } = e.target;
      setData({
        ...data,
        selectedList: textContent
      });
      handleSortUsers(true);
  }

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
<div className='ms-lg-6 me-lg-6 ms-3 me-3 text-align-center border-radius-md'>
<div className="col-12 ">
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
          <div className="card-body p-sm-4 d-flex flex-column flex-sm-row align-items-end align-items-sm-start">

            <h4 className="col-sm-7 col-md-8 col-xl-9 col-xl-9 mb-1 mb-sm-0 text-start font-weight-bold ms-lg-0 me-lg-0 align-self-start">Lista użytkowników</h4>
            <div className=" input-group input-group-sm ms-auto me-2 align-items-end mb-0 ms-sm-auto text-nowrap">
                    <span type="button" className="input-group-text text-body" onClick={findUser}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                      </svg>
                    </span>
                    <input type="text" className="form-control form-control-sm" onChange={(e) => setSearchPhrase(e)} value={Boolean(searchPhrase) ? searchPhrase : ""} placeholder="Szukaj użytkownika" />
                  </div>
</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

    
    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4 px-3 ">
    <div className="row">
        <div className="col-12">
          <div className="card border shadow-xs mb-4">
            <div className="card-header border-bottom pb-0">
            <div className="row">
                  <div className="col-7">
                    <h6 className="mb-0 font-weight-semibold text-lg">Użytkownicy</h6>
                  </div>
                  <div className="col-5 text-end">
                  <div className="dropdown">
                  <div className='d-flex justify-content-end align-items-end align-items-sm-center mt-1 mt-sm-0 flex-column flex-sm-row'><p className='text-sm me-2 mb-1 mb-sm-3'>Sortowanie:</p>
                  <button type="button" className="btn btn-white btn-icon px-2 py-2 ps-3 pe-3 text-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
                 {selectedList} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                    </button>
                 
                  
<ul className="dropdown-menu dropdown-menu-end">
    <li><a onClick={(e) => handleSelectedList(e)} className="dropdown-item">Najnowsze konta</a></li>
    <li><a onClick={(e) => handleSelectedList(e)} className="dropdown-item">Ostatnio online</a></li>
    <li><a onClick={(e) => handleSelectedList(e)} className="dropdown-item">Alfabetycznie</a></li>
    <li><a onClick={(e) => handleSelectedList(e)} className="dropdown-item">Najwięcej opinii</a></li>
  </ul>

                  </div>   
                  </div>
                  </div>
                </div>
            </div>
      <UsersList users={props.users}/>
      </div>
        </div>
      </div>
      </div>
    </div>
    <Footer />  
  </main>                  
  </>
  // </AuthenticatedLayout>
    );
}
