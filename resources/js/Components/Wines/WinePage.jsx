import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ReactImageMagnify from 'react-image-magnify';
import AddOpinion from '@/Components/AddOpinion';
import SecureDeleteWine from '@/Components/SecureDeleteWine';
import Opinions from '@/Components/Opinions';
import UsersFavorite from '@/Components/UsersFavorite';
import React, { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';
import {flags} from '@/Components/Flags';
import DishComponent from '@/Components/DishCompontent';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link, useForm } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';

export default function WinePage({ wine, dimensionsImg, props, opinions, userRate, totalRates, totalOpinions, selectedSort, flashFavorite, handleCloseFavorite, totalFavorites, usersFavorite, flashServerMessage }) {
  const { data, setData, post, patch, get, processing, errors, reset } = useForm({
    rate: null,
    wine_id: wine.id,
    selectedList: selectedSort
  }); 
  const { rate, wine_id, selectedList } = data;
  
  let dimensionsImgWidth = dimensionsImg ? dimensionsImg.width : 0 ;
  let dimensionsImgHeight = dimensionsImg ? dimensionsImg.height : 0 ;

  const dishes = Boolean(wine.dishes) ? wine.dishes.map(dish => <DishComponent key={dish} label={dish} />) : <p className="text-xs text-secondary opacity-50 ms-n2 ">Brak propozycji</p>;

 
  const [sortOpinions, handleSortOpinions] = useState(false);
  useEffect(() => {
    if (sortOpinions) {
        return get(`/wine-${wine.id}-${wine.name.replace(" ", "-")}`, { params: data, preserveScroll: true });
    }
  });

  const handleSelectedList = (e) => {
    const { textContent } = e.target;
      setData({
        ...data,
        selectedList: textContent
      });
      handleSortOpinions(true);
  }
  
  
  


  function flagIcon(data) {
    let flag = flags.filter((d) => d.label == data)[0];
    return <div className="ms-1 me-1 d-inline-block text-lg">{flag.icon}</div>
  }

  const { width } = useWindowDimensions();
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

  const [fetchRate, setFetchRate] = useState(Boolean(userRate) ? userRate.rate : null)
  const [changeRate, handleChangeRate] = useState(false);
  const [publicWine, setPublicWine] = useState(false);
  const [shareWine, setShareWine] = useState(false);
  const [serverMessage, setServerMessage] = useState(false);
  const [disableRating, handleDisableRating] = useState(false);
  const [fillColor, setFillColor] = useState("#55a6f8");
  // Catch Rating value
  const handleRating = (rate) => {
    if (!props) {
      handleDisableRating(true);
      setFillColor("#cccccc");
      return setShowFlash("Tylko zalogowani użytkownicy mogą wystawiać oceny.");
    }
    setData({
      ...data,
      rate: rate,
    });
    handleChangeRate(true);
  }

  useEffect(() => {
    if (changeRate) {
        handleChangeRate(false);
        setFetchRate(rate);
        return post('/storeRate', {params: data, preserveScroll: true, onSuccess: () => {setShowFlash(`Twoja ocena została ${Boolean(fetchRate) ? "zmieniona" : "dodana"}, dziękujemy.`);}});
    }
    if (flashFavorite) {
      setShowFlash(flashFavorite);
    }
    if (publicWine) {
      setPublicWine(false);
      return patch('/publicWine', {params: data, preserveScroll: true, onSuccess: () => {setShowFlash(`Wino zostało upublicznione dla użytkowników strony.`);}});
    }
    if (shareWine) {
      setShareWine(false);
      post('/shareWine', {params: data, preserveScroll: true});
      return setServerMessage(true);
    }
    if (serverMessage && flashServerMessage.message) {
      setShowFlash(flashServerMessage.message);
      setServerMessage(false);
    }
  });


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setShowFlash(false);
  };

  const [showUsersFavorite, setShowUsersFavorite] = useState(false);
  const handleCloseUsersFavorite = () => setShowUsersFavorite(false);
  const handleShowUsersFavorite = () => {
    setShowUsersFavorite(true);
  };

  const [showAdminModal, setShowAdminModal] = useState(false);
  const handleCloseAdminModal = () => setShowAdminModal(false);
  const handleShowAdminModal = () => {
    setShowAdminModal(true);
  };


  const [showFlash, setShowFlash] = useState(false);
  const handleCloseFlash = () => {
    handleCloseFavorite();
    setShowFlash(false);
  }
  const handleShowFlash = (e) => {
    setShowFlash(e);

  };


    return (
        <>
        <div className={`card border shadow-xs p-3 alert-card position-fixed d-flex flex-row ${Boolean(showFlash) ? null : "d-none" }`} >
          <div className='d-flex col-10 align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={`${Boolean(props) ? "text-success" : "text-danger"} ${Boolean(showFlash.length > 75) ? "text-danger" : null} bi bi-check-circle-fill me-2`} viewBox="0 0 16 16">
  {Boolean(props) ? <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  : <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>}
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

             <AddOpinion showModal={show} props={props} wineId={wine.id} handleClose={handleClose} handleShowFlash={handleShowFlash} handleRating={handleRating} fetchRate={fetchRate}/>
             <UsersFavorite showModal={showUsersFavorite} handleClose={handleCloseUsersFavorite} totalFavorites={totalFavorites} usersFavorite={usersFavorite}/>
             {Boolean(props && props.admin) ?
          <>
          <SecureDeleteWine showModal={showAdminModal} props={props} wineId={wine.id} handleClose={handleCloseAdminModal} handleShowFlash={handleShowFlash}/>
          <div className='d-flex flex-row me-3 mt-n2'>
          {Boolean(!wine.approved) ?
          <button type="button" onClick={() => setPublicWine(true)} className="btn btn-sm btn-dark btn-icon d-flex ms-auto">
                    <span className="btn-inner--icon me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
</svg>
                    </span>
                    <span className="btn-inner--text text-wrap">Upublicznij wino</span>
            </button> : null }
           <button type="button" onClick={() => setShowAdminModal(true)} className={`btn btn-sm btn-dark btn-icon d-flex ms-3 ${Boolean(wine.approved) ? "ms-auto" : null}`}>
                    <span className="btn-inner--text text-wrap">Usuń wino</span>
            </button>
          </div></> : null}




            <div className="row">
            <div className="col-12">
              <div className="card shadow-xs border mb-4">
                <div className="card-body py-0">
                  <div className="row col pt-3 pb-3">
                    
                    <div className="d-none d-sm-flex col-xxl-2 col-lg-3 col-md-4 col-sm-4 p-xxl-0 p-md-4 p-lg-2 p-xl-4 p-0 z-index-3">


                      <div className="wine-card d-flex w-auto h-100 ms-auto me-auto row align-content-center">
                        <div>
                    <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: "storage/" + wine.image,
    },
    largeImage: {
        src: "storage/" + wine.image,
        width: dimensionsImgWidth,
        height: dimensionsImgHeight
    },
    enlargedImageStyle: { backgroundColor: '#fff' },
    enlargedImageContainerDimensions: {width: '100%', height: '100%'},
    enlargedImageContainerStyle: { borderRadius: '6px', boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.16)" },
    imageStyle: {maxHeight: '600px'} 
}} />

