import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ReactImageMagnify from 'react-image-magnify';

export default function WinePage({  }) {
    return (
        <>
            <div class="row">
            <div class="col-12">
              <div class="card shadow-xs border mb-4">
                <div class="card-body py-0">
                  <div class="row col pt-3 pb-3">
                    
                    <div class="d-none d-sm-flex col-xxl-2 col-lg-3 col-md-4 col-sm-4 p-xxl-0 p-md-4 p-lg-2 p-xl-4 p-0 z-index-3">


                      <div className="wine-card d-flex w-100 h-100 row align-content-center">
                        <div>
                    <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,

        src: "storage/wines/pol_pl_Lamita-Chardonnay-403_2.png",
    },
    largeImage: {
        src: "storage/wines/pol_pl_Lamita-Chardonnay-403_2.png",
        width: 825,
        height: 1500,
    },
    enlargedImageStyle: { backgroundColor: '#fff' },
    enlargedImageContainerStyle: { borderRadius: '6px', boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.16)" },
    
}} />

</div>  
                      </div>                 
                    </div>
                    

                    <div class="col-xxl-3 col-lg-4 col-sm-8 col-md-8 z-index-1">
            <div class="card border shadow-xs h-100">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-md-8 col-9">
                    <h6 class="mb-0 font-weight-semibold text-lg">Parametry wina</h6>
                  </div>
                  <div class="col-md-4 col-3 text-end">
                    <button type="button" class="btn btn-white btn-icon px-2 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-row'>
              <div class="d-flex d-sm-none col-3">
              <div className="wine-shape bg-dark text-center text-white rounded-circle mx-auto d-flex align-items-center justify-content-center mt-6 mb-6">
                        <img src="storage/wines/pol_pl_Lamita-Chardonnay-403_2.png" alt="wine_image" />
                      </div>  
                  </div>
              <div class="card-body col-9 col-sm-12 p-3 pt-0">
                <span class="row font-weight-semibold text-dark d-flex flex-grow-1 ps-3">
                          <p class="text-sm mb-1">Kolor: <b>Białe</b></p>
                          <p class="text-sm mb-1">Smak: <b>Wytrawne</b></p>
                          <p class="text-sm mb-1 d-flex align-items-center">Kraj:<img src="storage/flags/Argentina.png" class="ms-1 me-1" height="14" width="21" alt="wine_image" /><b>Argentyna</b></p>
                          <p class="text-sm mb-1">Rodzaj: <b>Spokojne</b></p>
                          <p class="text-sm mb-1">Cena hurtowa: <b>40,00 zł</b></p>
                          <p class="text-sm mb-1">Zawartość alkoholu:</p>
                          <p className='text-sm text-center ms-2 w-80 mb-0'><b>25%</b></p>
                          <div class="progress p-0 ms-2 w-80">
                      <div class="progress-bar progress-bar-lg bg-gradient-dark w-25" role="progressbar"></div>

                    </div>
                          <p class="text-sm mb-1 mt-3">Najlepiej podawać do:</p>

                          <div class="row col-12 ps-4 pt-1">
              <OverlayTrigger placement="top" overlay={<Tooltip>Wołowina</Tooltip>}>
              <div class="me-2 icon icon-shape bg-white shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3">
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
                    
                    </span>
            </div>
            </div>
            </div>
          </div>





          <div class="col-12 col-xxl-3 col-lg-5 col-md-6 mt-lg-0 mt-3">
            <div class="card border shadow-xs h-100">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-md-8 col-9">
                    <h6 class="mb-0 font-weight-semibold text-lg">Oceny wina</h6>
                  </div>
                  <div class="col-md-4 col-3 text-end">
                    <button type="button" class="btn btn-white btn-icon px-2 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body p-3 pt-0">
              <ul class="list-group">
                <li class="list-group-item border-0 d-flex align-items-center px-0 mb-1">

                  <div class="d-flex w-100 bg-secondary badge badge-sm border border-secondary text-secondary bg-secondary align-items-start flex-column justify-content-center">
                    <h6 class="mb-0 text-sm font-weight-semibold">Twoja ocena:</h6>
                    <p class="mb-0 text-sm text-secondary w-100">                          
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-1 bi bi-star" viewBox="0 0 16 16">
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                          </svg>
                          </p>
                  </div>                  
                </li>
                <li class="list-group-item border-0 d-flex flex-column px-0 mb-n2 mt-n2 ms-2">
                          <p class="text-sm mb-1">Wystawionych ocen: <b>54</b></p>
                          <p class="text-sm mb-1">Wystawionych opinii: <b>6</b></p>
                          <hr />
                          <p class="text-sm mb-1">Ulubione wino: <b>21 użytkowników</b></p>
                </li>



                <li class="list-group-item border-0 d-flex align-items-center px-0 mb-n1">
                  
                <div class="ms-3 avatar-group">
                  <OverlayTrigger placement="top" overlay={<Tooltip>Elena Morison</Tooltip>}>
                   <a href="/" class="avatar avatar-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                     <img alt="Image placeholder" src="storage/img/team-1.jpg" />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={<Tooltip>Kieran Gibbs</Tooltip>}>
                   <a href="/" class="avatar avatar-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                     <img alt="Image placeholder" src="storage/img/team-2.jpg" />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={<Tooltip>Chris Brown</Tooltip>}>
                   <a href="/" class="avatar avatar-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                     <img alt="Image placeholder" src="storage/img/team-3.jpg" />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={<Tooltip>Teddy Mercury</Tooltip>}>
                   <a href="/" class="avatar avatar-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                     <img alt="Image placeholder" src="storage/img/team-4.jpg" />
                    </a>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={<Tooltip>Lara Hawthron</Tooltip>}>
                   <a href="/" class="avatar avatar-sm rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Elena Morison">
                     <img alt="Image placeholder" src="storage/img/team-5.jpg" />
                    </a>
                  </OverlayTrigger>
                  </div>
                  <div class="d-flex ms-3 align-items-start flex-column justify-content-center">
                    <h6 class="mb-0 text-sm mb-1">+ 16 innych</h6>
                  </div>

                </li>
                <hr />
                <li class="list-group-item border-0 d-flex flex-column px-0 mb-n2 mt-n2 ms-2 align-items-start">
                          <button type="button" class="btn btn-sm btn-dark btn-icon align-items-end mb-0 text-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-heart me-2" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
  </svg>
  Poleć wino znajomym
          </button>

                </li>
              </ul>
            </div>
            </div>
          </div>



          <div class="col-12 col-xxl-4 mt-xxl-0 mt-3 col-lg-12 col-md-6">
            <div class="card border shadow-xs h-100">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-md-8 col-9">
                    <h6 class="mb-0 font-weight-semibold text-lg">Opis wina</h6>
                  </div>
                  <div class="col-md-4 col-3 text-end">
                    <button type="button" class="btn btn-white btn-icon px-2 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </button>


                    
                  </div>
                </div>
              </div>
              <div class="card-body p-3 pt-0">
              <ul class="list-group">
              <li class="list-group-item border-0 d-flex flex-column px-0 mb-n2 mt-n2 ms-2">
                          <p class="text-sm mb-1">Wino o słonecznej barwie z zielonkawymi przebłyskami i mocnych aromatach cytrusów oraz owoców tropikalnych przemieszanych z nutami białych kwiatów. W ustach lekkie i orzeźwiające, o długiej owocowej końcówce.<br /><br />

