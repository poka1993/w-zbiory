import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AsideMenu from '@/Components/AsideMenu'
import { Head } from '@inertiajs/inertia-react';
import MultiRangeSlider from "@/Components/MultiRangeSlider/MultiRangeSlider";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export default function Dashboard(props) {
    return (
      <>
        {/* // <AuthenticatedLayout
        //     auth={props.auth}
        //     errors={props.errors}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // > */}
        
            <Head title="Dashboard" />
            
{/* menu boczne */}

<AsideMenu/>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    {/* <!-- Navbar --> */}
    <nav className="navbar navbar-main navbar-expand-lg mx-5 px-0 shadow-none rounded" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-1 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" >Dashboard</a></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
          </ol>
          <h6 className="font-weight-bold mb-0">Dashboard</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body bg-white  border-end-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input type="text" className="form-control ps-0" placeholder="Search" />
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
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
              <a className="nav-link text-body p-0" id="dropdownSettingsButton" data-bs-toggle="dropdown" aria-expanded="false">
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
            </li>





            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
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
            </li>
            <li className="nav-item ps-2 d-flex align-items-center">
              <a  className="nav-link text-body p-0">
                <img src="storage/img/team-2.jpg" className="avatar avatar-sm" alt="avatar" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>











    {/* <!-- End Navbar --> */}
    <div className="container-fluid py-4 px-3">
      <div className="row">
        <div className="col-md-12">
          <div className="d-md-flex align-items-center mb-3 mx-2">
            <div className="mb-md-0 mb-3">
              <h3 className="font-weight-bold mb-0">Hello, Noah</h3>
              <p className="mb-0">Apps you might like!</p>
            </div>
            <button type="button" className="btn btn-sm btn-white btn-icon d-flex align-items-center mb-0 ms-md-auto mb-sm-0 mb-2 me-2">
              <span className="btn-inner--icon">
                <span className="p-1 bg-success rounded-circle d-flex ms-auto me-2">
                  <span className="visually-hidden">New</span>
                </span>
              </span>
              <span className="btn-inner--text">Messages</span>
            </button>
            <button type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0">
              <span className="btn-inner--icon">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="d-block me-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </span>
              <span className="btn-inner--text">Sync</span>
            </button>
          </div>
        </div>
      </div>
      {/* <hr className="my-0" />  */}
      







      <div className="row">
        <div className="col-12">
          <div className="card border shadow-xs mb-4">
            <div className="card-header border-bottom pb-0">
              <div className="d-sm-flex align-items-center">
                <div>
                  <h6 className="font-weight-semibold text-lg mb-0">Members list</h6>
                  <p className="text-sm">See information about all members</p>
                </div>
                <div className="ms-auto d-flex">
                  <button type="button" className="btn btn-sm btn-white me-2">
                    View all
                  </button>
                  <button type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-center me-2">
                    <span className="btn-inner--icon">
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="d-block me-2">
                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                      </svg>
                    </span>
                    <span className="btn-inner--text">Add member</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body px-0 py-0">
              <div className="border-bottom py-3 px-3 d-sm-flex align-items-center">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable1" autocomplete="off" checked />
                  <label className="btn btn-white px-3 mb-0" for="btnradiotable1">All</label>
                  <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable2" autocomplete="off" />
                  <label className="btn btn-white px-3 mb-0" for="btnradiotable2">Monitored</label>
                  <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable3" autocomplete="off" />
                  <label className="btn btn-white px-3 mb-0" for="btnradiotable3">Unmonitored</label>
                </div>
                <div className="input-group w-sm-25 ms-auto">
                  <span className="input-group-text text-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>
                  </span>
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </div>
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7">Member</th>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Function</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Status</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Employed</th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="storage/img/team-2.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user1" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">John Michael</h6>
                            <p className="text-sm text-secondary mb-0">john@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Manager</p>
                        <p className="text-sm text-secondary mb-0">Organization</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-success text-success bg-success">Online</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">23/04/18</span>
                      </td>
                      <td className="align-middle">
                        <a href="" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="storage/img/team-3.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user2" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">Alexa Liras</h6>
                            <p className="text-sm text-secondary mb-0">alexa@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Programator</p>
                        <p className="text-sm text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">11/01/19</span>
                      </td>
                      <td className="align-middle">
                        <a href="" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="storage/img/team-1.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user3" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">Laurent Perrier</h6>
                            <p className="text-sm text-secondary mb-0">laurent@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Executive</p>
                        <p className="text-sm text-secondary mb-0">Projects</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-success text-success bg-success">Online</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">19/09/17</span>
                      </td>
                      <td className="align-middle">
                        <a href="" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="storage/img/marie.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user4" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">Michael Levi</h6>
                            <p className="text-sm text-secondary mb-0">michael@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Programator</p>
                        <p className="text-sm text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-success text-success bg-success">Online</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">24/12/08</span>
                      </td>
                      <td className="align-middle">
                        <a href="" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="storage/img/team-5.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user5" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">Richard Gran</h6>
                            <p className="text-sm text-secondary mb-0">richard@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Manager</p>
                        <p className="text-sm text-secondary mb-0">Executive</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">04/10/21</span>
                      </td>
                      <td className="align-middle">
                        <a href="" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="storage/img/team-6.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user6" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">Miriam Eric</h6>
                            <p className="text-sm text-secondary mb-0">miriam@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Programtor</p>
                        <p className="text-sm text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">14/09/20</span>
                      </td>
                      <td className="align-middle">
                        <a href="" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-top py-3 px-3 d-flex align-items-center">
                <p className="font-weight-semibold mb-0 text-dark text-sm">Page 1 of 10</p>
                <div className="ms-auto">
                  <button className="btn btn-sm btn-white mb-0">Previous</button>
                  <button className="btn btn-sm btn-white mb-0">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




















      <div className="my-3 py-3">
      <div className="row">
        <div className="col-12 col-xl-4 mb-4">
          <div className="card border shadow-xs h-100">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0 font-weight-semibold text-lg">Notifications settings</h6>
              <p className="text-sm mb-1">Here you can set preferences.</p>
            </div>
            <div className="card-body p-3">
              <h6 className="text-dark font-weight-semibold mb-1">Account</h6>
              <ul className="list-group">
                <li className="list-group-item border-0 px-0">
                  <div className="form-check form-switch ps-0">
                    <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault" checked />
                    <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault">Email me when someone follows me</label>
                  </div>
                </li>
                <li className="list-group-item border-0 px-0">
                  <div className="form-check form-switch ps-0">
                    <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault1" />
                    <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault1">Email me when someone answers on my post</label>
                  </div>
                </li>
                <li className="list-group-item border-0 px-0">
                  <div className="form-check form-switch ps-0">
                    <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault2" checked />
                    <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault2">Email me when someone mentions me</label>
                  </div>
                </li>
              </ul>
              <h6 className="text-dark font-weight-semibold mt-2 mb-1">Application</h6>
              <ul className="list-group">
                <li className="list-group-item border-0 px-0">
                  <div className="form-check form-switch ps-0">
                    <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault3" />
                    <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault3">New launches and projects</label>
                  </div>
                </li>
                <li className="list-group-item border-0 px-0">
                  <div className="form-check form-switch ps-0">
                    <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault4" checked />
                    <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault4">Monthly product updates</label>
                  </div>
                </li>
                <li className="list-group-item border-0 px-0 pb-0">
                  <div className="form-check form-switch ps-0">
                    <input className="form-check-input ms-auto" type="checkbox" id="flexSwitchCheckDefault5" />
                    <label className="form-check-label text-body ms-3 text-truncate w-80 mb-0" for="flexSwitchCheckDefault5">Subscribe to newsletter</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4 mb-4">
          <div className="card border shadow-xs h-100">
            <div className="card-header pb-0 p-3">
              <div className="row">
                <div className="col-md-8 col-9">
                  <h6 className="mb-0 font-weight-semibold text-lg">Profile information</h6>
                  <p className="text-sm mb-1">Edit the information about you.</p>
                </div>
                <div className="col-md-4 col-3 text-end">
                  <button type="button" className="btn btn-white btn-icon px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body p-3">
              <p className="text-sm mb-4">
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
              </p>
              <ul className="list-group">
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pt-0 pb-1 text-sm"><span className="text-secondary">First Name:</span> &nbsp; Noah</li>
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span className="text-secondary">Last Name:</span> &nbsp; Mclaren</li>
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span className="text-secondary">Mobile:</span> &nbsp; +(44) 123 1234 123</li>
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span className="text-secondary">Function:</span> &nbsp; Manager - Organization</li>
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span className="text-secondary">Location:</span> &nbsp; USA</li>
                <li className="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm">
                  <span className="text-secondary">Social:</span> &nbsp;
                  <a className="btn btn-link text-dark mb-0 ps-1 pe-1 py-0" href="">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                  <a className="btn btn-link text-dark mb-0 ps-1 pe-1 py-0" href="">
                    <i className="fab fa-github fa-lg"></i>
                  </a>
                  <a className="btn btn-link text-dark mb-0 ps-1 pe-1 py-0" href="">
                    <i className="fab fa-slack fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4 mb-4">
          <div className="card border shadow-xs h-100">
            <div className="card-header pb-0 p-3">
              <div className="row mb-sm-0 mb-2">
                <div className="col-md-8 col-9">
                  <h6 className="mb-0 font-weight-semibold text-lg">Internal chat</h6>
                  <p className="text-sm mb-0">/marketing channel</p>
                </div>
                <div className="col-md-4 col-3 text-end">
                  <button type="button" className="btn btn-white btn-icon px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body p-3 pt-0">
              <ul className="list-group">
                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-1">
                  <div className="avatar avatar-sm rounded-circle me-2">
                    <img src="../assets/img/team-1.jpg" alt="kal" className="w-100" />
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm font-weight-semibold">Sarah Lamalo</h6>
                    <p className="mb-0 text-sm text-secondary">Hi! I need more information about ...</p>
                  </div>
                  <span className="p-1 bg-success rounded-circle ms-auto me-3">
                    <span className="visually-hidden">Online</span>
                  </span>
                </li>
                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-1">
                  <div className="avatar avatar-sm rounded-circle me-2">
                    <img src="../assets/img/marie.jpg" alt="kal" className="w-100" />
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm font-weight-semibold">Vicky Hladynets</h6>
                    <p className="mb-0 text-sm text-secondary">Hello, Noah!</p>
                  </div>
                  <span className="p-1 bg-success rounded-circle ms-auto me-3">
                    <span className="visually-hidden">Online</span>
                  </span>
                </li>
                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-1">
                  <div className="avatar avatar-sm rounded-circle me-2">
                    <img src="../assets/img/team-5.jpg" alt="kal" className="w-100" />
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm font-weight-semibold">Charles Deluvio</h6>
                    <p className="mb-0 text-sm text-secondary">Great, thank you!</p>
                  </div>
                  <span className="p-1 bg-success rounded-circle ms-auto me-3">
                    <span className="visually-hidden">Online</span>
                  </span>
                </li>
                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-1">
                  <div className="avatar avatar-sm rounded-circle me-2">
                    <img src="../assets/img/team-4.jpg" alt="kal" className="w-100" />
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm font-weight-semibold">Leio Mclaren</h6>
                    <p className="mb-0 text-sm text-secondary">Don't worry!</p>
                  </div>
                  <span className="p-1 bg-success rounded-circle ms-auto me-3">
                    <span className="visually-hidden">Online</span>
                  </span>
                </li>
                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-1">
                  <div className="avatar avatar-sm rounded-circle me-2">
                    <img src="../assets/img/team-3.jpg" alt="kal" className="w-100" />
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm font-weight-semibold">Mateus Campos</h6>
                    <p className="mb-0 text-sm text-secondary">Call me, please.</p>
                  </div>
                  <span className="p-1 bg-success rounded-circle ms-auto me-3">
                    <span className="visually-hidden">Online</span>
                  </span>
                </li>
                <li className="list-group-item border-0 d-flex align-items-center px-0 mb-1">
                  <div className="avatar avatar-sm rounded-circle me-2">
                    <img src="../assets/img/team-2.jpg" alt="kal" className="w-100" />
                  </div>
                  <div className="d-flex align-items-start flex-column justify-content-center">
                    <h6 className="mb-0 text-sm font-weight-semibold">Miriam Lore</h6>
                    <p className="mb-0 text-sm text-secondary">Well done!</p>
                  </div>
                  <span className="p-1 bg-success rounded-circle ms-auto me-3">
                    <span className="visually-hidden">Online</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>








      
            




        
        <div className="col-12">
          <div className="card shadow-xs border mb-4 pb-3">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0 font-weight-semibold text-lg">Last articles</h6>
              <p className="text-sm mb-1">Here you will find the latest articles.</p>
            </div>
            <div className="card-body p-3">
              <div className="row">
                <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                  <div className="card card-background border-radius-xl card-background-after-none align-items-start mb-4">
                    <div className="full-background bg-cover" style={{backgroundImage: `url('storage/img/wine-filter.jpg')`}}></div>
                    <span className="mask bg-dark opacity-1 border-radius-sm"></span>
                    <div className="card-body text-start p-3 w-100">
                      <div className="row">
                        <div className="col-12">
                          <div className="blur shadow d-flex align-items-center w-100 border-radius-md border border-white mt-8 p-3">
                            <div className="w-50">
                              <p className="text-dark text-sm font-weight-bold mb-1">Sara Lamalo</p>
                              <p className="text-xs text-secondary mb-0">20 Jul 2022</p>
                            </div>
                            <p className="text-dark text-sm font-weight-bold ms-auto">Growth</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="">
                    <h4 className="font-weight-semibold">
                      Best strategy games
                    </h4>
                  </a>
                  <p className="mb-4">
                    As Uber works through a huge amount of internal management turmoil.
                  </p>
                  <a href="" className="text-dark font-weight-semibold icon-move-right mt-auto w-100 mb-5">
                    Read post
                    <i className="fas fa-arrow-right-long text-sm ms-1" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                  <div className="card card-background border-radius-xl card-background-after-none align-items-start mb-4">
                    <div className="full-background bg-cover" style={{backgroundImage: `url('storage/img/img-9.jpg')`}}></div>
                    <span className="mask bg-dark opacity-1 border-radius-sm"></span>
                    <div className="card-body text-start p-3 w-100">
                      <div className="row">
                        <div className="col-12">
                          <div className="blur shadow d-flex align-items-center w-100 border-radius-md border border-white mt-8 p-3">
                            <div className="w-50">
                              <p className="text-dark text-sm font-weight-bold mb-1">Charles Deluvio</p>
                              <p className="text-xs text-secondary mb-0">17 Jul 2022</p>
                            </div>
                            <p className="text-dark text-sm font-weight-bold ms-auto">Education</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="">
                    <h4 className="font-weight-semibold">
                      Don't be afraid to be wrong
                    </h4>
                  </a>
                  <p className="mb-4">
                    As Uber works through a huge amount of internal management turmoil.
                  </p>
                  <a href="" className="text-dark font-weight-semibold icon-move-right mt-auto w-100 mb-5">
                    Read post
                    <i className="fas fa-arrow-right-long text-sm ms-1" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="col-xl-4 col-md-6 mb-xl-0 mb-4">
                  <div className="card h-100 card-plain border border-dashed px-5">
                    <div className="card-body d-flex flex-column justify-content-center text-center">
                      <a href="">
                        <div className="icon icon-shape bg-dark text-center text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                          </svg>
                        </div>
                        <h5 className="text-dark text-lg"> Create new post </h5>
                        <p className="text-sm text-secondary mb-0">Drive into the editor and add your content.</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    <div className="col-12">
          <div className="card shadow-xs border mb-1 pb-3">
            <div className="card-header pb-0 p-3">
              <h6 className="mb-0 font-weight-semibold text-lg">Filter win</h6>

            </div>


            <div className="card-body p-3 ms-4">
    <div class="row justify-content-between">


        {/* <div class="col-md-2 d-flex flex-col">
          <ul class="list-group d-flex row flex-row col-12">
            <li class="list-group-item border-info d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
              <div class="d-flex align-items-start">
                <div class="d-flex flex-column">
                  <h6 class="mb-0 text-sm text-info">Kolor wina</h6>
                  <span class="text-sm text-info">
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Czerwone</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Różowe</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Białe</span>
                    </div>
                  </span>
                </div>
              </div>

              <div class="text-end">
                  <div class="dropdown">
                  <button type="button" className="btn btn-white btn-icon px-2 py-2 " data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                  </button>   

            </div>

          </div>
        </li>
        



            <li class="list-group-item border d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
              <div class="d-flex align-items-start">
                <div class="d-flex flex-column">
                  <h6 class="mb-0 text-sm">Smak wina</h6>
                  
                  <span class="text-sm text-info">
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Wytrawne</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Półwytrawne</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Półsłodkie</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Słodkie</span>
                    </div>
                  </span>

                </div>
              </div>
              <div class="d-flex align-items-center text-danger text-gradient">
                <div class="form-check">
                  <input name="radioDisabled" id="customRadioDisabled" class="form-check-input form-check-input-info" />
                </div>
              </div>
            </li>


            <li class="list-group-item border d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
              <div class="d-flex align-items-start">
                <div class="d-flex flex-column">
                  <h6 class="mb-0 text-sm">Rodzaj wina</h6>
                  
                  <span class="text-sm text-info">
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Spokojne</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Musujące</span>
                    </div>
                  </span>

                </div>
              </div>
              <div class="d-flex align-items-center text-danger text-gradient">
                <div class="form-check">
                  <input name="radioDisabled" id="customRadioDisabled" class="form-check-input form-check-input-info" />
                </div>
              </div>
            </li> */}
{/* 




          </ul>
        </div> */}

        <div class="col-xxl-2 col-md-4 col-sm-6 d-flex flex-grow-1 flex-col">
          <ul class="list-group d-flex row flex-row col-12">


          <li class="list-group-item border-info d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
              <div class="d-flex align-items-start">
                <div class="d-flex flex-column">
                  <h6 class="mb-0 text-sm text-info">Kolor wina</h6>
                  <span class="text-sm text-info">
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Czerwone</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Różowe</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Białe</span>
                    </div>
                  </span>
                </div>
              </div>

              <div class="text-end">
                  <div class="dropdown">
                  <button type="button" className="btn btn-white btn-icon px-2 py-2 " data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                  </button>   

            </div>

          </div>
        </li>
          </ul>
        </div>






        



        <div class="col-xxl-2 col-md-4 col-sm-6 flex-grow-1 d-flex flex-col">
          <ul class="list-group d-flex row flex-row col-12">


          <li class="list-group-item border d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
              <div class="d-flex align-items-start">
                <div class="d-flex flex-column">
                  <h6 class="mb-0 text-sm">Smak wina</h6>
                  
                  <span class="text-sm text-info">
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Wytrawne</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Półwytrawne</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Półsłodkie</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Słodkie</span>
                    </div>
                  </span>

                </div>
              </div>

              <div class="text-end">
                  <div class="dropdown">
                  <button type="button" className="btn btn-white btn-icon px-2 py-2 " data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                  </button>   

            </div>

          </div>


            </li>
          </ul>
        </div>



        <div class="col-xxl-2 col-md-4 col-sm-6 flex-grow-1 d-flex flex-col">
          <ul class="list-group d-flex row flex-row col-12">


          <li class="list-group-item border flex-row d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
              <div class="d-flex align-items-start">
                <div class="d-flex flex-column">
                  <h6 class="mb-0 text-sm">Rodzaj wina</h6>
                  
                  <span class="text-sm text-info">
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Spokojne</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Musujące</span>
                    </div>
                    <div class="form-check mt-2 mb-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <span class="font-weight-semibold text-dark ms-1">Grzane</span>
                    </div>
                  </span>

                </div>
              </div>
              <div class="d-flex align-items-center text-danger text-gradient">
                <div class="form-check">
                  <input name="radioDisabled" id="customRadioDisabled" class="form-check-input form-check-input-info" />
                </div>
              </div>
              <div class="text-end">
                  <div class="dropdown">
                  <button type="button" className="btn btn-white btn-icon px-2 py-2 " data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                  </button>   

            </div>

          </div>
        </li>
          </ul>
        </div>



        <div class="col-xxl-2 col-md-4 col-sm-6 flex-grow-1 d-flex flex-col">
          <ul class="list-group d-flex row flex-row col-12">


          <li class="list-group-item border d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
              <div class="d-flex align-items-start">
                <div class="d-flex flex-column">
                  <h6 class="mb-0 text-sm mb-1">Kraj pochodzenia</h6>
                  <span class="text-sm mt-1">

                    <div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="text-dark bi bi-x-square-fill me-2 mb-1" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
</svg>
                        Włochy</div>
                    <div>                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="text-dark bi bi-x-square-fill me-2 mb-1" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
</svg>
                      Francja</div>
                    <div>                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="text-dark bi bi-x-square-fill me-2 mb-1" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
</svg>
                      Stany Zjednoczone</div>

                    <button type="button" class="btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 mt-3">
              <span class="btn-inner--icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul me-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
              </span>
              <span class="btn-inner--text">Wybierz</span>
            </button>
                  </span>

                </div>
              </div>

                <div class="form-check">
                  <input name="radioDisabled" id="customRadioDisabled" class="form-check-input form-check-input-info" />
                </div>


                <div class="text-end">
                  <div class="dropdown">
                  <button type="button" className="btn btn-white btn-icon px-2 py-2 " data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                  </button>   

            </div>

          </div>
        </li>
          </ul>
        </div>





        <div class="col-xxl-2 col-md-4 col-sm-6 flex-grow-1 d-flex flex-col">
          <ul class="list-group d-flex row flex-row col-12">


          <li class="list-group-item border d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
              <div class="d-flex align-items-start">
                <div class="d-flex flex-column mb-3">
                  <h6 class="mb-3 text-sm">Zawartość alkoholu</h6>

                  <MultiRangeSlider
      min={0}
      max={50}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
    />
                  <div className="form-check form-switch ps-0 mt-4">
                    <input className="form-check-input ms-2" type="checkbox" id="flexSwitchCheckDefault3" />
                    <label className="font-weight-semibold text-dark ms-2" for="flexSwitchCheckDefault3">Bezalkoholowe</label>
                  </div>
                </div>
              </div>

              <div class="text-end">
                  <div class="dropdown">
                  <button type="button" className="btn btn-white btn-icon px-2 py-2 " data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                  </button>   

            </div>

          </div>
        </li>
          </ul>
        </div>


        <div class="col-xxl-2 col-md-4 col-sm-6 flex-grow-1 d-flex flex-col">
          <ul class="list-group d-flex row flex-row col-12">


          <li class="list-group-item border flex-row d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3">
              <div class="d-flex align-items-start">
                <div class="d-flex flex-column">
                  <h6 class="mb-3 text-sm">Cena hurtowa</h6>
                  
                  <span class="text-sm text-info">
                  <div className="input-group mb-3">
                  <span class="input-group-text">Od</span>
              <input type="text" class="form-control" placeholder="0 zł" aria-label="From" />
              </div><div className="input-group">
  <span class="input-group-text">Do</span>
  <input type="text" class="form-control" placeholder="1000 zł" aria-label="To" />

            </div>
                  </span>

                </div>
              </div>
              <div class="d-flex align-items-center text-danger text-gradient">
                <div class="form-check">
                  <input name="radioDisabled" id="customRadioDisabled" class="form-check-input form-check-input-info" />
                </div>
              </div>
              <div class="text-end">
                  <div class="dropdown">
                  <button type="button" className="btn btn-white btn-icon px-2 py-2 " data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                  </button>   

            </div>

          </div>
        </li>
          </ul>
        </div>



      </div>








      </div>      
      </div>
      </div>


      <div class="col-12">
          <div class="d-lg-flex align-items-center mt-4 mb-4">
            <div class="flex-grow mb-md-0 mb-4">
              <h5 class="font-weight-semibold mb-1 ms-4">Znalezionych win: 52</h5>
              <p class="text-sm mb-0 ms-4">Jeżeli brakuje wina, które zasługuje na znalezienie się w naszej bazie prosimy o je dodanie za pomocą formularza!</p>
            </div>
            <button type="button" class="btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 me-4 mt-2 ms-4 ms-sm-auto">
              <span class="btn-inner--icon">
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="d-block me-2">
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
              </span>
              <span class="btn-inner--text">Dodaj wino</span>
            </button>
          </div>
        </div>
        <hr />





    <div class="row">
    <div class="col-xxl-4 col-lg-6 col-md-12">
              <div class="card shadow-xs border mb-4">
                <div class="card-body py-0">
                  <div class="row p-3">
                    <div class="col-4 d-flex align-items-center p-0">
                      <div className="wine-shape bg-dark text-center text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mt-6 mb-6">
                        <img src="storage/wines/pol_pl_Lamita-Chardonnay-403_2.png" alt="wine_image" />
                      </div>                 
                    </div><div class="col-8 d-flex flex-column p-0 m-0">
                    <div class="row flex-grow-1 text-start">
                  
                    <div class="col-md-10 col-9" >
                      <div class="d-flex ps-3">
                        <div >
                          <h4 class="font-weight-semibold text-lg flex-grow-1 mt-2 mb-2">                          <span class="badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <div class="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9.6</div>
                          </span>Lamita Chardonnay
</h4>
                          <p class="text-sm mb-1">Kolor: <b>Białe</b></p>
                          <p class="text-sm mb-1">Smak: <b>Wytrawne</b></p>
                          <p class="text-sm mb-1 d-flex align-items-center">Kraj:<img src="storage/flags/Argentina.png" class="ms-1 me-1" height="14" width="21" alt="wine_image" /><b>Argentyna</b></p>
                          <p class="text-sm mb-1">Rodzaj: <b>Spokojne</b></p>
                          <p class="text-sm mb-1">Cena hurtowa: <b>40,00 zł</b></p>
                          <p class="text-sm mb-1">Zawartość alkoholu:</p>



                          {/* <h4 class="mb-0 font-weight-bold">$20,450.80</h4> */}

                        </div>
  
                      </div>
                    </div>
                    <div class="text-end col-md-2 col-3 row-6 pe-2">
                          <div class="dropdown">


                          <button type="button" className="btn btn-white btn-icon px-2 py-2" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end me-n4">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                         </div>
                        </div>
                        </div>       
                        <p className='text-sm text-center w-70 ms-3 mb-0'><b>25%</b></p>
                          <div class="progress ms-3 w-70">
                      <div class="progress-bar progress-bar-lg bg-gradient-dark w-25" role="progressbar"></div>

                    </div>
                        <p class="text-sm mb-1 mt-3 ps-3">Najlepiej podawać do:</p>
                        <div class="d-flex row ps-3">
              <OverlayTrigger placement="top" overlay={<Tooltip>Wołowina</Tooltip>}>
              <div class="ms-2 me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <img src="storage/food/cow-black.png" height="36" width="36" alt="wine_image" />
              </div>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Zupy</Tooltip>}>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
              <img src="storage/food/zupa-black.png" height="32" width="32" alt="wine_image" />
              </div>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Sałatki</Tooltip>}>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
              <img src="storage/food/salad-black.png" height="32" width="32" alt="wine_image" />
              </div>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Owoce morza</Tooltip>}>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
              <img src="storage/food/shrimp-black.png" height="32" width="32" alt="wine_image" />
              </div>
              </OverlayTrigger>
              </div>
                </div>
                </div>
                </div>
              </div>
              
            </div>





            <div class="col-xxl-4 col-lg-6 col-md-12">
              <div class="card shadow-xs border mb-4">
                <div class="card-body py-0">
                  <div class="row p-3">
                    <div class="col-4 d-flex align-items-center p-0">
                      <div className="wine-shape bg-dark text-center text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mt-6 mb-6">
                        <img src="storage/wines/pol_pl_Lamita-Chardonnay-403_2.png" alt="wine_image" />
                      </div>                 
                    </div><div class="col-8 d-flex flex-column p-0 m-0">
                    <div class="row flex-grow-1 text-start">
                  
                    <div class="col-md-10 col-9" >
                      <div class="d-flex ps-3">
                        <div>
                          <h4 class="font-weight-semibold text-lg mt-2 mb-2">                          <span class="badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9.6
                          </span>Lamita Chardonnay
