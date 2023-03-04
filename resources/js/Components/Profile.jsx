import { Link } from '@inertiajs/inertia-react';
import Wines from '@/Components/Wines/Wines';
import AddComment from '@/Components/AddComment';
import Opinions from '@/Components/Opinions';
import UsersList from '@/Components/UsersList'
import React, { useState } from 'react';
import NavButtons from './NavButtons';

export default function Profile({}) {
  const [selectedList, setSelectedList] = useState("opinions");
  const [renderedList, setRenderedList] = useState(<ul class="list-group"><Opinions /></ul>);
  const [renderedHeader, setRenderedHeader] = useState("Wystawionych opinii: 42");

  function renderList(id) {
    switch (id) {
      case "opinions":
      setRenderedList(      <div class="col-12"><div class="card border shadow-xs h-100 overflow-hidden border-top-0">
      <ul class="list-group"><Opinions /></ul></div></div>);
      setRenderedHeader("Wystawionych opinii: 42");
      break;
      case "wines":
      setRenderedList(<Wines />);
      setRenderedHeader("Ulubionych win: 35");
      break;
      case "friends":
      setRenderedList(        
      <div class="col-12"><div class="card border shadow-xs mb-4 overflow-hidden">
      <UsersList />
      </div></div>);
      setRenderedHeader("Liczba znajomych: 18");
      break;
    }
  };

    return (
      <>
     <AddComment />
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
    <div class="w-95"> 
    
    {/* container */}

      <div class="card card-body py-2 bg-transparent shadow-none">
        <div class="row">
          <div class="col-auto">
            <div class="avatar avatar-2xl rounded-circle position-relative mt-n7 border border-gray-100 border-4 shadow-sm">
              <img src="storage/img/team-2.jpg" alt="profile_image" class="w-100" />
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h3 class="mb-0 font-weight-bold">
                Noah Mclaren
              </h3>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0 mx-auto mt-3 text-sm-end">
          <button type="button" class="btn btn-sm btn-dark btn-icon d-flex ms-sm-auto me-n4">
                    <span class="btn-inner--icon me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
                    </span>
                    <span class="btn-inner--text text-nowrap">Zaproś do znajomych</span>
                  </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

    <div className="container-fluid px-3">
      <div className='row'>
      <div class="col-12 col-lg-4 mb-4">
            <div class="card border shadow-xs h-100">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-md-8 col-9">
                    <h6 class="mb-0 font-weight-semibold text-lg">Profile information</h6>
                    <p class="text-sm mb-1">Edit the information about you.</p>
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
              <div class="card-body p-3">
                <p class="text-sm mb-4">
                  Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                </p>
                <ul class="list-group">
                  <li class="list-group-item border-0 ps-0 text-dark font-weight-semibold pt-0 pb-1 text-sm"><span class="text-secondary">First Name:</span> &nbsp; Noah</li>
                  <li class="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span class="text-secondary">Last Name:</span> &nbsp; Mclaren</li>
                  <li class="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span class="text-secondary">Mobile:</span> &nbsp; +(44) 123 1234 123</li>
                  <li class="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span class="text-secondary">Function:</span> &nbsp; Manager - Organization</li>
                  <li class="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm"><span class="text-secondary">Location:</span> &nbsp; USA</li>
                  <li class="list-group-item border-0 ps-0 text-dark font-weight-semibold pb-1 text-sm">
                    <span class="text-secondary">Social:</span> &nbsp;
                    <a class="btn btn-link text-dark mb-0 ps-1 pe-1 py-0" href="javascript:;">
                      <i class="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a class="btn btn-link text-dark mb-0 ps-1 pe-1 py-0" href="javascript:;">
                      <i class="fab fa-github fa-lg"></i>
                    </a>
                    <a class="btn btn-link text-dark mb-0 ps-1 pe-1 py-0" href="javascript:;">
                      <i class="fab fa-slack fa-lg"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          <div class="col-12 col-lg-8 mb-4">
            <div class="card border shadow-xs h-100">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-sm-8 col-12">
                    <h6 class="mb-0 font-weight-semibold text-lg">Komentarze (7)</h6>
                    <p class="text-sm mb-1">Możesz podzielić się komentarzem na temat tego użytkownika.</p>
                  </div>
                  <div class="col-sm-4 mt-2 mt-sm-0 col-12 mb-n2">
                    <button type="button" class="btn btn-sm btn-dark btn-icon d-flex ms-sm-auto">
                    <span class="btn-inner--icon">
                      <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="d-block me-2">
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </span>
                    <span class="btn-inner--text text-nowrap" data-bs-toggle="modal" data-bs-target="#commentModal" data-toggle="commentModal" data-target="commentModal">Dodaj komentarz</span>
                  </button>
                  </div>
                </div>
              </div>




              <div class="card-body p-3 pt-0">   
              <hr />                                 
              <ul class="list-group">

                <li class="list-group-item border-0 d-flex align-items-center px-0 mb-1">                            
                
                <div className='d-flex flex-column text-center'>
                  <div class="avatar avatar-xl rounded-circle position-relative border border-gray-100 border-4 shadow-sm">
              <img src="storage/img/team-3.jpg" alt="profile_image" class="w-100" />
            </div>

            </div>
            <div class="card border shadow-xs ms-3 flex-grow-1">
              <div class="card-header bg-gray-100 p-0 mb-0">

            <table class="table align-items-center mb-0 overflow-hidden">
            <thead>
                    <tr className='d-flex flex-sm-row flex-column col-12'>
                      <th class="text-start text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 border-bottom-0 border-bottom-sm ms-n1 ms-sm-0"><h4 class="font-weight-semibold text-lg">
                      Noah Mclaren</h4> </th>

                      <th class="text-end text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 mt-n4 mt-sm-1">25.01.2023, 21:53</th>
                    </tr>
                  </thead>
                  </table>            
                  </div>                
                  <p class="text-sm mt-2 mb-1 ms-3 b-0 me-3 mb-2">Spoko babka, zna się na winie i umie sporo wypić.</p>
                  </div>
                </li>

                <li class="list-group-item border-0 d-flex align-items-center px-0 mb-1">                            
                
                <div className='d-flex flex-column text-center'>
                  <div class="avatar avatar-xl rounded-circle position-relative border border-gray-100 border-4 shadow-sm">
              <img src="storage/img/team-1.jpg" alt="profile_image" class="w-100" />
            </div>

            </div>
            <div class="card border shadow-xs ms-3 flex-grow-1">
              <div class="card-header bg-gray-100 p-0 mb-0">

            <table class="table align-items-center mb-0 overflow-hidden">
            <thead>
                    <tr className='d-flex flex-sm-row flex-column col-12'>
                      <th class="text-start text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 border-bottom-0 border-bottom-sm ms-n1 ms-sm-0"><h4 class="font-weight-semibold text-lg">
                      Noah Mclaren</h4> </th>

                      <th class="text-end text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 mt-n4 mt-sm-1">25.01.2023, 21:53</th>
                    </tr>
                  </thead>
                  </table>            
                  </div>                
                  <p class="text-sm mt-2 mb-1 ms-3 b-0 me-3 mb-2">Spoko babka, zna się na winie i umie sporo wypić.</p>
                  </div>
                </li>

                <li class="list-group-item border-0 d-flex align-items-center px-0 mb-1">                            
                
                <div className='d-flex flex-column text-center'>
                  <div class="avatar avatar-xl rounded-circle position-relative border border-gray-100 border-4 shadow-sm">
              <img src="storage/img/team-5.jpg" alt="profile_image" class="w-100" />
            </div>

            </div>
            <div class="card border shadow-xs ms-3 flex-grow-1">
              <div class="card-header bg-gray-100 p-0 mb-0">

            <table class="table align-items-center mb-0 overflow-hidden">
            <thead>
                    <tr className='d-flex flex-sm-row flex-column col-12'>
                      <th class="text-start text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 border-bottom-0 border-bottom-sm ms-n1 ms-sm-0"><h4 class="font-weight-semibold text-lg">
                      Noah Mclaren</h4> </th>

                      <th class="text-end text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 mt-n4 mt-sm-1">25.01.2023, 21:53</th>
                    </tr>
                  </thead>
                  </table>            
                  </div>                
                  <p class="text-sm mt-2 mb-1 ms-3 b-0 me-3 mb-2">Spoko babka, zna się na winie i umie sporo wypić.</p>
                  </div>
                </li>

                <li class="list-group-item border-0 d-flex align-items-center px-0 mb-1">                            
                
                <div className='d-flex flex-column text-center'>
                  <div class="avatar avatar-xl rounded-circle position-relative border border-gray-100 border-4 shadow-sm">
              <img src="storage/img/team-4.jpg" alt="profile_image" class="w-100" />
            </div>

            </div>
            <div class="card border shadow-xs ms-3 flex-grow-1">
              <div class="card-header bg-gray-100 p-0 mb-0">

            <table class="table align-items-center mb-0 overflow-hidden">
            <thead>
                    <tr className='d-flex flex-sm-row flex-column col-12'>
                      <th class="text-start text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 border-bottom-0 border-bottom-sm ms-n1 ms-sm-0"><h4 class="font-weight-semibold text-lg">
                      Noah Mclaren</h4> </th>

                      <th class="text-end text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 mt-n4 mt-sm-1">25.01.2023, 21:53</th>
                    </tr>
                  </thead>
                  </table>            
                  </div>                
                  <p class="text-sm mt-2 mb-1 ms-3 b-0 me-3 mb-2">Spoko babka, zna się na winie i umie sporo wypić.</p>
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
        </div>

        <div class="col-12">
        <div class="d-lg-flex align-items-center mt-4 mb-4">
          <div class="flex-grow mb-md-0 mb-4">
            <h5 class="font-weight-semibold mb-1 ms-4">{renderedHeader}</h5>
            <p class="text-sm mb-0 ms-4">Jeśli chcesz śledzić poczynania tego użytkownika na stronie, zaproś go do znajomych.</p>
          </div>
          <div class="btn-group d-flex align-items-end mb-0 me-4 mt-2 ms-4 ms-sm-auto" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" class="btn-check" name="listOptions" id="opinions" autocomplete="off" onChange={(e) => renderList(e.target.id) + setSelectedList(e.target.id)} checked={selectedList=="opinions"} />
                  <label class="btn btn-white px-3 mb-0 " for="opinions">Wystawione opinie</label>
                  <input type="radio" class="btn-check" name="listOptions" id="wines" autocomplete="off" onChange={(e) => renderList(e.target.id) + setSelectedList(e.target.id)} checked={selectedList=="wines"}/>
                  <label class="btn btn-white px-3 mb-0" for="wines">Ulubione wina</label>
                  <input type="radio" class="btn-check" name="listOptions" id="friends" autocomplete="off" onChange={(e) => renderList(e.target.id) + setSelectedList(e.target.id)} checked={selectedList=="friends"}/>
                  <label class="btn btn-white px-3 mb-0" for="friends">Lista znajomych</label>
            </div>

        </div>
      </div>
      <hr />
        <div className='mb-n4'>
          {renderedList}
        {/* <ul class="list-group"><Opinions /></ul>
        <div><Wines /></div> */}
        </div>

      

        </div>
      </>
    );
}
