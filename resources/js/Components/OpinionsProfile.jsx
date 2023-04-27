import dayjs from 'dayjs'
import PaginationComponent from './PaginationComponent';
import { Link } from '@inertiajs/inertia-react';

export default function OpinionsProfile({ opinions }) {

    return (
        <>

<div className="d-flex flex-row text-wrap bg-gray-100 badge badge-sm border-top border-bottom rounded-0 text-secondary align-items-start justify-content-center mb-3">
<span className="col-8 text-start text-secondary text-xs text-nowrap font-weight-semibold opacity-7 p-2 mb-0 ps-3 ps-sm-8">Ocena / Wino</span>
<span className="col-4 text-end text-secondary text-xs text-nowrap font-weight-semibold opacity-7 p-2 mb-0 pe-5">Data Dodania</span>
</div>                  {Boolean(opinions.data.length) ?
<>

                        <div className="p-3 pt-0">


                
                        {opinions.data.map(opinion => 
                       <li key={opinion.id} className="list-group-item border-0 d-flex align-items-stretch px-0 mb-3">
                  <div className='d-flex flex-column text-center'>
                  <div className="mini-wine text-center text-white mx-auto d-flex align-items-center justify-content-center">
                    <Link type="button" className='border-0 bg-transparent' href={`/wine-${opinion.wine.id}-${opinion.wine.name.replace(" ", "-")}`} method="get" as="button">
                      <img src={`storage/${opinion.wine.image}`} alt="wine_image" />
                    </Link>
                  </div>
  
              <span className="comment-rate-avatar badge badge-sm border border-success text-success bg-success border-radius-sm mt-2">
                            <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill me-1" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
                            {Boolean(opinion.rate) ? opinion.rate : "Brak"}</div>
                            </span>
  
              </div>
  
  
              <div className="card border shadow-xs ms-3 flex-grow-1">
                <div className="card-header bg-gray-100 p-0 mb-0">
  
              {/* <div className="d-flex ms-2 w-100 bg-secondary badge badge-sm border border-secondary text-secondary bg-secondary align-items-start flex-column mb-2"> */}
  
              <table className="table align-items-center mb-0 overflow-hidden">
              <thead>
                      <tr className='d-flex flex-sm-row flex-column col-12'>
                        <th className="text-start text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 border-bottom-0 border-bottom-sm ms-n3 ms-sm-0"><h4 className="font-weight-semibold text-lg">
                          <span className="comment-rate-container badge badge-sm border border-success text-success bg-success border-radius-sm me-2">
                            <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill me-1" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
                            {Boolean(opinion.rate) ? opinion.rate : "Brak"}</div>
                            </span>
                            <Link type="button" className='border-0 bg-transparent wine-name-link text-wrap' href={`/wine-${opinion.wine.id}-${opinion.wine.name.replace(" ", "-")}`} method="get" as="button">
                              {opinion.wine.name}
                            </Link>
                            </h4> </th>
  
                        <th className="text-end text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 mt-n4 mt-sm-1">{dayjs(opinion.created_at).format('DD.MM.YYYY, HH:mm')  }</th>
                      </tr>
                    </thead>
  </table>
  
  
               
                    </div>
                    
                    
                    <p className="text-sm mt-2 mb-1 ms-3 b-0 me-3 mb-2">{opinion.opinion}</p>
                    </div>
  
                  </li>
)}


  
  
                  
                  <hr />
                    <PaginationComponent opinions={opinions} links={opinions.links} />
                </div>
                </> : <p className='text-center text-xs text-secondary mt-2 mb-4 opacity-75'>Ten użytkownik nie dodał jeszcze żadnych opinii.</p>}
            </>
    );
}