</h4>
                          <p class="text-sm mb-1">Kolor: białe</p>
                          <p class="text-sm mb-1">Smak: wytrawne</p>
                          <p class="text-sm mb-1">Kraj: Argentyna</p>
                          <p class="text-sm mb-1">Rodzaj: spokojne</p>
                          <p class="text-sm mb-1">Zawartość alkoholu: <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar">25%</div>
</div></p>

                          {/* <h4 class="mb-0 font-weight-bold">$20,450.80</h4> */}

                        </div>
  
                      </div>
                    </div>
                    <div class="text-end col-md-2 col-3 row-6 pe-2">
                          <div class="dropdown">


                          <button type="button" className="btn btn-white btn-icon px-2 py-2" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end me-n4">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                         </div>
                        </div>
                        </div>       

                        <div class="d-flex row mt-3 ps-3">
                          <div class="ms-2 me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              </div>
                </div>
                </div>
                </div>
              </div>
              
            </div>









            <div class="col-xxl-4 col-lg-6 col-md-12">
              <div class="card shadow-xs border mb-4">
                <div class="card-body py-0">
                  <div class="row p-3">
                    <div class="col-4 d-flex align-items-center p-0">
                      <div className="wine-shape bg-dark text-center text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mt-6 mb-6">
                        <img src="storage/wines/pol_pl_Lamita-Chardonnay-403_2.png" alt="wine_image" />
                      </div>                 
                    </div><div class="col-8 d-flex flex-column p-0 m-0">
                    <div class="row flex-grow-1 text-start">
                  
                    <div class="col-md-10 col-9" >
                      <div class="d-flex ps-3">
                        <div>
                          <h4 class="font-weight-semibold text-lg mt-2 mb-2">                          <span class="badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9.6
                          </span>Lamita Chardonnay
