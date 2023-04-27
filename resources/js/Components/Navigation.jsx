import AsideMenu from '@/Components/AsideMenu'
import Login from '@/Components/Login'
import SettingsModal from '@/Components/SettingsModal'
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import { Link, useForm } from '@inertiajs/inertia-react';
import NotificationComponent from './NotificationComponent';

export default function Navigation({props, search_phrase, notifications, new_notifications, title, userId}) {
  const { data, setData, get, processing, errors, reset } = useForm({
    searchPhrase: Boolean(search_phrase) ? search_phrase : null
  }); 
  const setSearchPhrase = (e) => {
    const { value } = e.target;
      setData({
        ...data,
        searchPhrase: value
      });
  }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSettings, setShowSettings] = useState(false);
    const handleCloseSettings = () => setShowSettings(false);
    const handleShowSettings = () => setShowSettings(true);

    return (
    <>
    <AsideMenu pageTitle={title} auth={props} userId={userId} settingsButton={handleShowSettings} loginButton={handleShow} />
    {props ? null : <Login showModal={show} props={props} handleClose={handleClose} />}
    {props ? <SettingsModal showModal={showSettings} props={props} handleClose={handleCloseSettings} /> : null}

    <nav className="navbar navbar-main navbar-expand-lg mx-4 px-0 shadow-none rounded" id="navbarBlur" navbar-scroll="true">
      <div className="d-flex flex-column flex-md-row w-100 py-1 px-1">
        
        
      <nav aria-label="breadcrumb">

        <Link type="button" className='d-flex mb-n3 nav-font-logo border-0' href={('/')} method="get" as="button"></Link>




        </nav>
        <div className="d-flex flex-grow-1 justify-content-end nav-buttons" id="navbar">
          <div className="ms-lg-auto pe-lg-3 d-flex align-items-center">
          <div className="nav-item ps-3 me-3 d-flex align-items-center">
              <div className="nav-link text-body p-0"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </div>
            </div>
            <div className="d-none d-lg-flex me-n2 input-group">
              <Link className="input-group-text text-body bg-white border-end-0" href={Boolean(data.searchPhrase) ? (`/search-${data.searchPhrase}`) : "#"} method="get" as="button" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </Link>
              <input type="text" className="form-control ps-0" onChange={(e) => setSearchPhrase(e)} value={Boolean(data.searchPhrase) ? data.searchPhrase : ""} placeholder="Szukaj wina" />
            </div>
          </div>
          <ul className="navbar-nav d-flex flex-row justify-content-end">



                <button type="button" className="d-flex d-lg-none d-flex btn btn-white btn-icon m-0 ms-n1 me-n1 px-2 py-2 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <div className="collapse w-100" id="collapseExample"></div>
                </button>   

                <div className="offcanvas offcanvas-top offcanvas-search d-lg-none" height="30" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasSearch" aria-labelledby="offcanvasSearchLabel">
  <div className="offcanvas-header w-100 pb-0">
    <h5 id="offcanvasTopLabel">Wyszukiwarka</h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

    <button type="button" className="btn btn-white btn-icon px-2 py-2" data-bs-dismiss="offcanvas" aria-label="Close">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
    </button>
  </div>
  <div className="offcanvas-body">
  <div className="d-flex d-lg-none input-group">
              <Link className="input-group-text text-body bg-white border-end-0" href={Boolean(data.searchPhrase) ? (`/search-${data.searchPhrase}`) : "#"} method="get" as="button" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </Link>
              <input type="text" className="form-control ps-0" onChange={(e) => setSearchPhrase(e)} value={Boolean(data.searchPhrase) ? data.searchPhrase : ""} placeholder="Szukaj wina" />
            </div>
  </div>
</div>


            {props ? 
              <>
              <li type="button" onClick={handleShowSettings} className="nav-item px-3 d-flex align-items-center">
              <a className="nav-link text-body p-0 ms-lg-n2" aria-expanded="false">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="fixed-plugin-button-nav cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                </svg>
              </a>





            </li>
            </> : null}
















            {props ? 
            <div className="nav-item dropdown pe-2 d-flex align-items-center">
              <div className="nav-link text-body p-0 d-none d-sm-block" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <>
                {Boolean(new_notifications) ?
                 <a className="cursor-pointer position-absolute top-50 start-50 ms-1 badge-xs ps-1 pe-1 text-white text-xs translate-middle rounded-5 bg-danger">
                  {new_notifications}
                </a> : null}
                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fixed-plugin-button-nav cursor-pointer">
                  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                </svg>
                </>
              </div>
              <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
              <NotificationComponent data={notifications} profile={props.id} />
              </ul>
              <div className="nav-link text-body p-0 d-block d-sm-none me-n1" id="dropdownSettingsButton" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNotifications" aria-controls="offcanvasNotifications">
              {Boolean(new_notifications) ?
                 <a className="cursor-pointer position-absolute top-50 start-50 ms-1 badge-xs ps-1 pe-1 text-white text-xs translate-middle rounded-5 bg-danger">
                  {new_notifications}
                </a> : null}
              <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fixed-plugin-button-nav cursor-pointer">
                  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="offcanvas offcanvas-top offcanvas-notifications d-sm-none h-auto" height="100" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasNotifications" aria-labelledby="offcanvasNotificationsLabel">
  <div className="offcanvas-header w-100 pb-0">
    <h5 id="offcanvasTopLabel">Powiadomienia</h5>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

    <button type="button" className="btn btn-white btn-icon px-2 py-2" data-bs-dismiss="offcanvas" aria-label="Close">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
    </button>
  </div>
  <div className="offcanvas-body h-auto">
                <NotificationComponent data={notifications} profile={props.id} hover={true}/>
  </div>
</div>
            </div>
            : null}


























            {props ? null :
            <button type="button" onClick={handleShow} className="btn btn-sm btn-dark btn-icon d-flex align-items-end m-auto ms-3 ms-lg-2 me-n1 me-lg-5 text-nowrap" >
            <span className="btn-inner--icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-key-fill me-2" viewBox="0 0 15 15">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
            </span>
            <span className="btn-inner--text">Zaloguj się</span>
          </button>
          }


            {props ? 
            <li className="nav-item dropdown ps-2 d-flex align-items-center d-flex me-lg-5">
              <a type="button" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={Boolean(props.avatar) ? `storage/${props.avatar}` : `storage/images/user-${Boolean(props.sex == 'Kobieta') ? 'female' : 'male'}-icon.png`} alt="profile_image" className="avatar avatar-sm bg-white border shadow-xs w-100 h-100" />
              </a>
              



              <ul className="dropdown-menu dropdown-menu-end me-n3">
              <li><Link type="button" className='border-0  dropdown-item' href={`/profile-${props.id}-${props.nick.replace(" ", "-")}`} method="get" as="button">Twój profil</Link></li>
    <li><a onClick={handleShowSettings} className="border-0 dropdown-item">Ustawienia konta</a></li>

    <li><Link className="border-0 dropdown-item" href={(route('logout'))} method="post" as="button">Wyloguj się</Link></li>

  </ul>

              </li>
              : null}
          </ul>
        </div>
      </div>
    </nav>



</>
    );
}
