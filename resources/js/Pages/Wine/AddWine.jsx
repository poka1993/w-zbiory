import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Filter from '@/Components/Filter'
import Navigation from '@/Components/Navigation'
import Statistics from '@/Components/Statistics'
import WinePage from '@/Components/Wines/WinePage'
import Footer from '@/Components/Footer'
import { Head } from '@inertiajs/inertia-react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Select, { components } from 'react-select';
import {flags} from '@/Components/Flags';
import {dish} from '@/Components/Dish';
import React, {useState} from 'react';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import InputError from '@/Components/InputError';
import NavButtons from '@/Components/NavButtons';

export default function AddWine(props) {
  const user = usePage().props.auth.user;

  const { data, setData, post, processing, errors, reset } = useForm({
    name: null,
    color: null,
    taste: null,
    type: null,
    image: null,
    country: null,
    vol: null,
    pprize: null,
    dishes: [],
    description: null,
    author: user.id
  });

console.log(errors);

  const handleWineName = (e) => {
    setData({
      ...data,
      name: e.target.value
    });
  }

  const handleWineColor = (e) => {
    setData({
      ...data,
      color: e.target.value
    });
  }

  const handleWineTaste = (e) => {
    setData({
      ...data,
      taste: e.target.value
    });
  }

  const handleWineType = (e) => {
    setData({
      ...data,
      type: e.target.value
    });
  }

  const handleWineImage = (e) => {
    console.log(e.target.files)
    setData({
      ...data,
      image: e.target.files[0]
    });
  }

  const handleWineCountry = (e) => {
    setData({
      ...data,
      country: e.value
    });
  }

  const handleWineVol = (e) => {
    const { value, id } = e.target;
    let t = value;
    let fixed = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 2)) : t;
    if (fixed > 50) {
      setData({
        ...data,
        vol: 50.0
        });
    } else if (fixed < 0) {
      setData({
      ...data,
      vol: ""
      });
    } else {
        setData({
          ...data,
          vol: fixed
        });
    }
  };

  const handleWinePrize = (e) => {
    const { value, id } = e.target;
    let t = value;
    let fixed = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
    if (fixed < 0) {
      setData({
      ...data,
      prize: ""
      });
    } else {
        setData({
          ...data,
          prize: fixed
        });
    }
  };

  const [selectedDishOptions, setSelectedDishOptions] = useState([]);
  const handleWineDishes = (e) => {
    setSelectedDishOptions(e);
    let dishesArray = [];
    e.forEach(dish => {dishesArray.push(dish.value)});
    setData({
      ...data,
      dishes: dishesArray
    });
  }

  const handleWineDescription= (e) => {
    setData({
      ...data,
      description: e.target.value
    });
  }

  const submit = (e) => {
    e.preventDefault();
    post(route('wine.store'));
  };





  const flagsData = flags;
  const dishData = dish;

  
  let flagOptions = [];
  const flagsDiv = flagsData.map(flag => ( { value: flag.label, label: <div className='d-flex slide align-items-center gap-2'>{flag.icon}{flag.label}</div>  } )).sort((a,b) =>a.value.localeCompare(b.value))
  for (let i=0; i<flagsDiv.length; i++) {
  flagOptions.push(flagsDiv[i]);
  }

  let dishOptions = [];
  const dishDiv = dishData.map(dish => ( { value: dish.label, label: <div className='d-flex align-items-center gap-2' ><img src={`storage/food/`+dish.icon+`-black.png`}
  onMouseMove={e => (e.currentTarget.src = `storage/food/`+dish.icon+`.png`)}
  onMouseOut={e => (e.currentTarget.src = `storage/food/`+dish.icon+`-black.png`)}
  height="20" width="20" alt={dish.label} />{dish.label}</div>  } )).sort((a,b) =>a.value.localeCompare(b.value))
  for (let i=0; i<dishDiv.length; i++) {
  dishOptions.push(dishDiv[i]);
  }
  

  // [
  //   { value: 'chocolate', label: <div className='d-flex align-items-center gap-2'>{flags[0].value}{flags[0].label}</div>  },
  //   { value: 'Stany Zjednoczone', label: <div className='d-flex align-items-center gap-2'><Us /> Stany Zjednoczone</div> },
  //   { value: 'chocolate2', label: <div className='d-flex align-items-center gap-2'><Af /> Afganistan </div> },
  //   flagsDiv[0],
  //   flagsDiv[1],
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]

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
          <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          <Navigation props={props.auth.user}/>

        <Head title="Dodaj wino" />

        <div className='ms-3 me-3 ms-lg-6 me-lg-6 text-align-center border-radius-md'>
        <div className="col-12">
        <div className="card shadow-xs border mb-1 pb-3 nav-grapes pt-5 pb-6 z-1">
          <div className='nav-grapes-img'></div>        
        </div>
        <div className='d-flex row'>
        <div className='w-20'> 
        <NavButtons />
        </div>

    </div>
    <div className='d-flex'>
        <div class="w-100"> 
        <div class="row m-n3 m-sm-0 mt-sm-n7 mt-n8 align-items-center justify-content-center">
            <div class="col-11 d-sm-inline">
                <div class="card blur border border-white mb-4 shadow-xs d-flex flex-row row">         
                <div class="col d-flex flex-column">
          <div class="card card-plain mt-2">
            <div class="card-header pb-0 text-left bg-transparent">
              <h3 class="font-weight-black text-dark display-6">Dodaj wino</h3>
              <p class="mb-0">Jeżeli brakuje wina, które zasługuje na znalezienie się w naszej bazie prosimy o je dodanie za pomocą formularza!</p>
            </div>
            <form onSubmit={submit}>
            <div class="card-body d-flex flex-column row flex-md-row ps-0 pe-0 ps-sm-4 pe-sm-4">
            <div class="col-12 col-lg-6 col-xl-4 d-sm-inline ps-sm-2 pe-sm-2">
            <label>Nazwa wina</label>
                <div className="d-flex">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Podaj nazwę</span>
                      <input type="text" class="form-control" placeholder="Nie podano nazwy wina" aria-label="Name" aria-describedby="name" value={data.name} onChange={handleWineName} />
                  </div>
                </div>
                <InputError message={errors.name} className="mt-2" />

                <label>Kolor wina</label>
                <div class="mb-3">
                <div class="btn-group d-flex align-items-end mb-0 ms-sm-auto " role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="wineColor" id="btnradiocolor1" autocomplete="off" value='Czerwone' onClick={handleWineColor} />
                    <label class="btn btn-white px-1 mb-0 " for="btnradiocolor1">Czerwone</label>
                    <input type="radio" class="btn-check" name="wineColor" id="btnradiocolor2" autocomplete="off" value='Różowe' onClick={handleWineColor} />
                    <label class="btn btn-white px-1 mb-0" for="btnradiocolor2">Różowe</label>
                    <input type="radio" class="btn-check" name="wineColor" id="btnradiocolor3" autocomplete="off" value='Białe' onClick={handleWineColor} />
                    <label class="btn btn-white px-1 mb-0" for="btnradiocolor3">Białe</label>
                  </div>                
                </div>
                <InputError message={errors.color} className="mt-2" />

                <label>Smak wina</label>
                <div class="mb-3">
                  <div class="btn-group d-flex align-items-end mb-0 ms-sm-auto" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check " name="btnradiotaste" id="btnradiotaste1" autocomplete="off" value='Wytrawne' onClick={handleWineTaste} />
                    <label class="btn btn-white px-1 mb-0" for="btnradiotaste1">
                      <span className='d-none d-sm-block'>Wytrawne</span><span className='d-sm-none'>Wytr.</span></label>
                    <input type="radio" class="btn-check" name="btnradiotaste" id="btnradiotaste2" autocomplete="off" value='Półwytrawne' onClick={handleWineTaste} />
                    <label class="btn btn-white px-1 mb-0" for="btnradiotaste2">
                      <span className='d-none d-sm-block'>Półwytrawne</span><span className='d-sm-none'>Półwytr.</span></label>
                    <input type="radio" class="btn-check" name="btnradiotaste" id="btnradiotaste3" autocomplete="off" value='Półsłodkie' onClick={handleWineTaste} />
                    <label class="btn btn-white px-1 mb-0" for="btnradiotaste3">
                      <span className='d-none d-sm-block'>Półsłodkie</span><span className='d-sm-none'>Półsłod.</span></label>
                    <input type="radio" class="btn-check" name="btnradiotaste" id="btnradiotaste4" autocomplete="off" value='Słodkie' onClick={handleWineTaste} />
                    <label class="btn btn-white px-1 mb-0" for="btnradiotaste4">
                      <span className='d-none d-sm-block'>Słodkie</span><span className='d-sm-none'>Słod.</span></label>
                  </div>                
                </div>
                <InputError message={errors.taste} className="mt-2" />

                <label>Rodzaj wina</label>
                <div class="mb-3">
                <div class="btn-group d-flex align-items-end mb-0 ms-sm-auto" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check " name="btnradiotype" id="btnradiotype1" autocomplete="off" value='Spokojne' onClick={handleWineType} />
                    <label class="btn btn-white px-1 mb-0 " for="btnradiotype1">Spokojne</label>
                    <input type="radio" class="btn-check" name="btnradiotype" id="btnradiotype2" autocomplete="off" value='Musujące' onClick={handleWineType} />
                    <label class="btn btn-white px-1 mb-0" for="btnradiotype2">Musujące</label>
                    <input type="radio" class="btn-check" name="btnradiotype" id="btnradiotype3" autocomplete="off" value='Grzane' onClick={handleWineType} />
                    <label class="btn btn-white px-1 mb-0" for="btnradiotype3">Grzane</label>
                  </div>               
                </div>
                <InputError message={errors.type} className="mt-2" />
            </div>
            






            <div class="col-12 col-lg-6 col-xl-4 d-sm-inline ps-sm-2 pe-sm-2">
                <label>Zdjęcie wina</label>
                <div class="mb-3">
                  <input type="file" class="form-control" placeholder="Wprowadź nazwę wina" aria-label="Login" aria-describedby="login-addon" onChange={handleWineImage}/>
                </div>
                <InputError message={errors.image} className="mt-2" />

                <label>Kraj pochodzenia</label>
                <div class="mb-3">

                <div class="input-group mb-3 flex-nowrap">
                <span class="input-group-text border-end-0" id="basic-addon1"><span className='d-none d-sm-block'>Wybierz kraj</span><span className='d-sm-none'>Kraj</span></span>  
                    <Select
                        components={{ DropdownIndicator }}
                        // isMulti="true"
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
                            borderRadius: "0 6px 6px 0",
                            height: "100%",
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
                </div></div>
                <InputError message={errors.country} className="mt-2" />

                <label>Zawartość alkoholu</label>
                <div className="d-flex">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">%</span>
                      <input type="number" class="form-control" id="alcohol" placeholder="Nie podano zawartości alkoholu" aria-label="Alcohol" aria-describedby="alcohol"
                      value={data.vol} onChange={handleWineVol} />
                  </div>
                </div>
                <InputError message={errors.vol} className="mt-2" />

                <label>Cena hurtowa</label>
                <div className="d-flex">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">zł</span>
                      <input type="number" class="form-control" id="prize" placeholder="Nie podano ceny wina" aria-label="Prize" aria-describedby="prize"
                      value={data.prize} onChange={handleWinePrize} />
                  </div>
                </div>
                <InputError message={errors.prize} className="mt-2" />
            </div>









            <div class="col-12 col-xl-4 d-sm-inline ps-sm-2 pe-sm-2">
                <label>Z czym najlepiej podawać (opcjonalnie max. 4)</label>
                <div className="d-flex">
                <div class="input-group mb-3 flex-nowrap">
                <span class="input-group-text border-end-0" id="basic-addon1"><span className='d-none d-sm-block'>Wybierz danie</span><span className='d-sm-none'>Danie</span></span>
                    <Select
                        components={{ DropdownIndicator }}
                        isMulti
                        name="colors"
                        options={(selectedDishOptions.length >= 4) ? [{value: "", label: <span className='d-flex justify-content-center'>Można wybrać max. 4 dania</span>}, ...dishOptions] : dishOptions}
                        value={selectedDishOptions}
                        className="flex-grow-1 p-0 m-0 border-0 form-control"
                        classNamePrefix="select"
                        placeholder="Nie wybrano dań"
                        // onChange={(e) => setSelectedDishOptions(e)}
                        onChange={(e) => handleWineDishes(e)}
                        noOptionsMessage={() => 'Nie ma takiego dania'}
                        isOptionDisabled={() => selectedDishOptions.length >= 4}
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? '#1b89f7' : '#dde0e5',
                            borderRadius: "0 6px 6px 0",
                            height: "100%",
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
</div>
<InputError message={errors.dishes} className="mt-2" />