</h4>
                          <p class="text-sm mb-1">Kolor: białe</p>
                          <p class="text-sm mb-1">Smak: wytrawne</p>
                          <p class="text-sm mb-1">Kraj: Argentyna</p>
                          <p class="text-sm mb-1">Rodzaj: spokojne</p>
                          <p class="text-sm mb-1">Zawartość alkoholu: <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar">25%</div>
</div></p>

                          {/* <h4 class="mb-0 font-weight-bold">$20,450.80</h4> */}

                        </div>
  
                      </div>
                    </div>
                    <div class="text-end col-md-2 col-3 row-6 pe-2">
                          <div class="dropdown">


                          <button type="button" className="btn btn-white btn-icon px-2 py-2" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end me-n4">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                         </div>
                        </div>
                        </div>       

                        <div class="d-flex row mt-3 ps-3">
                          <div class="ms-2 me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              </div>
                </div>
                </div>
                </div>
              </div>
              
            </div>



            <div class="col-xxl-4 col-lg-6 col-md-12">
              <div class="card shadow-xs border mb-4">
                <div class="card-body py-0">
                  <div class="row p-3">
                    <div class="col-4 d-flex align-items-center p-0">
                      <div className="wine-shape bg-dark text-center text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mt-6 mb-6">
                        <img src="storage/wines/pol_pl_Lamita-Chardonnay-403_2.png" alt="wine_image" />
                      </div>                 
                    </div><div class="col-8 d-flex flex-column p-0 m-0">
                    <div class="row flex-grow-1 text-start">
                  
                    <div class="col-md-10 col-9" >
                      <div class="d-flex ps-3">
                        <div>
                          <h4 class="font-weight-semibold text-lg mt-2 mb-2">                          <span class="badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9.6
                          </span>Lamita Chardonnay
