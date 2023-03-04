import { Link } from '@inertiajs/inertia-react';
import NavButtons from './NavButtons';

export default function Statistics({}) {
    return (
      <>
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

</div>
    <div className='d-flex align-items-center justify-content-center'>
    <div class="w-xxl-60 w-xl-75 w-lg-80 w-md-85 w-95"> 
    {/* container */}
      <div class="row mt-sm-n7 mt-n8">

      <div class="d-sm-none d-flex align-items-center justify-content-center p-3">
          <div class="col-12 flex-row card blur border border-white mb-4 shadow-xs m-2">         
            <div class="col-6 card-body p-sm-4">
              <div className='d-flex'>
              <div class="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                <img src='storage/img/wine-glass.png' height="22" />
              </div>
              <h5 class="mb-0 font-weight-bold mt-2 ms-2">125322</h5>
              </div>
              <p class="text-sm mb-1 ms-2">Otwartych win</p>

              <div className='d-flex mt-3'>
              <div class="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
              <h5 class="mb-0 font-weight-bold mt-2 ms-2">124452</h5>
              </div>
              <p class="text-sm mb-1 ms-2">Sommelierów</p>
            </div>
            <div class="col-6 card-body p-sm-4">
              <div className='d-flex'>
              <div class="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
              </div>
              <h5 class="mb-0 font-weight-bold mt-2 ms-2">125322</h5>
              </div>
              <p class="text-sm mb-1 ms-2">Opinii</p>
              <div className='d-flex mt-3'>
              <div class="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              </div>
              <h5 class="mb-0 font-weight-bold mt-2 ms-2">125322</h5>
              </div>
              <p class="text-sm mb-1 ms-2">Ocen</p>
            </div>
          </div>
        </div>


        <div class="col-sm-3 col-6 d-sm-inline d-none">
          <div class="card blur border border-white mb-4 shadow-xs">         
            <div class="card-body p-sm-4">
              <div class="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
                <img src='storage/img/wine-glass.png' height="22" />
              </div>
              <p class="text-sm text-lg-start text-sm-center mb-1 ms-sm-n4 me-sm-n4 ms-lg-0 me-lg-0">Otwartych win</p>
              <h4 class="mb-0 text-lg-start text-sm-center ms-sm-n4 me-sm-n4 font-weight-bold ms-lg-0 me-lg-0">125322</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-6 d-sm-inline d-none">
          <div class="card blur border border-white mb-4 shadow-xs">
            <div class="card-body p-4">
              <div class="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="19" width="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </div>
              <p class="text-sm text-lg-start text-sm-center mb-1 ms-sm-n4 me-sm-n4 ms-lg-0 me-lg-0">Sommelierów</p>
              <h4 class="mb-0 text-lg-start text-sm-center ms-sm-n4 me-sm-n4 font-weight-bold ms-lg-0 me-lg-0">124452</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-6 d-sm-inline d-none">
          <div class="card blur border border-white mb-4 shadow-xs">
            <div class="card-body p-4">
              <div class="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
              </svg>
              </div>
              <p class="text-sm text-lg-start text-sm-center mb-1 ms-sm-n4 me-sm-n4 ms-lg-0 me-lg-0">Opinii</p>
              <h4 class="mb-0 text-lg-start text-sm-center ms-sm-n4 me-sm-n4 font-weight-bold ms-lg-0 me-lg-0">125322</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-3 col-6 d-sm-inline d-none">
          <div class="card blur border border-white mb-4 shadow-xs">
            <div class="card-body p-4">
              <div class="icon icon-shape bg-white shadow shadow-xs text-center border-radius-md d-flex align-items-center justify-content-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
              </div>
              <p class="text-sm text-lg-start text-sm-center mb-1 ms-sm-n4 me-sm-n4 ms-lg-0 me-lg-0">Ocen</p>
              <h4 class="mb-0 text-lg-start text-sm-center ms-sm-n4 me-sm-n4 font-weight-bold ms-lg-0 me-lg-0">125322</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
      </>
    );
}
