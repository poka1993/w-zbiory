import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {flags} from '@/Components/Flags';
import DishComponent from '@/Components/DishCompontent';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from '@inertiajs/inertia-react';
import PaginationComponent from '../PaginationComponent';
import { useForm } from '@inertiajs/inertia-react';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs'

export default function Wines({ wines, handleRefresh, admin, props, flashServerMessage }) {
  const { data, setData, post, delete: destroy, processing, errors, reset } = useForm({
    wine_id: null,
    favorite_action: null
  });
  
  const [showFlash, setShowFlash] = useState(null);
  const [serverMessage, setServerMessage] = useState(Boolean(flashServerMessage) ? true : false);
  const handleCloseFlash = () => setShowFlash(null);

  const addToFavorite = () => {
    post(`/addToFavorite`, { params: data, preserveScroll: true, onSuccess: () => { if (handleRefresh) { handleRefresh(data.wine_id) } } });
    return setShowFlash("Wino zostało dodane do listy ulubionych.");
  }

  const removeFromFavorite = () => {
    destroy('/removeFromFavorite', { params: data, preserveScroll: true, onSuccess: () => { if (handleRefresh) { handleRefresh(data.wine_id) } } });
    return setShowFlash("Wino zostało usunięte z listy ulubionych.");
  }

  const recommendWine = () => {
    post('/shareWine', {params: data, preserveScroll: true, onSuccess: () => { if (handleRefresh) { handleRefresh(data.wine_id) } } });
    return setServerMessage(true);
  }

  useEffect(() => {
      if (data.favorite_action == "add") {
        addToFavorite();
        setData({
          ...data,
          wine_id: null,
          favorite_action: null
        });
      } else if (data.favorite_action == "delete") {
        removeFromFavorite();
        setData({
          ...data,
          wine_id: null,
          favorite_action: null
        });
      } else if (data.favorite_action == "recommend") {
        recommendWine();
        setData({
          ...data,
          wine_id: null,
          favorite_action: null
        });
      };

      if (serverMessage && flashServerMessage.message) {
        setShowFlash(flashServerMessage.message);
        setServerMessage(false);
      }
  });

  const handleWine = (e) => {
    setData({
      ...data,
      wine_id: e.target.id,
      favorite_action: e.target.name
    });
  }

  const handleShare = (e) => {
    setData({
      ...data,
      wine_id: e.target.id,
      favorite_action: "recommend"
    });
  }

  function flagIcon(data) {
    let flag = flags.filter((d) => d.label == data)[0];
    return <div className="ms-1 me-1 d-inline-block text-lg">{flag.icon}</div>
  }

    return (
        <> 

            <div className="row">
            <div className={`card border shadow-xs p-3 alert-card position-fixed d-flex w-95 flex-row ${Boolean(showFlash) ? null : "d-none" }`} >
          <div className='d-flex col-10 align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={`text-success ${Boolean(showFlash && showFlash.length == 75) ? "text-danger" : null} bi bi-check-circle-fill me-2`} viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
<p className="text-sm mb-0 text-gray">{showFlash}</p>
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

            {wines.data.map(wine => 
            <div key={wine.id} className="col-xxl-4 col-lg-6 col-md-12 mb-3">
              <div className="card shadow-xs border h-100">
                <div className="card-body py-0">
                  <div className="row m-0 m-sm-3">
                    <div className="col-5 col-sm-4 d-flex align-items-center p-0 overflow-hidden ms-n2">
                    <div className="wine-shape text-center text-white mx-auto d-flex align-items-center justify-content-center mt-6 mb-6">
                      <Link type="button" className='border-0 bg-transparent' href={`/wine-${wine.id}-${wine.name.replace(" ", "-")}`} method="get" as="button">
                        <img src={`storage/${wine.image}`} alt="wine_image" />
                      </Link>
                      </div>                 
                    </div><div className="col-7 col-sm-8 d-flex flex-column p-0 m-0">
                    <div className="row flex-grow-1 text-start">
                  
                    <div className="col-md-10 col-9" >
                      <div className="d-flex ps-3">
                        <div >
                          <h4 className="font-weight-semibold text-lg flex-grow-1 mt-2 mb-2">                          <span className="badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <div className="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          {Boolean(wine.rate) ? parseFloat(wine.rate).toFixed(1) : "Brak"}</div>
                          </span>
                          <Link className='border-0 bg-transparent wine-name-link text-start' href={`/wine-${wine.id}-${wine.name.replace(" ", "-")}`} method="get" as="button">
                            {wine.name}
                          </Link>
</h4>
                          {Boolean(admin) ? <><div className="text-sm mb-1 ">Dodał: {Boolean(wine.avatar && wine.sex && wine.nick) ? <b>
                            <Link type="button" className='border-0 ms-1 p-0 avatar avatar-xs rounded-circle shadow-xs' href={`/profile-${wine.author_id}-${wine.nick.replace(" ", "-")}`} method="get" as="button">
                            <img src={Boolean(wine.avatar) ? `storage/${wine.avatar}` : `storage/images/user-${Boolean(wine.sex == 'Kobieta') ? 'female' : 'male'}-icon.png`} className="bg-white" />
                            </Link>
                            <Link type="button" className='text-secondary border-0 bg-transparent p-0 ms-2 wine-name-link font-weight-semibold ' href={`/profile-${wine.author_id}-${wine.nick.replace(" ", "-")}`} method="get" as="button">
                            <p className="text-sm mb-n1"><b>{wine.nick}</b></p>
                            </Link>                          
                          </b>: <i><b>Usunięty profil</b></i>}
                          </div>
                          <p className="text-sm mb-1">Data dodania: <b>{dayjs(wines.created_at).format('DD.MM.YYYY, HH:mm')  }</b></p></> : null}
                          <p className="text-sm mb-1">Kolor: <b>{wine.color}</b></p>
                          <p className="text-sm mb-1">Smak: <b>{wine.taste}</b></p>
                          <div className="text-sm mb-1 d-flex align-items-center">Kraj: {flagIcon(wine.country)}<b>{wine.country}</b></div>
                          <p className="text-sm mb-1">Rodzaj: <b>{wine.type}</b></p>
                          <p className="text-sm mb-1">Cena hurtowa: <b>{Number(wine.prize).toFixed(2)} zł</b></p>
                          <p className="text-sm mb-1">Zawartość alkoholu:</p>



                          {/* <h4 className="mb-0 font-weight-bold">$20,450.80</h4> */}

                        </div>
  
                      </div>
                    </div>
                    <div className="text-end col-md-2 col-3 row-6 pe-2">
                          <div className="dropdown ms-n3 mt-2 ms-sm-0 mt-sm-0">


                          <button type="button" className="btn btn-white btn-icon px-2 py-2" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end me-n4">
                              <li><Link className='dropdown-item' href={`/wine-${wine.id}-${wine.name.replace(" ", "-")}`} method="get" as="button">Pokaż szczegóły</Link></li>
                              {Boolean(props && !admin) ?
                              <>
                              <li><a className="dropdown-item" id={wine.id} name={Boolean(wine.favorite) ? "delete" : "add"} onClick={(e) => handleWine(e)}>{Boolean(wine.favorite) ? "Usuń z ulubionych" : "Dodaj do ulubionych"}</a></li>
                              <li><a className="dropdown-item" id={wine.id} onClick={(e) => handleShare(e)}>Poleć znajomym</a></li></>
                              : null}
                            </ul>
                         </div>
                        </div>
                        </div>       
                        <p className='text-sm text-center w-70 ms-3 mb-0'><b>{Number(wine.vol).toFixed(1)} %</b></p>
                        <ProgressBar className='ms-2 ps-0 w-80' variant="dark" now={wine.vol} />
                        <p className="text-sm mb-1 mt-3 ps-3">Najlepiej podawać do:</p>
                        <div className="d-flex row ps-4">
                        {Boolean(wine.dishes) ? wine.dishes.map(dish => <DishComponent key={dish} label={dish} />) : <p className="text-xs opacity-50 ms-n2">Brak propozycji</p>}
              </div>
                </div>
                </div>
                </div>
              </div>
              
            </div>
            )}




            



         
        </div>
        <PaginationComponent wines={wines} links={wines.links} />

              <hr className='border mb-0'/>
        </>
    );
}