</h4>
                          <p class="text-sm mb-1">Kolor: białe</p>
                          <p class="text-sm mb-1">Smak: wytrawne</p>
                          <p class="text-sm mb-1">Kraj: Argentyna</p>
                          <p class="text-sm mb-1">Rodzaj: spokojne</p>
                          <p class="text-sm mb-1">Zawartość alkoholu: <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar">25%</div>
</div></p>

                          {/* <h4 class="mb-0 font-weight-bold">$20,450.80</h4> */}

                        </div>
  
                      </div>
                    </div>
                    <div class="text-end col-md-2 col-3 row-6 pe-2">
                          <div class="dropdown">


                          <button type="button" className="btn btn-white btn-icon px-2 py-2" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end me-n4">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                         </div>
                        </div>
                        </div>       

                        <div class="d-flex row mt-3 ps-3">
                          <div class="ms-2 me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              </div>
                </div>
                </div>
                </div>
              </div>
              
            </div>

            <div class="col-xxl-4 col-lg-6 col-md-12">
              <div class="card shadow-xs border mb-4">
                <div class="card-body py-0">
                  <div class="row p-3">
                    <div class="col-4 d-flex align-items-center p-0">
                      <div className="wine-shape bg-dark text-center text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mt-6 mb-6">
                        <img src="storage/wines/pol_pl_Lamita-Chardonnay-403_2.png" alt="wine_image" />
                      </div>                 
                    </div><div class="col-8 d-flex flex-column p-0 m-0">
                    <div class="row flex-grow-1 text-start">
                  
                    <div class="col-md-10 col-9" >
                      <div class="d-flex ps-3">
                        <div>
                          <h4 class="font-weight-semibold text-lg mt-2 mb-2">                          <span class="badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9.6
                          </span>Lamita Chardonnay