{/* <label>Z czym najlepiej podawać</label>
                <div className="d-flex">
                <div class="input-group mb-3 flex-nowrap">
  <span class="input-group-text d-none d-sm-block" id="basic-addon1">Wybierz danie</span>  
                    <label class="btn btn-white px-3 mb-0 flex-grow-1 font-weight-normal text-dark text-start text-nowrap">Nie wybrano dań</label>
                    <label class="btn btn-white px-2 px-xxl-3 mb-0 ps-2 border-start-0">

  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
              </label>
</div>
</div> */}


{/* <label>Najlepiej podawać razem</label>
                <div className="d-flex">
                <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Wybierz danie</span>  


                    <OverlayTrigger placement="top" overlay={<Tooltip>Wołowina</Tooltip>}>
              <div class="px-3 mb-0 shadow-xxs bg-white text-center border border-radius-md d-flex align-items-center justify-content-center flex-grow-1">
                <img src="storage/food/cow-black.png" height="30" width="30" alt="wine_image" />
              </div>
              </OverlayTrigger>
              <OverlayTrigger placement="top" overlay={<Tooltip>Wołowina</Tooltip>}>
              <div class="px-3 mb-0 shadow-xxs bg-white text-center border border-radius-md d-flex align-items-center justify-content-center flex-grow-1">
                <img src="storage/food/cow-black.png" height="30" width="30" alt="wine_image" />
              </div>
              </OverlayTrigger>                    <OverlayTrigger placement="top" overlay={<Tooltip>Wołowina</Tooltip>}>
              <div class="px-3 mb-0 shadow-xxs bg-white text-center border border-radius-md d-flex align-items-center justify-content-center flex-grow-1">
                <img src="storage/food/cow-black.png" height="30" width="30" alt="wine_image" />
              </div>
              </OverlayTrigger>                    <OverlayTrigger placement="top" overlay={<Tooltip>Wołowina</Tooltip>}>
              <div class="px-3 mb-0 shadow-xxs bg-white text-center border border-radius-md d-flex align-items-center justify-content-center flex-grow-1">
                <img src="storage/food/cow-black.png" height="30" width="30" alt="wine_image" />
              </div>
              </OverlayTrigger>

                    <label class="btn btn-white px-3 mb-0 ps-2">

  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="ms-2 bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
              </label>
</div>
</div> */}
                <div className="d-flex flex-column mb-3" >
                <label>Opis wina (opcjonalnie)</label>
                <textarea class="form-control" id="message-text" rows="12" placeholder="Nie dodano żadnego opisu" value={data.description} onChange={handleWineDescription}></textarea>
                </div>
                <InputError message={errors.description} className="mt-2" />

            </div>
            <div class="row d-flex me-auto ">
                <div class="text-center d-flex flex-wrap">
                <button type="button" class="btn btn-sm btn-dark btn-icon d-flex mb-2 ms-sm-n1" onClick={submit}>
                          <span class="btn-inner--icon">
                            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="d-block me-2">
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                            </svg>
                          </span>
                          <span class="btn-inner--text text-nowrap" data-bs-toggle="modal" data-bs-target="#commentModal" data-toggle="commentModal" data-target="commentModal">Dodaj wino</span>
                        </button>
                        <Link className="border-0 bg-transparent" href={(route('dashboard'))} method="get" as="button">
                        <button type="button" class="btn btn-sm btn-dark btn-icon d-flex mb-2 ms-3">
                          <span class="btn-inner--icon">
                          </span>

              
                          
                          <span class="btn-inner--text text-nowrap" data-bs-toggle="modal" data-bs-target="#commentModal" data-toggle="commentModal" data-target="commentModal">Anuluj</span>
                        </button>
                        </Link>
                </div>

            </div>




            </div>
            </form>               

          </div>
          
        </div>

         </div></div>
         
        </div>
        
      </div>

    </div>
    
    </div>
    
    </div>
    
  <div className="container-fluid py-4 px-3">

<Footer />  
</div>
</main>  
    {/* </GuestLayout> */}
    </>
);
}
