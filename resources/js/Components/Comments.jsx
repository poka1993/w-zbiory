import dayjs from 'dayjs'
import PaginationComponent from './PaginationComponent';
import { Link } from '@inertiajs/inertia-react';

export default function Comments({ comments }) {
    return (
        <>
                {Boolean(comments.data.length) ?
<>

                        <div className="p-3 pt-0">


                
                        {comments.data.map(comment => 
                       <li key={comment.id} className="list-group-item border-0 d-flex align-items-stretch px-0 mb-0">
                  <div className='d-flex flex-column text-center'>
                    <div className="avatar avatar-xl rounded-circle position-relative border border-gray-100 border-4 shadow-sm mb-0">
                    <Link type="button" className='border-0 bg-transparent p-0' href={`/profile-${comment.user.id}-${comment.user.nick.replace(" ", "-")}`} method="get" as="button">
                      <img src={Boolean(comment.user.avatar) ? `storage/${comment.user.avatar}` : `storage/images/user-${Boolean(comment.user.sex == 'Kobieta') ? 'female' : 'male'}-icon.png`} alt="profile_image" className="w-100 h-100" />
                    </Link>
                  </div>  
              </div>
  
  
              <div className="card border shadow-xs ms-3 flex-grow-1">
                <div className="card-header bg-gray-100 p-0 mb-0">
  
              {/* <div className="d-flex ms-2 w-100 bg-secondary badge badge-sm border border-secondary text-secondary bg-secondary align-items-start flex-column mb-2"> */}
  
              <table className="table align-items-center mb-0 overflow-hidden">
              <thead>
                      <tr className='d-flex flex-sm-row flex-column col-12'>
                        <th className="text-start text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 border-bottom-0 border-bottom-sm ms-n3 ms-sm-0"><h4 className="font-weight-semibold text-lg">
                            <Link type="button" className='border-0 bg-transparent wine-name-link text-wrap' href={`/profile-${comment.user.id}-${comment.user.nick.replace(" ", "-")}`} method="get" as="button">
                              {comment.user.nick}
                            </Link>
                            </h4> </th>
  
                        <th className="text-end text-secondary text-xs font-weight-semibold opacity-7 col-12 col-sm-6 mt-n4 mt-sm-1">{dayjs(comment.created_at).format('DD.MM.YYYY, HH:mm')  }</th>
                      </tr>
                    </thead>
  </table>
  
  
               
                    </div>
                    
                    
                    <p className="text-sm mt-2 mb-1 ms-3 b-0 me-3 mb-2">{comment.comment}</p>
                    </div>
  
                  </li>
)}

 
  
                  
                  <hr />
                    <PaginationComponent comments={comments} links={comments.links} />
                </div>
                </> : <p className='text-center text-xs text-secondary mt-2 opacity-75'>Ten użytkownik nie posiada jeszcze żadnych komentarzy.</p>}
            </>
    );
}