</h4>
                          <p class="text-sm mb-1">Kolor: białe</p>
                          <p class="text-sm mb-1">Smak: wytrawne</p>
                          <p class="text-sm mb-1">Kraj: Argentyna</p>
                          <p class="text-sm mb-1">Rodzaj: spokojne</p>
                          <p class="text-sm mb-1">Zawartość alkoholu: <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar">25%</div>
</div></p>

                          {/* <h4 class="mb-0 font-weight-bold">$20,450.80</h4> */}

                        </div>
  
                      </div>
                    </div>
                    <div class="text-end col-md-2 col-3 row-6 pe-2">
                          <div class="dropdown">


                          <button type="button" className="btn btn-white btn-icon px-2 py-2" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end me-n4">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                         </div>
                        </div>
                        </div>       

                        <div class="d-flex row mt-3 ps-3">
                          <div class="ms-2 me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              </div>
                </div>
                </div>
                </div>
              </div>
              
            </div>


            <div class="col-xxl-4 col-lg-6 col-md-12">
              <div class="card shadow-xs border mb-4">
                <div class="card-body py-0">
                  <div class="row p-3">
                    <div class="col-4 d-flex align-items-center p-0">
                      <div className="wine-shape bg-dark text-center text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mt-6 mb-6">
                        <img src="storage/wines/pol_pl_Lamita-Chardonnay-403_2.png" alt="wine_image" />
                      </div>                 
                    </div><div class="col-8 d-flex flex-column p-0 m-0">
                    <div class="row flex-grow-1 text-start">
                  
                    <div class="col-md-10 col-9" >
                      <div class="d-flex ps-3">
                        <div>
                          <h4 class="font-weight-semibold text-lg mt-2 mb-2">                          <span class="badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9.6
                          </span>Lamita Chardonnay
