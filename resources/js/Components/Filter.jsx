import MultiRangeSlider from "@/Components/MultiRangeSlider/MultiRangeSlider";

export default function Filter({}) {
    return (
        <>
        <div className="col-12 mt-n4">
        <div className="card shadow-xs border mb-1 pb-3">
          <div className="card-header pb-0 p-3">
          <div class="row">
                  <div class="col-md-8 col-9">
                    <h6 class="mb-0 font-weight-semibold text-lg">Filter win</h6>
                  </div>
                  <div class="col-md-4 col-3 text-end">
                  <div class="dropdown">
                  <div className='d-flex justify-content-end align-items-end align-items-sm-center mt-1 mt-sm-0 flex-column flex-sm-row'><p className='text-sm me-2 mb-1 mb-sm-3'>Sortowanie:</p>
                  <button type="button" class="btn btn-white btn-icon px-2 py-2 ps-3 pe-3 text-nowrap" data-bs-toggle="dropdown" aria-expanded="false">
                  Ostatnio dodane <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                    </button>
                 
                  
<ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item">Ostatnio dodane</a></li>
    <li><a class="dropdown-item">Najwyżej oceniane</a></li>
    <li><a class="dropdown-item">Najtańsze cenowo</a></li>
  </ul>

                  </div>   
                  </div>
                  </div>
                </div>
          </div>


          <div className="card-body p-3 ms-4">
  <div class="row justify-content-between">


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
    </>
    );
}
