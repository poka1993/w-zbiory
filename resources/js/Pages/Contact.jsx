import { Link, useForm, Head } from '@inertiajs/inertia-react';
import Navigation from '@/Components/Navigation'
import Footer from '@/Components/Footer'
import NavButtons from '@/Components/NavButtons';
import React, { useState, useEffect, createRef } from 'react';
import InputError from '@/Components/InputError';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact(props) {
  const title = "Kontakt";
  const { data, setData, post, processing, errors, reset } = useForm({
    email: Boolean(props.auth.user) ? props.auth.user.email : "",
    message: "",
    subject: "",
    token: null
  }); 
  const { email, message, subject, token } = data;

  const [showFlash, setShowFlash] = useState(false);

  const handleCloseFlash = () => {
    setShowFlash(false);
  };

    function setToken(value) {
      setData({
        ...data,
        token: value
      });
    }

    const setEmail = (e) => {
      const { value } = e.target;
      setData({
        ...data,
        email: value
      });
    }

    const setSubject = (e) => {
      const { value } = e.target;
      setData({
        ...data,
        subject: value
      });
    }

    const setMessage = (e) => {
      const { value } = e.target;
      setData({
        ...data,
        message: value
      });
    }
    let captcha;
    const setCaptchaRef = (ref) => {
      if (ref) {
        return captcha = ref;
      }
   };
  
   const [showResetButton, setShowResetButton] = useState(true);

   const resetCaptcha = () => {
     // maybe set it till after is submitted
     captcha.reset();
     setShowResetButton(false);
   }

    const storeOpinion = () => {
      setShowResetButton(true);
      post('/contact', {
        params: data,
        preserveScroll: true,
        onSuccess: () => {
          setData({
            ...data,
            subject: "",
            message: "",
            token: null
          });
          setShowFlash("Twoja wiadomość została wysłana, dziękujemy za kontakt.");
        }
      });
    }



    return (
        <>
         
            <Head>
            <title>{title}</title>
            <meta head-key="description" name="description"
            content="Portal internetowy gromadzący najlepsze marki wina oraz opinie na ich temat. Zbiór winogronowych trunków, który pozwala skompletować listę ulubionych produktów." />
            </Head>

  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-auto d-flex flex-column min-vh-100">
  <Navigation props={props.auth.user} notifications={props.notifications} new_notifications={props.new_notifications} title={title}/> 
  <div className={`card border shadow-xs p-3 alert-card position-fixed d-flex w-95 flex-row ${Boolean(showFlash) ? null : "d-none" }`} >
          <div className='d-flex col-10 align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={`text-success bi bi-check-circle-fill me-2`} viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>
<p className="text-sm mb-0 text-gray">{showFlash}</p>
</div>
<div className="text-end col-2">
                <div className="dropdown">
                <button type="button" className="btn btn-white btn-icon px-2 mt-n1 mb-n1 me-n1 py-2 m-0 " onClick={handleCloseFlash} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </button>   

          </div>

        </div>
                  
                  </div>     
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
      <div className='d-flex'>
        <div className="w-100"> 
        <div className="row m-n3 m-sm-0 mt-sm-n7 mt-n8 align-items-center justify-content-center">
            <div className="col-11 d-sm-inline">
                <div className="card blur border border-white mb-4 shadow-xs d-flex flex-row row">         
                <div className="col d-flex flex-column">
          <div className="card card-plain mt-2">
            <div className="card-header pb-0 text-left bg-transparent mb-2">
              <h3 className="font-weight-black text-dark display-6 ms-3 mb-3">Kontakt</h3>
              <div className="text-sm mb-0 ms-3 me-3">
              <p className='text-sm h-100'>
                Jesteś zainteresowany współpracą z nami? Chciałbyś wykupić reklamę? A może potrzebujesz skontaktować się z administracją
                serwisu żeby poruszyć jakiś istotny temat związany z jego funkcjonowaniem?</p>
                <p className='text-sm h-100'>Jeżeli tak to zapraszamy do kontaktu mailowego wysyłajac wiadomość pod adres <a className='wine-name-link' href="mailto:kontakt@winozbiory.pl">kontakt@winozbiory.pl</a> lub
                wypełniając poniższy formularz:</p>
                <label>Adres email</label>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Wprowadź swój adres email"
                      value={data.email} id="email" name="email" onChange={setEmail} required/>
                    </div>
                <InputError message={errors.email} className="mt-2" />
                <label>Temat wiadomości</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Wprowadź temat wiadomości"
                      value={data.subject} id="subject" name="subject" onChange={setSubject} required/>
                    </div>
                <InputError message={errors.subject} className="mt-2" />
                <label>Treść wiadomości</label>
                <textarea className="form-control" id="message-text" rows="15" placeholder="Wprowadź treść wiadomości" value={data.message} onChange={setMessage} />
                <InputError message={errors.message} className="mt-2" />
              </div>
              <div className='mt-4 ms-3'>
              <div className='g-recaptcha mt-3'>
              <ReCAPTCHA
                ref={(r) => setCaptchaRef(r) }
                sitekey="6LfuRU0lAAAAAAxD94ml-82M1VgZtqlkpjbSxnyU"
                onChange={setToken}
              />
              </div>
              <div className='d-flex flex-row'>
              <InputError message={errors.token} className="mt-2 mb-sm-n2" />
              {Boolean(errors.token && showResetButton && !processing) ?
              <p className="text-sm mt-2 ms-1 font-weight-bold mb-sm-n2" onClick={() => resetCaptcha()} type="button">Zresetuj captcha.</p>
              : null}
              </div>
              </div>
              {Boolean(!processing) ?
               <button type="button" onClick={() => storeOpinion()} className="btn btn-sm btn-dark btn-icon d-flex mt-1 mt-sm-4 ms-3">
                  <span className="btn-inner--icon">
                    <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="d-block me-2">
                      <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                      </svg>
                    </span>
                  <span className="btn-inner--text text-nowrap" data-bs-toggle="modal" data-bs-target="#commentModal" data-toggle="commentModal" data-target="commentModal">Wyślij wiadomość</span>
                </button> : <p className='text-sm ms-3 mt-1 mt-sm-4'>Wysyłanie...</p>}
            </div>
          </div>
          </div>
           </div></div>
          </div>
        </div>
      </div>
      </div>
      

      
    <div className="container-fluid py-0 px-3">
    </div>
  <Footer />  

  </main>  
  <div>
</div>
      {/* </GuestLayout> */}
      </>
  );
  }
  