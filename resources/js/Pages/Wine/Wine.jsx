import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Filter from '@/Components/Filter'
import Navigation from '@/Components/Navigation'
import Statistics from '@/Components/Statistics'
import WinePage from '@/Components/Wines/WinePage'
import Footer from '@/Components/Footer'
import { Head } from '@inertiajs/inertia-react';
import NavButtons from '@/Components/NavButtons';
import { useImageSize } from 'react-image-size';
import { useForm } from '@inertiajs/inertia-react';
import React, { useState } from 'react';

export default function Wine(props) {
    const wine = props.wine;
    const title = Boolean(wine) ? wine.name : null;
    const favorite = props.wine.favorite;
    const opinions = props.opinions;
    const userRate = props.user_rate;
    const avgRate = Boolean(props.avg_rate) ? parseFloat(props.avg_rate).toFixed(1) : "Brak";
    const totalRates = props.total_rates;
    const usersFavorite = props.users_favorite;
    const totalFavorites = props.total_favorites;
    const totalOpinions = props.total_opinions;
    const urlImg = "storage/" + wine.image;
    const [dimensionsImg, { loading, error }] = useImageSize(urlImg);    
    const selectedList = props.selected_list;

    const { data, setData, post, delete: destroy, processing, errors, reset } = useForm({
      wine_id: props.wine.id
    }); 

    const [showFlash, setShowFlash] = useState(null);
    const handleCloseFavorite = () => setShowFlash(null);

    const addToFavorite = () => {
      post(`/addToFavorite`, { params: data, preserveScroll: true });
      return setShowFlash("Wino zostało dodane do listy ulubionych.")
    }

    const removeFromFavorite = () => {
      destroy('/removeFromFavorite', { params: data, preserveScroll: true });
      return setShowFlash("Wino zostało usunięte z listy ulubionych.")
    }

    

    return (
      <>
        {/* // <AuthenticatedLayout
        //     auth={props.auth}
        //     errors={props.errors}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // > */}
        
        <Head>
            <title>{title}</title>
            <meta head-key="description" name="description"
            content="Portal internetowy gromadzący najlepsze marki wina oraz opinie na ich temat. Zbiór winogronowych trunków, który pozwala skompletować listę ulubionych produktów." />
            </Head>
            
{/* menu boczne */}
<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-auto d-flex flex-column min-vh-100">

<Navigation props={props.auth.user} notifications={props.notifications} new_notifications={props.new_notifications}/>        
<div className='flex-grow-1'>
<div className='ms-lg-6 me-lg-6 ms-3 me-3 text-align-center border-radius-md'>

      <div className="col-12">
        <div className="card shadow-xs border mb-1 pb-3 nav-grapes pt-5 pb-6 z-1">
          <div className='nav-grapes-img'></div>        
        </div>
      </div>


    <div className='d-flex row'>
    <div className='w-20'> 
        <NavButtons />
    </div>





    <div className='d-flex align-items-center justify-content-center'>
    <div className="w-xxl-80 w-xl-80 w-lg-80 w-md-85 w-95"> 
    {/* container */}
        <div className="row mt-sm-n8 mt-n8 z-3">
      </div>
          <div className="col-12">
            <div className="card blur border border-white mb-4 shadow-xs">         
              <div className="card-body p-sm-4 d-flex flex-column flex-sm-row align-items-end align-items-sm-start">

                <h4 className="mb-1 mb-sm-0 text-start font-weight-bold ms-lg-0 me-lg-0 align-self-start"><span className="badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                            <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill me-1" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
                            {avgRate}</div>
                            </span>{wine.name}</h4>
                            {Boolean(props.auth.user && props.wine.approved) ?
                            (favorite ?
               <button type="button" onClick={removeFromFavorite} className="btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 ms-sm-auto text-nowrap">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-heartbreak me-2" viewBox="0 0 16 16">
        <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38.094 38.094 0 0 0 .867-.59Zm-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922Zm-1.25 1.137a36.027 36.027 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3 1.815 4.537Zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z"/>
      </svg>
    Usuń z ulubionych
            </button> :
              <button type="button" onClick={addToFavorite} className="btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 ms-sm-auto text-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-heart me-2" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>
    Dodaj do ulubionych
            </button>) : null}
              </div>
            </div>
          </div>
        </div>
    </div></div>
    </div>

    
    {/* <!-- End Navbar --> */}
      <div className="container-fluid py-4 px-3">
        {Boolean(props.wine.approved || (props.auth.user && props.auth.user.admin)) ?
      <WinePage wine={wine} dimensionsImg={dimensionsImg} props={props.auth.user} opinions={opinions} userRate={userRate} totalRates={totalRates} totalOpinions={totalOpinions} selectedSort={selectedList} flashFavorite={showFlash} handleCloseFavorite={handleCloseFavorite} totalFavorites={totalFavorites} usersFavorite={usersFavorite} flashServerMessage={props.flash} />      
      : <div className='text-center'>Wino musi przejść proces moderacji przed opublikowaniem na stronie.</div>}
      </div>
     </div>
     <Footer />  

  </main>                  
  </>
  // </AuthenticatedLayout>
    );
}