LAMITA CHARDONNAY<br /><br />

Kraj: Argentyna<br />
Region: Mendoza<br />
Szczep: chardonnay<br />
Pojemność: 750 ml<br />
Temperatura serwowania: 8-10°C<br />
Certyfikaty: Vegan Friendly<br /><br />

Sugestie kulinarne: do przystawek, lekkich sałatek, białych ryb, owoców morza.</p>

                </li>
              </ul>
            </div>
            </div>
          </div>






                
                </div>
                </div>
              </div>
              
            </div>
          </div>    <div class="col-12">
        <div class="d-lg-flex align-items-center mt-4 mb-4">
          <div class="flex-grow mb-md-0 mb-4">
            <h5 class="font-weight-semibold mb-1 ms-4">Wystawionych opinii: 6</h5>
            <p class="text-sm mb-0 ms-4">Jeżeli skosztowałeś tego wina i chciałbyś podzielić się swoją opinią, prosimy o dodanie jej za pomocą formularza!</p>
          </div>
          <button type="button" class="btn btn-sm btn-dark btn-icon d-flex align-items-end mb-0 me-4 mt-2 ms-4 ms-sm-auto">
            <span class="btn-inner--icon">
              <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="d-block me-2">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            </span>
            <span class="btn-inner--text">Dodaj opinię</span>
          </button>
        </div>
      </div>
      <hr />

      <div class="col-12">
            <div class="card border shadow-xs h-100">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-md-8 col-9">
                    <h6 class="mb-0 font-weight-semibold text-lg">Opinie</h6>
                  </div>
                  <div class="col-md-4 col-3 text-end">
                  <div class="dropdown">
                  <div className='d-flex justify-content-end align-items-end align-items-sm-center mt-1 mt-sm-0 flex-column flex-sm-row'><p className='text-sm me-2 mb-1 mb-sm-3'>Sortowanie:</p>
                  <button type="button" class="btn btn-white btn-icon px-2 py-2 ps-3 pe-3 text-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
                 Najnowsze opinie <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                    </button>
                 
                  
<ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item">Najnowsze opinie </a></li>
    <li><a class="dropdown-item">Najstarsze opinie</a></li>
    <li><a class="dropdown-item">Najwyżej ocenione</a></li>
    <li><a class="dropdown-item">Najniżej ocenione</a></li>
  </ul>

                  </div>   
                  </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-3 pt-0">
              <ul class="list-group">
                <li class="list-group-item border-0 align-items-center px-0 mb-1">

                  <div class="d-flex text-wrap bg-secondary badge badge-sm border border-secondary text-secondary bg-secondary align-items-start flex-column justify-content-center">
                    <h6 class="mb-0 text-sm font-weight-semibold">Sortowanie względem daty dodania</h6>

                  </div>                  
                </li>
                <li class="list-group-item border-0 d-flex flex-column px-0 mb-n2 mt-n2 ms-2">
                          <p class="text-sm mb-1">Najstarsza opinia: <span className='text-xs'>25.01.2023, 21:53</span></p>
                          <p class="text-sm mb-1">Najnowsza opinia: <span className='text-xs'>26.02.2023, 20:14</span></p>
                          <hr />
                </li>



                <li class="list-group-item border-0 d-flex align-items-stretch px-0 mb-0">
                  
                <div className='d-flex flex-column text-center'>
                  <div class="avatar avatar-xl rounded-circle position-relative border border-gray-100 border-4 shadow-sm">
              <img src="storage/img/team-2.jpg" alt="profile_image" class="w-100" />
            </div>

            <span class="comment-rate-avatar badge badge-sm border border-success text-success bg-success border-radius-sm mt-2">
                          <div class="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9</div>
                          </span>

            </div>


            <div class="card border shadow-xs ms-3 flex-grow-1">
              <div class="card-header bg-gray-100 p-0 mb-0">

            {/* <div class="d-flex ms-2 w-100 bg-secondary badge badge-sm border border-secondary text-secondary bg-secondary align-items-start flex-column mb-2"> */}

            <table class="table align-items-center mb-0 overflow-hidden">
            <thead>
                    <tr className='d-flex flex-sm-row flex-column col-12'>
                      <th class="text-start text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 border-bottom-0 border-bottom-sm ms-n3 ms-sm-0"><h4 class="font-weight-semibold text-lg">
                        <span class="comment-rate-container badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <div class="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9</div>
                          </span>Noah Mclaren</h4> </th>

                      <th class="text-end text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 mt-n4 mt-sm-1">25.01.2023, 21:53</th>
                    </tr>
                  </thead>
