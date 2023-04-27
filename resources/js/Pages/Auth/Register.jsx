import { useEffect, useState } from 'react';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Navigation from '@/Components/Navigation'
import Footer from '@/Components/Footer'
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from 'moment';
import 'moment/dist/locale/pl';
import NavButtons from '@/Components/NavButtons';
import ReCAPTCHA from 'react-google-recaptcha';

moment.locale('pl');


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nick: '',
        email: '',
        password: '',
        password_confirmation: '',
        rules: false,
        name: '',
        sex: '',
        birthday: '',
        locality: '',
        token: null
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    var yesterday = moment().subtract( 1, 'day' );
    var valid = function( current ){
        return current.isBefore( yesterday );
    };

    
    const setBirthday = (date) => {
      // This function gives you the moment object of date selected. 
      const convertDate = moment(date._d).format('YYYY-MM-DD');
      setData({...data, birthday: convertDate});
    }

    function setToken(value) {
      setData({
        ...data,
        token: value
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


    const title = "Rejestracja konta";
    return (
        <>
              <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg overflow-auto d-flex flex-column min-vh-100">
  <Navigation title={title}/>   
  <div className='flex-grow-1'>
            <Head title={title} />

            <div className='ms-lg-6 me-lg-6 ms-3 me-3 text-align-center border-radius-md'>
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
            <div className="w-100"> 
            <div className="row mt-sm-n7 mt-n8 align-items-center justify-content-center">
                <div className="col-12 col-sm-10 d-sm-inline">
                    <div className="card blur border border-white mb-4 shadow-xs d-flex flex-row">         
                    <div className="col d-flex flex-column ">
              <div className="card card-plain ms-sm-3 me-sm-3 mt-2">
                <div className="card-header pb-0 text-left bg-transparent">
                  <h3 className="font-weight-black text-dark display-6">Załóż konto</h3>
                  <p className="mb-0">Jeśli chcesz do nas dołączyć i móc korzystać ze wszystkich funkcji serwisu, zarejestruj się wypełniając formularz.</p>
                </div>
                <form onSubmit={submit}>
                <div className="card-body d-flex flex-column flex-md-row">
                <div className="col-12 col-md-6 col-lg-4 d-sm-inline pe-md-2">
                    <label>Nick</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Wprowadź swój nick" 
                      value={data.nick} id="nick" name="nick" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.nick} className="mt-2" />
                    <label>Adres email</label>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Wprowadź swój email"
                      value={data.email} id="email" name="email" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.email} className="mt-2" />
                    <label>Hasło</label>
                    <div className="mb-3">
                      <input type="password" className="form-control" placeholder="Wprowadź hasło"
                      value={data.password} id="password" name="password" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                    <label>Potwierdź hasło</label>
                    <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Potwierdź hasło"
                      value={data.password_confirmationd} id="password_confirmation" name="password_confirmation" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.password_confirmation} className="mt-2" />


                </div>
                <div className="col-12 col-md-6 col-lg-4 d-sm-inline ps-md-3">
                <label>Imię</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Wprowadź swoje imię"
                      value={data.name} id="name" name="name" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.name} className="mt-2" />
                <label>Płeć</label>
                <div className="mb-3">
                <div className="btn-group d-flex align-items-end mb-0 ms-sm-auto " role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="sex" id="btnradiosex1" autoComplete="off" value='Kobieta' onClick={onHandleChange} />
                    <label className="btn btn-white px-1 mb-0" htmlFor="btnradiosex1">Kobieta</label>
                    <input type="radio" className="btn-check" name="sex" id="btnradiosex2" autoComplete="off" value='Mężczyzna' onClick={onHandleChange} />
                    <label className="btn btn-white px-1 mb-0" htmlFor="btnradiosex2">Mężczyzna</label>
                  </div>                
                </div>
                <InputError message={errors.sex} className="mt-2" />
                <label>Data urodzenia </label>
                    <div className="mb-3">
            <Datetime
                        timeFormat={false}
                        locale="pl"
                        disabled
                        value={data.birthday}
                        dateFormat={"DD MMMM YYYY"}
                        inputProps={{ placeholder: "Podaj datę urodzenia"}}
                        isValidDate={ valid }
                        onChange={setBirthday}
                        id="birthday"
                        name="birthday"
                        required
                      />                      
          </div>
          <InputError message={errors.birthday} className="mt-2" />
                    <label>Miejscowość</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Podaj skąd jesteś"
                      value={data.locality} id="locality" name="locality" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.locality} className="mt-2" />


                    


                </div>
                
                <div className="col-4 d-none d-lg-inline ps-3 text-center">
                <label>Możesz dołączyć rownież do naszej grupy na Facebooku!</label>

              <div className="card-header pb-3 p-3">           
                <img src="storage/img/facebook-wine.png" alt="facebook" className="mt-4 w-lg-80 w-xxl-60" />
                </div>

                  </div>
                </div>
                  <div className='d-flex ms-3 me-3 mt-n3 mt-sm-n4'>
                  <div className='col-12 col-md-6 col-lg-4 d-sm-inline pe-md-2'>
                    <div className="form-check form-check-info text-left mb-0 " >
                    <input className="form-check-input" type="checkbox" id="rules" name="rules" checked={data.rules} value={data.rules} onChange={onHandleChange} />
                      <label className="font-weight-normal text-dark mb-0" htmlFor="flexCheckDefault">
                        Akceptuję <Link href='/rules' className="text-dark font-weight-bold">regulamin serwisu</Link>.
                      </label>
                    </div>
                    <InputError message={errors.rules} className="mt-2" />
                    <div className='mt-4'>
                      <div className='g-recaptcha mt-3'>
                      <ReCAPTCHA
                        ref={(r) => setCaptchaRef(r) }
                        sitekey="6LfuRU0lAAAAAAxD94ml-82M1VgZtqlkpjbSxnyU"
                        onChange={setToken}
                      />
                      </div>
                      <div className='d-flex flex-row'>
                      <InputError message={errors.token} className="mt-2 mb-sm-n2" />
                      {Boolean(errors.token == "Nieudana weryfikacja captcha." && showResetButton && !processing) ?
                      <p className="text-sm mt-2 ms-1 font-weight-bold mb-sm-n2" onClick={() => resetCaptcha()} type="button">Zresetuj captcha.</p>
                      : null}
                      </div>
                      </div>
                    <div className="text-center">
                      <button disabled={processing} type="button" onClick={submit} className="btn btn-dark w-100 mt-1 mt-sm-3 mb-3">Zarejestruj konto</button>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-0 text-xs mx-auto">
                    Posiadasz już konto?
                    <a href="" className="text-dark font-weight-bold ms-1" data-bs-toggle="modal" data-bs-target="#loginModal" data-toggle="loginModal" data-target="loginModal">Zaloguj się.</a>
                  </p>
                </div></div></div>
                
                </form>               

              </div>
            </div>
                </div></div>
            </div>
          </div>
        </div>

          
        </div></div>

</div>
<Footer />  

</main>  

        </>
    );
}