</div>  
                      </div>                 
                    </div>

                    

                    <div className="col-xxl-3 col-lg-4 col-sm-8 col-md-8 z-index-1">
            <div className="card border shadow-xs h-100 overflow-hidden">
              <div className="card-header pb-0 p-3">
                <div className="row">
                  <div className="col-md-8 col-9">
                    <h6 className={`${Boolean(props) ? "mb-0" : "mb-3"} font-weight-semibold text-lg`}>Parametry wina</h6>
                  </div>
                  <div className="col-md-4 col-3 text-end">
                  {Boolean(props) ?
                    <button onClick={() => setShowFlash(`Funkcja edytowania parametrów wina nie jest jeszcze wdrożona. Dodamy ją przy następnej aktualizacji.`)} type="button" className="btn btn-white btn-icon px-2 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </button>
                    : null}
                  </div>
                </div>
              </div>
              <div className='d-flex flex-column flex-sm-row'>
              <div className="d-sm-none col-12 mt-3 mb-7">
              <div className="wine-shape text-center text-white mx-auto d-flex align-items-center justify-content-center mt-6 px-2 mb-3 w-100">
                        <img src={`storage/${wine.image}`} alt={wine.name} />
                      </div>  
                  </div>
              <div className="card-body col-12 p-3 pt-0">
                <span className="row font-weight-semibold text-dark d-flex flex-grow-1 ps-3">
                          <p className="text-sm mb-1">Kolor: <b>{wine.color}</b></p>
                          <p className="text-sm mb-1">Smak: <b>{wine.taste}</b></p>
                          <div className="text-sm mb-1 d-flex align-items-center">Kraj: {flagIcon(wine.country)}<b>{wine.country}</b></div>
                          <p className="text-sm mb-1">Rodzaj: <b>{wine.type}</b></p>
                          <p className="text-sm mb-1">Cena hurtowa: <b>{Number(wine.prize).toFixed(2)} zł</b></p>
                          <p className="text-sm mb-1">Zawartość alkoholu:</p>
                          <p className='text-sm text-center ms-2 w-80 mb-0'><b>{Number(wine.vol).toFixed(1)} %</b></p>
                    <ProgressBar className='ms-2 ps-0 w-80' variant="dark" now={wine.vol} />
                          <p className="text-sm mb-1 mt-3">Najlepiej podawać do:</p>

                          <div className="d-flex row ps-4">
                  {dishes}
              </div>
                    
                    </span>
            </div>
            </div>
            </div>
          </div>





          <div className="col-12 col-xxl-3 col-lg-5 col-md-6 mt-lg-0 mt-3">
            <div className="card border shadow-xs h-100">
              <div className="card-header pb-0 p-3">
                <div className="row">
                  <div className="col-md-8 col-9">
                    <h6 className="mb-0 font-weight-semibold text-lg">Oceny wina</h6>
                  </div>
                  <div className="col-md-4 col-3 text-end">
                    {/* <button type="button" className="btn btn-white btn-icon px-2 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>
              <div className="card-body p-3 pt-0 mt-3">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-1 m-n2 m-sm-0">

                  <div className="d-flex w-100 bg-secondary badge badge-sm border border-secondary text-secondary bg-secondary align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm font-weight-semibold">Twoja ocena:</h6>
<div className='mb-0 text-sm text-secondary w-100 text-wrap'>
                    <p className="mb-0 text-sm text-secondary h-5 w-100 text-wrap flex-basis">                          
                    <Rating
        onClick={handleRating}
        // onPointerEnter={onPointerEnter}
        // onPointerLeave={onPointerLeave}
        // onPointerMove={onPointerMove}
        iconsCount={10}
        readonly={disableRating}
        initialValue={fetchRate}     
        size={(width>325) ? 22 : 17.5}
        tooltipStyle
        className={"d-flex w-100 "}
        fillColor={fillColor}
        /* Available Props */
      />
                          </p>
                          </div>   
                  </div>                  
                </li>
                <li className="list-group-item border-0 d-flex flex-column px-0 mb-n2 mt-1 ms-2">
                          <p className="text-sm mb-1">Wystawionych ocen: <b>{totalRates}</b></p>
                          <p className="text-sm mb-1">Wystawionych opinii: <b>{totalOpinions}</b></p>
                          <hr />
                          <p className="text-sm mb-1">Ulubione wino: <b>{totalFavorites} {Boolean(totalFavorites == 1) ? 'użytkownika' : 'użytkowników'}</b></p>
                </li>


                {Boolean(usersFavorite.length) ?
                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-n1">
                
                
                <div className="ms-3 avatar-group">
                  {usersFavorite.slice(0, 5).map(user => 
                    <OverlayTrigger key={user.user_id} placement="top" overlay={<Tooltip>{user.nick}</Tooltip>}>
                       <Link type="button" className='border-2 bg-transparent p-0 avatar avatar-sm rounded-circle shadow-sm' href={`/profile-${user.user_id}-${user.nick.replace(" ", "-")}`} method="get" as="button">
                      <img src={Boolean(user.avatar) ? `storage/${user.avatar}` : `storage/images/user-${Boolean(user.sex == 'Kobieta') ? 'female' : 'male'}-icon.png`} className="bg-white" />
                      </Link>
                  </OverlayTrigger>)}
                  </div>
                  <div className="d-flex ms-3 align-items-start flex-column justify-content-center">
                    <h6 onClick={handleShowUsersFavorite} type="button" className="wine-name-link mb-0 text-sm mb-1">{Boolean(totalFavorites > 5) ? `+ ${totalFavorites - 5} inny${Boolean(totalFavorites > 6) ? "ch" : ""}` : null}</h6>
                  </div>


                </li> : null}
                <hr />
                <li className="list-group-item border-0 d-flex flex-column px-0 mb-n2 mt-n2 ms-2 align-items-start">
                          <button type="button" onClick={() => setShareWine(true)} className="btn btn-sm btn-dark btn-icon align-items-end mb-0 text-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-heart me-2" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
  </svg>
  Poleć wino znajomym
          </button>

                </li>
              </ul>
            </div>
            </div>
          </div>



          <div className="col-12 col-xxl-4 mt-xxl-0 mt-3 col-lg-12 col-md-6">
            <div className="card border shadow-xs h-100">
              <div className="card-header pb-0 p-3">
                <div className="row">
                  <div className="col-md-8 col-9">
                    <h6 className={`${Boolean(props) ? "mb-0" : "mb-3"} font-weight-semibold text-lg`}>Opis wina</h6>
                  </div>
                  <div className="col-md-4 col-3 text-end">
                  {Boolean(props) ?
                    <button type="button" onClick={() => setShowFlash(`Funkcja edytowania opisu wina nie jest jeszcze wdrożona. Dodamy ją przy następnej aktualizacji.`)} className="btn btn-white btn-icon px-2 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </button>
                    : null}

                    
                  </div>
                </div>
              </div>
              <div className="card-body p-3 pt-0">
              <ul className="list-group">
              <li className="list-group-item border-0 d-flex flex-column px-0 mb-n2 mt-n2 ms-2">
                          <p className="text-sm mb-1">
                            {/* Wino o słonecznej barwie z zielonkawymi przebłyskami i mocnych aromatach cytrusów oraz owoców tropikalnych przemieszanych z nutami białych kwiatów. W ustach lekkie i orzeźwiające, o długiej owocowej końcówce.<br /><br />

LAMITA CHARDONNAY<br /><br />

Kraj: Argentyna<br />
Region: Mendoza<br />
Szczep: chardonnay<br />
Pojemność: 750 ml<br />
Temperatura serwowania: 8-10°C<br />
Certyfikaty: Vegan Friendly<br /><br />

Sugestie kulinarne: do przystawek, lekkich sałatek, białych ryb, owoców morza. */}
{Boolean(wine.description) ? wine.description : "Jeszcze nikt nie dodał opisu dla tego wina."}
</p>

                </li>
              </ul>
            </div>
            </div>
          </div>






                
                </div>
                </div>
              </div>
              
            </div>
          </div>    <div className="col-12">
        <div className="d-lg-flex align-items-center mt-4 mb-4">
          <div className="flex-grow mb-md-0 mb-4">
            <h5 className="font-weight-semibold mb-1 ms-4">Wystawionych opinii: {totalOpinions}</h5>
            <p className="text-sm mb-0 ms-4">Jeżeli skosztowałeś tego wina i chciałbyś podzielić się swoją opinią, prosimy o dodanie jej za pomocą formularza!</p>
          </div>
          {props ?
          <button onClick={handleShow} type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 me-4 mt-2 ms-4 ms-sm-auto">
            <span className="btn-inner--icon">
              <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="d-block me-2">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            </span>
            <span className="btn-inner--text">Dodaj opinię</span>
          </button>
          : null}
        </div>
      </div>
      <hr />

      <div className="col-12">
            <div className="card border shadow-xs h-100">
              <div className="card-header pb-0 p-3 mb-0">
                <div className="row">
                  <div className="col-md-8 col-9">
                    <h6 className="mb-0 font-weight-semibold text-lg">Opinie</h6>
                  </div>
                  <div className="col-md-4 col-3 text-end">
                  <div className="dropdown">
                  <div className='d-flex justify-content-end align-items-end align-items-sm-center mt-1 mt-sm-0 flex-column flex-sm-row'><p className='text-sm me-2 mb-1 mb-sm-3'>Sortowanie:</p>
                  <button type="button" className="btn btn-white btn-icon px-2 py-2 ps-3 pe-3 text-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
                 {selectedList} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                    </button>
                 
                  
<ul className="dropdown-menu dropdown-menu-end">
    <li><a onClick={(e) => handleSelectedList(e)} className="dropdown-item">Najnowsze opinie </a></li>
    <li><a onClick={(e) => handleSelectedList(e)} className="dropdown-item">Najstarsze opinie</a></li>
    <li><a onClick={(e) => handleSelectedList(e)} className="dropdown-item">Najwyżej ocenione</a></li>
    <li><a onClick={(e) => handleSelectedList(e)} className="dropdown-item">Najniżej ocenione</a></li>
  </ul>

                  </div>   
                  </div>
                  </div>
                </div>
              </div>
              <div className="card-body p-0">
              <ul className="list-group">

          
              <Opinions opinions={opinions}/>


              </ul>
              
            </div>
            </div>
          </div>
        </>
    );
}