</table>


             
                  </div>
                  
                  
                  <p class="text-sm mt-2 mb-1 ms-3 b-0 me-3 mb-2">Pyszne wino za przystępną cenę, polecam do rodzinnego obiadku.</p>
                  </div>

                </li>

                                <li class="list-group-item border-0 d-flex align-items-stretch px-0 mb-0">
                  
                <div className='d-flex flex-column text-center'>
                  <div class="avatar avatar-xl rounded-circle position-relative border border-gray-100 border-4 shadow-sm">
              <img src="storage/img/team-2.jpg" alt="profile_image" class="w-100" />
            </div>

            <span class="comment-rate-avatar badge badge-sm border border-success text-success bg-success border-radius-sm mt-2">
                          <div class="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9</div>
                          </span>

            </div>


            <div class="card border shadow-xs ms-3 flex-grow-1">
              <div class="card-header bg-gray-100 p-0 mb-0">

            {/* <div class="d-flex ms-2 w-100 bg-secondary badge badge-sm border border-secondary text-secondary bg-secondary align-items-start flex-column mb-2"> */}

            <table class="table align-items-center mb-0 overflow-hidden">
            <thead>
                    <tr className='d-flex flex-sm-row flex-column col-12'>
                      <th class="text-start text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 border-bottom-0 border-bottom-sm ms-n3 ms-sm-0"><h4 class="font-weight-semibold text-lg">
                        <span class="comment-rate-container badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <div class="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9</div>
                          </span>Noah Mclaren</h4> </th>

                      <th class="text-end text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 mt-n4 mt-sm-1">25.01.2023, 21:53</th>
                    </tr>
                  </thead>
</table>


             
                  </div>
                  
                  
                  <p class="text-sm mt-2 mb-1 ms-3 b-0 me-3 mb-2">Pyszne wino za przystępną cenę, polecam do rodzinnego obiadku.</p>
                  </div>

                </li>


                <li class="list-group-item border-0 d-flex align-items-stretch px-0 mb-0">
                  
                <div className='d-flex flex-column text-center'>
                  <div class="avatar avatar-xl rounded-circle position-relative border border-gray-100 border-4 shadow-sm">
              <img src="storage/img/team-2.jpg" alt="profile_image" class="w-100" />
            </div>

            <span class="comment-rate-avatar badge badge-sm border border-success text-success bg-success border-radius-sm mt-2">
                          <div class="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9</div>
                          </span>

            </div>


            <div class="card border shadow-xs ms-3 flex-grow-1">
              <div class="card-header bg-gray-100 p-0 mb-0">

            {/* <div class="d-flex ms-2 w-100 bg-secondary badge badge-sm border border-secondary text-secondary bg-secondary align-items-start flex-column mb-2"> */}

            <table class="table align-items-center mb-0 overflow-hidden">
            <thead>
                    <tr className='d-flex flex-sm-row flex-column col-12'>
                      <th class="text-start text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 border-bottom-0 border-bottom-sm ms-n3 ms-sm-0"><h4 class="font-weight-semibold text-lg">
                        <span class="comment-rate-container badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                          <div class="d-flex align-items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill me-1" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
                          9</div>
                          </span>Noah Mclaren</h4> </th>

                      <th class="text-end text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 mt-n4 mt-sm-1">25.01.2023, 21:53</th>
                    </tr>
                  </thead>
</table>


             
                  </div>
                  
                  
                  <p class="text-sm mt-2 mb-1 ms-3 b-0 me-3 mb-2">Pyszne wino za przystępną cenę, polecam do rodzinnego obiadku.</p>
                  </div>

                </li>
                <hr />
                <div class="px-3 d-flex w-100 justify-content-center">
                <button class="btn btn-sm btn-white d-sm-block d-none mb-0 me-3">Previous</button>
                <nav aria-label="..." class="">
                  <ul class="pagination pagination-light mb-0">
                    <li class="page-item active" aria-current="page">
                      <span class="page-link font-weight-bold">1</span>
                    </li>
                    <li class="page-item"><a class="page-link border-0 font-weight-bold" href="javascript:;">2</a></li>
                    <li class="page-item"><a class="page-link border-0 font-weight-bold d-sm-inline-flex d-none" href="javascript:;">3</a></li>
                    <li class="page-item"><a class="page-link border-0 font-weight-bold" href="javascript:;">...</a></li>
                    <li class="page-item"><a class="page-link border-0 font-weight-bold d-sm-inline-flex d-none" href="javascript:;">8</a></li>
                    <li class="page-item"><a class="page-link border-0 font-weight-bold" href="javascript:;">9</a></li>
                    <li class="page-item"><a class="page-link border-0 font-weight-bold" href="javascript:;">10</a></li>
                  </ul>
                </nav>
                <button class="btn btn-sm btn-white d-sm-block d-none mb-0 ms-3">Next</button>
              </div>

              </ul>
              
            </div>
            </div>
          </div>
        </>
    );
}
