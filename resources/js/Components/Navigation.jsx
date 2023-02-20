import { Link } from '@inertiajs/inertia-react';
import AsideMenu from '@/Components/AsideMenu'
import Login from '@/Components/Login'
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';

export default function Navigation({props}) {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
    <AsideMenu/>
    {props ? null : <Login showModal={show} props={props} handleClose={handleClose} />}

    <nav className="navbar navbar-main navbar-expand-lg mx-4 px-0 shadow-none rounded" id="navbarBlur" navbar-scroll="true">
      <div className="d-flex flex-column flex-md-row w-100 py-1 px-1">
        
        
      <nav aria-label="breadcrumb">
        <div className='d-flex'>
          <img src="" height="60" width={60} className="font-weight-bold mb-0" />
          <h3 className="font-weight-bold mb-0 mt-2 ms-3">Winozbiory.pl</h3>
        </div>




        </nav>
        <div className="d-flex flex-grow-1 mt-sm-0 mt-n3 mb-n3 mb-sm-0 me-md-0 me-sm-4 b justify-content-end" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="d-none d-sm-flex input-group">
              <span className="input-group-text text-body bg-white border-end-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input type="text" className="form-control ps-0" placeholder="Szukaj" />
            </div>
          </div>
          <ul className="navbar-nav d-flex flex-row justify-content-end">



                <button type="button" className="d-flex d-sm-none d-flex btn btn-white btn-icon mt-3 px-2 py-2 " data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <div class="collapse w-100" id="collapseExample">
</div>
                </button>   

                <div class="offcanvas offcanvas-top offcanvas-search d-sm-none" height="30" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasSearch" aria-labelledby="offcanvasSearchLabel">
  <div class="offcanvas-header w-100 pb-0">
    <h5 id="offcanvasTopLabel">Wyszukiwarka</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

    <button type="button" class="btn btn-white btn-icon px-2 py-2" data-bs-dismiss="offcanvas" aria-label="Close">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
    </button>
  </div>
  <div class="offcanvas-body">
  <div className="d-flex d-sm-none input-group">
              <span className="input-group-text text-body bg-white border-end-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input type="text" className="form-control ps-0" placeholder="Szukaj" />
            </div>
  </div>
</div>

<li className="nav-item ps-3 d-flex align-items-center">
              <a className="nav-link text-body p-0"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>



              <li className="nav-item dropdown px-3 d-flex align-items-center">
              <a className="nav-link text-body p-0 d-none d-sm-block" id="dropdownSettingsButton" data-bs-toggle="dropdown" aria-expanded="false">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="fixed-plugin-button-nav cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                </svg>
              </a>
              <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownSettingsButton">
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="storage/img/team-2.jpg" className="avatar avatar-sm border-radius-sm  me-3 " />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="storage/img/small-logos/logo-google.svg" className="avatar avatar-sm border-radius-sm bg-gradient-dark p-2  me-3 " />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New report</span> by Google
                        </h6>
                        <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="avatar avatar-sm border-radius-sm bg-slate-800  me-3  my-auto">
                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <title>credit-card</title>
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                  <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p className="text-xs text-secondary d-flex align-items-center mb-0 ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                  
                </li>
              </ul>


              <a className="nav-link text-body p-0 d-block d-sm-none" id="dropdownSettingsButton" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSettings" aria-controls="offcanvasSettings">
              <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="fixed-plugin-button-nav cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                </svg>
              </a>
              <div class="offcanvas offcanvas-top offcanvas-search" height="30" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasSettings" aria-labelledby="offcanvasSettingsLabel">
  <div class="offcanvas-header w-100 pb-0">
    <h5 id="offcanvasTopLabel">Ustawienia</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

    <button type="button" class="btn btn-white btn-icon px-2 py-2" data-bs-dismiss="offcanvas" aria-label="Close">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
    </button>
  </div>
  <div class="offcanvas-body">
  <div className="d-flex d-sm-none input-group">
              <span className="input-group-text text-body bg-white border-end-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input type="text" className="form-control ps-0" placeholder="Szukaj" />
            </div>
  </div>
</div>
            </li>

















            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a className="nav-link text-body p-0 d-none d-sm-block" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fixed-plugin-button-nav cursor-pointer">
                  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                </svg>
              </a>
              <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="storage/img/team-2.jpg" className="avatar avatar-sm border-radius-sm  me-3 " />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="storage/img/small-logos/logo-google.svg" className="avatar avatar-sm border-radius-sm bg-gradient-dark p-2 me-3 " />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New report</span> by Google
                        </h6>
                        <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="avatar avatar-sm border-radius-sm bg-slate-800  me-3  my-auto">
                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <title>credit-card</title>
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                  <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p className="text-xs text-secondary d-flex align-items-center mb-0 ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
              <a className="nav-link text-body p-0 d-block d-sm-none" id="dropdownSettingsButton" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNotifications" aria-controls="offcanvasNotifications">
              <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fixed-plugin-button-nav cursor-pointer">
                  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                </svg>
              </a>
              <div class="offcanvas offcanvas-top offcanvas-notifications d-sm-none" height="30" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasNotifications" aria-labelledby="offcanvasNotificationsLabel">
  <div class="offcanvas-header w-100 pb-0">
    <h5 id="offcanvasTopLabel">Powiadomienia</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

    <button type="button" class="btn btn-white btn-icon px-2 py-2" data-bs-dismiss="offcanvas" aria-label="Close">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
    </button>
  </div>
  <div class="offcanvas-body">

                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="storage/img/team-2.jpg" className="avatar avatar-sm border-radius-sm  me-3 " />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="storage/img/small-logos/logo-google.svg" className="avatar avatar-sm border-radius-sm bg-gradient-dark p-2 me-3 " />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New report</span> by Google
                        </h6>
                        <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" >
                    <div className="d-flex py-1">
                      <div className="avatar avatar-sm border-radius-sm bg-slate-800  me-3  my-auto">
                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <title>credit-card</title>
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                  <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p className="text-xs text-secondary d-flex align-items-center mb-0 ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
  
  </div>
</div>
            </li>
            {props ? null :
            <button type="button" onClick={handleShow} class="btn btn-sm btn-dark btn-icon d-flex align-items-end m-auto ms-3 text-nowrap" >
            <span class="btn-inner--icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-key-fill me-2" viewBox="0 0 15 15">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
            </span>
            <span class="btn-inner--text">Zaloguj się</span>
          </button>
          }



            <li className="nav-item dropdown ps-2 d-flex align-items-center d-flex">
              <a type="button" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="storage/img/team-2.jpg" className="avatar avatar-sm" alt="avatar" />
              </a>

              <ul class="dropdown-menu dropdown-menu-end me-n3">
    <li><a class="dropdown-item">Twój profil</a></li>
    <li><a class="dropdown-item">Ustawienia konta</a></li>

    <li><a class="dropdown-item"><Link className="border-0 ms-n2 dropdown-item" href={(route('logout'))} method="post" as="button">Wyloguj się</Link></a></li>

  </ul>

              </li>
          </ul>
        </div>
      </div>
    </nav>



</>
    );
}
