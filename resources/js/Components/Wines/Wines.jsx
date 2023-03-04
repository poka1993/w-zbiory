import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import {flags} from '@/Components/Flags';
import DishComponent from '@/Components/DishCompontent';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from '@inertiajs/inertia-react';

export default function Wines({ wines }) {
  function flagIcon(data) {
    let flag = flags.filter((d) => d.label == data)[0];
    return <div className="ms-1 me-1 d-inline-block text-lg">{flag.icon}</div>
  }

    return (
        <> 

            <div class="row">


            {wines.map(wine => 
            <div class="col-xxl-4 col-lg-6 col-md-12 mb-3">
              <div class="card shadow-xs border h-100">
                <div class="card-body py-0">
                  <div class="row p-3">
                    <div class="col-4 d-flex align-items-center p-0">
                    <div className="wine-shape text-center text-white mx-auto d-flex align-items-center justify-content-center mt-6 mb-6">
                      <Link type="button" className='border-0 bg-transparent' href={`/wine-${wine.id}-${wine.name.replace(" ", "-")}`} method="get" as="button">
                        <img src={`storage/${wine.image}`} alt="wine_image" />
                      </Link>
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
                          </span>
                          <Link className='border-0 bg-transparent wine-name-link' href={`/wine-${wine.id}-${wine.name.replace(" ", "-")}`} method="get" as="button">
                            {wine.name}
                          </Link>
</h4>
                          <p class="text-sm mb-1">Kolor: <b>{wine.color}</b></p>
                          <p class="text-sm mb-1">Smak: <b>{wine.taste}</b></p>
                          <p class="text-sm mb-1 d-flex align-items-center">Kraj: {flagIcon(wine.country)}<b>{wine.country}</b></p>
                          <p class="text-sm mb-1">Rodzaj: <b>{wine.type}</b></p>
                          <p class="text-sm mb-1">Cena hurtowa: <b>{Number(wine.prize).toFixed(2)} zł</b></p>
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
                              <li><a class="dropdown-item" href="#">Pokaż szczegóły</a></li>
                              <li><a class="dropdown-item" href="#">Dodaj do ulubionych</a></li>
                              <li><a class="dropdown-item" href="#">Udostępnij znajomym</a></li>
                            </ul>
                         </div>
                        </div>
                        </div>       
                        <p className='text-sm text-center w-70 ms-3 mb-0'><b>{Number(wine.vol).toFixed(1)} %</b></p>
                        <ProgressBar className='ms-2 ps-0 w-80' variant="dark" now={wine.vol} />
                        <p class="text-sm mb-1 mt-3 ps-3">Najlepiej podawać do:</p>
                        <div class="d-flex row ps-4">
                        {Boolean(wine.dishes) ? wine.dishes.map(dish => <DishComponent label={dish} />) : <p class="text-xs opacity-50 ms-n2">Brak propozycji</p>}
              </div>
                </div>
                </div>
                </div>
              </div>
              
            </div>
            )}




            



         
        </div>
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
              <hr className='border mb-1'/>
        </>
    );
}