</h4>
                          <p class="text-sm mb-1">Kolor: białe</p>
                          <p class="text-sm mb-1">Smak: wytrawne</p>
                          <p class="text-sm mb-1">Kraj: Argentyna</p>
                          <p class="text-sm mb-1">Rodzaj: spokojne</p>
                          <p class="text-sm mb-1">Zawartość alkoholu: <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar">25%</div>
</div></p>

                          {/* <h4 class="mb-0 font-weight-bold">$20,450.80</h4> */}

                        </div>
  
                      </div>
                    </div>
                    <div class="text-end col-md-2 col-3 row-6 pe-2">
                          <div class="dropdown">


                          <button type="button" className="btn btn-white btn-icon px-2 py-2" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end me-n4">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                         </div>
                        </div>
                        </div>       

                        <div class="d-flex row mt-3 ps-3">
                          <div class="ms-2 me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
                  <path fill-rule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clip-rule="evenodd" />
                  <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              </div>
                </div>
                </div>
                </div>
              </div>
              
            </div>



            {/* <div class="col-lg-6">
              <div class="card shadow-xs border mb-4">
                <div class="card-body py-0">
                  <div class="row">
                    <div class="col-4 pe-1">
                      <div class="chart">
                        <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                            
                        </svg>
                      </div>
                    </div>
                    <div class="col-8 my-auto">
                      <div class="d-flex">
                        <div>
                          <h4 class="font-weight-semibold text-lg mb-4">Secondary Wallet</h4>
                          <p class="text-sm mb-1">Current Balance</p>
                          <h3 class="mb-0 font-weight-bold">$10,250.60</h3>
                        </div>


                        <div class="ms-auto text-end d-flex flex-column">
                          <div class="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="ms-auto cursor-pointer dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                              <path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                            </svg>
                            <ul class="dropdown-menu dropdown-menu-end me-n4">
                              <li><a class="dropdown-item" href="#">Action</a></li>
                              <li><a class="dropdown-item" href="#">Another action</a></li>
                              <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                          </div>
                          
                          <span class="badge badge-sm border border-success text-success bg-success border-radius-sm mt-auto mb-2">
                            <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0.46967 4.46967C0.176777 4.76256 0.176777 5.23744 0.46967 5.53033C0.762563 5.82322 1.23744 5.82322 1.53033 5.53033L0.46967 4.46967ZM5.53033 1.53033C5.82322 1.23744 5.82322 0.762563 5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967L5.53033 1.53033ZM5.53033 0.46967C5.23744 0.176777 4.76256 0.176777 4.46967 0.46967C4.17678 0.762563 4.17678 1.23744 4.46967 1.53033L5.53033 0.46967ZM8.46967 5.53033C8.76256 5.82322 9.23744 5.82322 9.53033 5.53033C9.82322 5.23744 9.82322 4.76256 9.53033 4.46967L8.46967 5.53033ZM1.53033 5.53033L5.53033 1.53033L4.46967 0.46967L0.46967 4.46967L1.53033 5.53033ZM4.46967 1.53033L8.46967 5.53033L9.53033 4.46967L5.53033 0.46967L4.46967 1.53033Z" fill="#67C23A" />
                            </svg>
                            33.8%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>




































      
      <footer className="footer pt-3  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-xs text-muted text-lg-start">
                Copyright
                © <script>
                  document.write(new Date().getFullYear())
                </script>
                Corporate UI by
                <a href="https://www.creative-tim.com" className="text-secondary" target="_blank">Creative Tim</a>.
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://www.creative-tim.com" className="nav-link text-xs text-muted" target="_blank">Creative Tim</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/presentation" className="nav-link text-xs text-muted" target="_blank">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/blog" className="nav-link text-xs text-muted" target="_blank">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/license" className="nav-link text-xs pe-0 text-muted" target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>          
        


  <div className="fixed-plugin">
    <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
      <i className="fa fa-cog py-2"></i>
    </a>
    <div className="card shadow-lg ">
      <div className="card-header pb-0 pt-3 ">
        <div className="float-start">
          <h5 className="mt-3 mb-0">Corporate UI Configurator</h5>
          <p>See our dashboard options.</p>
        </div>
        <div className="float-end mt-4">
          <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
            <i className="fa fa-close"></i>
          </button>
        </div>
        {/* <!-- End Toggle Button --> */}
      </div>
      <hr className="horizontal dark my-1" />
      <div className="card-body pt-sm-3 pt-0">
        {/* <!-- Sidebar Backgrounds --> */}
        <div>
          <h6 className="mb-0">Sidebar Colors</h6>
        </div>
        <a href="javascript:void(0)" className="switch-trigger background-color">
          <div className="badge-colors my-2 text-start">
            <span className="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
            <span className="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
            <span className="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
            <span className="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
            <span className="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
          </div>
        </a>
        {/* <!-- Sidenav Type --> */}
        <div className="mt-3">
          <h6 className="mb-0">Sidenav Type</h6>
          <p className="text-sm">Choose between 2 different sidenav types.</p>
        </div>
        <div className="d-flex">
          <button className="btn bg-gradient-primary w-100 px-3 mb-2 active" data-className="bg-slate-900" onclick="sidebarType(this)">Dark</button>
          <button className="btn bg-gradient-primary w-100 px-3 mb-2 ms-2" data-className="bg-white" onclick="sidebarType(this)">White</button>
        </div>
        <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
        {/* <!-- Navbar Fixed --> */}
        <div className="mt-3">
          <h6 className="mb-0">Navbar Fixed</h6>
        </div>
        <div className="form-check form-switch ps-0">
          <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)" />
        </div>
        <hr className="horizontal dark my-sm-4" />
        <a className="btn bg-gradient-dark w-100" href="https://www.creative-tim.com/product/corporate-ui-dashboard">Free Download</a>
        <a className="btn btn-outline-dark w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/license/corporate-ui-dashboard">View documentation</a>
        <div className="w-100 text-center">
          <a className="github-button" href="https://github.com/creativetimofficial/corporate-ui-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/corporate-ui-dashboard on GitHub">Star</a>
          <h6 className="mt-3">Thank you for sharing!</h6>
          <a href="https://twitter.com/intent/tweet?text=Check%20Corporate%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fcorporate-ui-dashboard" className="btn btn-dark mb-0 me-2" target="_blank">
            <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/corporate-ui-dashboard" className="btn btn-dark mb-0 me-2" target="_blank">
            <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
          </a>
        </div>
      </div>
    </div>
  </div>






  </>
  // </AuthenticatedLayout>
    );
}
