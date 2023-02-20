import { Link } from '@inertiajs/inertia-react';
import { Rating } from 'react-simple-star-rating';
import React, {useState, useEffect} from 'react';

export default function AddOpinion({}) {
  const { width } = useWindowDimensions();
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)
    return (
    <>
<div class="modal fade" id="opinionModal" tabindex="-1" aria-labelledby="exampleOpinionLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">

   <div class="modal-dialog modal-xl">
    <div class="modal-content">
    <div class="card border shadow-xs h-100 d-flex">
              <div class="card-header pb-0 p-3">
                <div class="row">
                  <div class="col-md-8 col-9">
                    <h6 class="mb-0 font-weight-semibold text-lg">Dodaj opinię</h6>
                  </div>
                  <div class="col-md-4 col-3 text-end">
                    <button type="button" class="btn btn-white btn-icon px-2 py-2" data-bs-dismiss="modal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body col-9 col-sm-12 p-3 pt-0 d-flex flex-column">
              <label>Twoja ocena</label>
              <div class="bg-secondary pb-2 me-auto badge badge-sm border border-secondary text-secondary bg-secondary align-items-start flex-column justify-content-center flex-wrap">
              <div className='mb-0 text-sm text-secondary w-100 text-wrap'>
                    <p class="mb-0 text-sm text-secondary h-5 w-100 text-wrap flex-basis">                          
                    <Rating
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        iconsCount={10}
        ratingValue={2}
        transition
        size={(width>325) ? 22 : 17.5}
        tooltipStyle
        className={"d-flex w-100 "}
        fillColor={"#55a6f8"}
        /* Available Props */
      />
                          </p>
                          </div>   
                  </div>  
              <label className='mt-2'>Treść opinii</label>
                    <div class="mb-3">
                    <textarea class="form-control w-100" id="message-text"></textarea>
                        <div className='d-flex flex-wrap gap-3'>
                          <button type="button" class="btn btn-sm btn-dark btn-icon d-flex mt-3 mb-n3">
                          <span class="btn-inner--icon">
                            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="d-block me-2">
                              <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                            </svg>
                          </span>
                          <span class="btn-inner--text text-nowrap" data-bs-toggle="modal" data-bs-target="#commentModal" data-toggle="commentModal" data-target="commentModal">Dodaj opinię</span>
                        </button>
                        <button type="button" class="btn btn-sm btn-dark btn-icon d-flex mt-3 mb-n3">
                          <span class="btn-inner--icon">
                          </span>
                          <span class="btn-inner--text text-nowrap" data-bs-toggle="modal" data-bs-target="#commentModal" data-toggle="commentModal" data-target="commentModal">Anuluj</span>
                        </button>
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
