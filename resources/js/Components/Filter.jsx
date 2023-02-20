import MultiRangeSlider from "@/Components/MultiRangeSlider/MultiRangeSlider";
import SelectCountry from "@/Components/SelectCountry";
import {flags} from '@/Components/Flags';
import React, {useState} from 'react';
import Select, { components } from 'react-select';

export default function Filter({}) {
  // const [wineColor, setWineColor] = useState(null);
  // const [wineTaste, setWineTaste] = useState(null);
  // const [wineType, setWineType] = useState(null);
  // const [wineCountry, setWineCountry] = useState(null);
  // const [wineVol, setWineVol] = useState(null);
  // const [winePrize, setWinePrize] = useState(null);

  const [filter, setFilter] = useState({
    wineColor: [],
    wineTaste: [],
    wineType: [],
    wineCountries: [],
    alcoholFree: false,
    wineVol: {
      min: 0,
      max: 50
    },
    winePrize: {
      min: null,
      max: null
    }
  });

  const [selectedList, setSelectedList] = useState("Ostatnio dodane");

  const { wineColor, wineTaste, wineType, wineCountries, wineVol, winePrize } = filter;

  const handleWineColor = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFilter({
        ...filter,
        wineColor: [...wineColor, value],
      });
    } else {
      setFilter({
        ...filter,
        wineColor: wineColor.filter((e) => e !== value),
      });
    }
  }

  const handleWineTaste = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFilter({
        ...filter,
        wineTaste: [...wineTaste, value],
      });
    } else {
      setFilter({
        ...filter,
        wineTaste: wineTaste.filter((e) => e !== value),
      });
    }
  }

  const handleWineType = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFilter({
        ...filter,
        wineType: [...wineType, value],
      });
    } else {
      setFilter({
        ...filter,
        wineType: wineType.filter((e) => e !== value),
      });
    }
  }

  const handleWineCountry = (data) => {
    let countries = [];
    data.forEach(country => {countries.push(country.value)})
    setFilter({
      ...filter,
      wineCountries: countries
    });
  }

  const handleWineVol = ({ min, max }) => {
      setFilter({
        ...filter,
        wineVol: {min, max}
      });
    }

    const handleAlcoholFree = (e) => {
      const { checked } = e.target;
  
      if (checked) {
        setFilter({
          ...filter,
          wineVol: {min: 0, max: 0},
          alcoholFree: true
        });
      } else {
        setFilter({
          ...filter,
          wineVol: {min: 0, max: 50},
          alcoholFree: false
        });
      }
    }

  const handleWinePrize = (e) => {
    const { value, id } = e.target;
      if (id == "max") {
        if (value < 0) {
          setFilter({
            ...filter,
            winePrize: {...winePrize, max: 0 },
          });
        } else {
          setFilter({
            ...filter,
            winePrize: {...winePrize, max: value ? Number(value).toFixed(0) : null  },
          });
        }
      }

      if (id == "min") {
        if (value < 0) {
          setFilter({
            ...filter,
            winePrize: {...winePrize, min: 0 },
          });
        } else {
          setFilter({
            ...filter,
            winePrize: {...winePrize, min: value ? Number(value).toFixed(0) : null },
          });
        }
      }
  }

  const resetWineColor = () => {
    setFilter({
      ...filter,
      wineColor: [],
    });
  }

  const resetWineTaste = () => {
    setFilter({
      ...filter,
      wineTaste: [],
    });
  }
  
  const resetWineType = () => {
    setFilter({
      ...filter,
      wineType: [],
    });
  }

  const resetWineVol = () => {
    setFilter({
      ...filter,
      alcoholFree: true,
    });
    const timer = setTimeout(() => {
      setFilter({
        ...filter,
        alcoholFree: false,
      });
    }, 10);
    return () => clearTimeout(timer);
  }

  const resetWinePrize = () => {
    setFilter({
      ...filter,
      winePrize: {min: "", max: ""},
    });
  }

  const flagsData = flags;

  let flagOptions = [];
  const flagsDiv = flagsData.map(flag => ( { value: flag.label, label: <div className='d-flex slide align-items-center gap-2'>{flag.icon}{flag.label}</div>  } )).sort((a,b) =>a.value.localeCompare(b.value))
  for (let i=0; i<flagsDiv.length; i++) {
  flagOptions.push(flagsDiv[i]);
  }

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="#4d4d4d" class="ms-2 bi bi-caret-down-fill me-1" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
      </components.DropdownIndicator>
    );
  };
    return (
      <>
       <SelectCountry />
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
                  {selectedList} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
                    </button>
                 
                  
<ul class="dropdown-menu dropdown-menu-end">
    <li><a onClick={(e) => setSelectedList(e.target.textContent)} class="dropdown-item">Ostatnio dodane</a></li>
    <li><a onClick={(e) => setSelectedList(e.target.textContent)} class="dropdown-item">Najwyżej oceniane</a></li>
    <li><a onClick={(e) => setSelectedList(e.target.textContent)} class="dropdown-item">Najtańsze cenowo</a></li>
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


        <li class={`list-group-item d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3 ${Boolean(wineColor.length>0) ? 'border-info' : null}`}>
            <div class="d-flex align-items-start">
              <div class="d-flex flex-column">
                <h6 class={`mb-0 text-sm ${Boolean(wineColor.length>0) ? 'text-info' : null}`}>Kolor wina</h6>
                <span class="text-sm text-info">
                  <div class="form-check mt-2 mb-0">
                    <input class="form-check-input" type="checkbox" value="Czerwone" id="flexCheckDefault" onChange={handleWineColor} checked={Boolean(wineColor.length>0) ? null : false} />
                    <span class="font-weight-semibold text-dark ms-1">Czerwone</span>
                  </div>
                  <div class="form-check mt-2 mb-0">
                    <input class="form-check-input" type="checkbox" value="Różowe" id="flexCheckDefault" onChange={handleWineColor} checked={Boolean(wineColor.length>0) ? null : false} />
                    <span class="font-weight-semibold text-dark ms-1">Różowe</span>
                  </div>
                  <div class="form-check mt-2 mb-0">
                    <input class="form-check-input" type="checkbox" value="Białe" id="flexCheckDefault" onChange={handleWineColor} checked={Boolean(wineColor.length>0) ? null : false} />
                    <span class="font-weight-semibold text-dark ms-1">Białe</span>
                  </div>
                </span>
              </div>
            </div>

            <div class="text-end">
                <div class="dropdown">
                <button type="button" className="btn btn-white btn-icon px-2 py-2" onClick={resetWineColor}>
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


        <li class={`list-group-item d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3 ${Boolean(wineTaste.length>0) ? 'border-info' : null}`}>
            <div class="d-flex align-items-start">
              <div class="d-flex flex-column">
                <h6 class={`mb-0 text-sm ${Boolean(wineTaste.length>0) ? 'text-info' : null}`}>Smak wina</h6>
                
                <span class="text-sm text-info">
                  <div class="form-check mt-2 mb-0">
                    <input class="form-check-input" type="checkbox" value="Wytrawne" id="flexCheckDefault" onChange={handleWineTaste} checked={Boolean(wineTaste.length>0) ? null : false} />
                    <span class="font-weight-semibold text-dark ms-1">Wytrawne</span>
                  </div>
                  <div class="form-check mt-2 mb-0">
                    <input class="form-check-input" type="checkbox" value="Półwytrawne" id="flexCheckDefault" onChange={handleWineTaste} checked={Boolean(wineTaste.length>0) ? null : false} />
                    <span class="font-weight-semibold text-dark ms-1">Półwytrawne</span>
                  </div>
                  <div class="form-check mt-2 mb-0">
                    <input class="form-check-input" type="checkbox" value="Półsłodkie" id="flexCheckDefault" onChange={handleWineTaste} checked={Boolean(wineTaste.length>0) ? null : false} />
                    <span class="font-weight-semibold text-dark ms-1">Półsłodkie</span>
                  </div>
                  <div class="form-check mt-2 mb-0">
                    <input class="form-check-input" type="checkbox" value="Słodkie" id="flexCheckDefault" onChange={handleWineTaste} checked={Boolean(wineTaste.length>0) ? null : false} />
                    <span class="font-weight-semibold text-dark ms-1">Słodkie</span>
                  </div>
                </span>

              </div>
            </div>

            <div class="text-end">
                <div class="dropdown">
                <button type="button" className="btn btn-white btn-icon px-2 py-2 " data-bs-toggle="dropdown" aria-expanded="false" onClick={resetWineTaste}>
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


        <li class={`list-group-item d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3 ${Boolean(wineType.length>0) ? 'border-info' : null}`}>
            <div class="d-flex align-items-start">
              <div class="d-flex flex-column">
                <h6 class={`mb-0 text-sm ${Boolean(wineType.length>0) ? 'text-info' : null}`}>Rodzaj wina</h6>
                
                <span class="text-sm text-info">
                  <div class="form-check mt-2 mb-0">
                    <input class="form-check-input" type="checkbox" value="Spokojne" id="flexCheckDefault" onChange={handleWineType} checked={Boolean(wineType.length>0) ? null : false} />
                    <span class="font-weight-semibold text-dark ms-1">Spokojne</span>
                  </div>
                  <div class="form-check mt-2 mb-0">
                    <input class="form-check-input" type="checkbox" value="Musujące" id="flexCheckDefault" onChange={handleWineType} checked={Boolean(wineType.length>0) ? null : false} />
                    <span class="font-weight-semibold text-dark ms-1">Musujące</span>
                  </div>
                  <div class="form-check mt-2 mb-0">
                    <input class="form-check-input" type="checkbox" value="Grzane" id="flexCheckDefault" onChange={handleWineType} checked={Boolean(wineType.length>0) ? null : false} />
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
                <button type="button" className="btn btn-white btn-icon px-2 py-2 " data-bs-toggle="dropdown" aria-expanded="false" onClick={resetWineType}>
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



        <li class={`list-group-item d-flex mb-3 border-radius-md shadow-xs p-3 flex-column ${Boolean(wineCountries.length>0) ? 'border-info' : null}`}>
            <div class="d-flex align-items-start">
              <div class="d-flex flex-column mb-1">
                <h6 class={`mb-3 text-sm ${Boolean(wineCountries.length>0) ? 'text-info' : null}`}>Kraj pochodzenia</h6>


              </div>
            </div>
        <div>
        <Select
                        components={{ DropdownIndicator }}
                        isMulti="true"
                        name="colors"
                        options={flagOptions}
                        className="flex-grow-1 p-0 m-0 border-0 form-control"
                        classNamePrefix="select"
                        placeholder="Nie wybrano kraju"
                        noOptionsMessage={() => 'Nie ma takiego kraju'}
                        onChange={handleWineCountry}
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? '#1b89f7' : '#dde0e5',
                            borderRadius: "6px",
                            height: "100%",
                            width: "100%",
                            boxShadow: 'none',
                            fontSize: "14px",
                          }),
                        }}
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: '#eaeaea',
                            primary50: '#dadada',
                            
                          },
                        })}
                    />
          </div>
      </li>


        </ul>
      </div>





      <div class="col-xxl-2 col-md-4 col-sm-6 flex-grow-1 d-flex flex-col">
        <ul class="list-group d-flex row flex-row col-12">


        <li class={`list-group-item border d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3 ${Boolean(wineVol.max === 50 && wineVol.min === 0) ? null : 'border-info'}`}>
            <div class="d-flex align-items-start">
              <div class="d-flex flex-column mb-3">
                <h6 class={`mb-3 text-sm ${Boolean(wineVol.max === 50 && wineVol.min === 0) ? null : 'text-info'}`}>Zawartość alkoholu</h6>
                  {Boolean(filter.alcoholFree) ?
                  <div className="container d-flex">
                  <div className="slider" >
                  <div  className="slider__track" />
                  <div className="slider__range" />
                  <div className="slider__left-value"></div>
                  <div className="slider__right-value">0</div>
                  </div> </div> :
                  <MultiRangeSlider min={0} max={50} onChange={handleWineVol}/>}
  
                <div className="form-check form-switch ps-0 mt-4">

                  <input className="form-check-input ms-2" type="checkbox" id="flexSwitchCheckDefault3" onChange={handleAlcoholFree} checked={Boolean(filter.alcoholFree) ? true : false} />
                  <label className="font-weight-semibold text-dark ms-2" for="flexSwitchCheckDefault3">Bezalkoholowe</label>
                </div>
              </div>
            </div>

            <div class="text-end">
                <div class="dropdown">
                <button type="button" className="btn btn-white btn-icon px-2 py-2 " onClick={resetWineVol}>
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


        <li class={`list-group-item border flex-row d-flex justify-content-between mb-3 border-radius-md shadow-xs p-3 ${Boolean(winePrize.max || winePrize.min) ? 'border-info' : null}`}>
            <div class="d-flex align-items-start">
              <div class="d-flex flex-column">
                <h6 class={`mb-3 text-sm ${Boolean(winePrize.max || winePrize.min) ? 'text-info' : null}`}>Cena hurtowa</h6>
                
                <span class="text-sm text-info">
                <div className="input-group mb-3">
                <span class="input-group-text">Od</span>
            <input type="number" min="0" class="form-control" placeholder="0 zł" aria-label="From" value={filter.winePrize.min} onChange={handleWinePrize} id="min" />
            </div><div className="input-group">
<span class="input-group-text">Do</span>
<input type="number" class="form-control" placeholder="100 zł" aria-label="To" value={filter.winePrize.max} onChange={handleWinePrize} id="max" />

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
                <button type="button" className="btn btn-white btn-icon px-2 py-2 " onClick={resetWinePrize}>
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
