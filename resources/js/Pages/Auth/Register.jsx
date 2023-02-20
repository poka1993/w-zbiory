import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Navigation from '@/Components/Navigation'
import Footer from '@/Components/Footer'
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from 'moment';
import 'moment/dist/locale/pl';

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
        locality: ''
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



    return (
        <>
              <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
  <Navigation />
 
            <Head title="Rejestracja konta" />

            <div className='ms-lg-6 me-lg-6 ms-3 me-3 text-align-center border-radius-md'>
      <div className="col-12">
          <div className="card shadow-xs border mb-1 pb-3 nav-grapes pt-5 pb-6 bg-cover" style={{backgroundImage: `url('storage/img/header-blue2.jpg')`}}> 
      </div>
        <div className='d-flex'>
            <div class="w-100"> 
            <div class="row mt-sm-n7 mt-n8 align-items-center justify-content-center">
                <div class="col-10 d-sm-inline">
                    <div class="card blur border border-white mb-4 shadow-xs d-flex flex-row">         
                    <div class="col d-flex flex-column ">
              <div class="card card-plain ms-3 me-3 mt-2">
                <div class="card-header pb-0 text-left bg-transparent">
                  <h3 class="font-weight-black text-dark display-6">Załóż konto</h3>
                  <p class="mb-0">Jeśli chcesz do nas dołączyć i móc korzystać ze wszystkich funkcji serwisu, zarejestruj się wypełniając formularz.</p>
                </div>
                <form onSubmit={submit}>
                <div class="card-body d-flex flex-column flex-md-row">
                <div class="col-12 col-md-6 col-lg-4 d-sm-inline pe-md-2">
                    <label>Nick</label>
                    <div class="mb-3">
                      <input type="text" class="form-control" placeholder="Wprowadź swój nick" 
                      value={data.nick} id="nick" name="nick" isFocused={true} onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.nick} className="mt-2" />
                    <label>Adres email</label>
                    <div class="mb-3">
                      <input type="email" class="form-control" placeholder="Wprowadź swój email"
                      value={data.email} id="email" name="email" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.email} className="mt-2" />
                    <label>Hasło</label>
                    <div class="mb-3">
                      <input type="password" class="form-control" placeholder="Wprowadź hasło"
                      value={data.password} id="password" name="password" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                    <label>Potwierdź hasło</label>
                    <div class="mb-3">
                    <input type="password" class="form-control" placeholder="Potwierdź hasło"
                      value={data.password_confirmationd} id="password_confirmation" name="password_confirmation" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.password_confirmation} className="mt-2" />
                    <div class="d-none d-md-block">
                    <div class="form-check form-check-info text-left mb-0">
                    <input class="form-check-input" type="checkbox" id="rules" name="rules" checked={data.rules} value={data.rules} onChange={onHandleChange} />
                      <label class="font-weight-normal text-dark mb-0" for="flexCheckDefault">
                        Akceptuję <a href="javascript:;" class="text-dark font-weight-bold">regulamin serwisu</a>.
                      </label>
                      <InputError message={errors.rules} className="mt-2" />
                    </div>
                    <div class="text-center">
                      <button disabled={processing} type="button" onClick={submit} class="btn btn-dark w-100 mt-4 mb-3">Zarejestruj konto</button>
                    </div>
                    <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-0 text-xs mx-auto">
                    Posiadasz już konto?
                    <a href="" class="text-dark font-weight-bold ms-1" data-bs-toggle="modal" data-bs-target="#loginModal" data-toggle="loginModal" data-target="loginModal">Zaloguj się.</a>
                  </p>
                </div>
                </div>

                </div>
                <div class="col-12 col-md-6 col-lg-4 d-sm-inline ps-md-3">
                <label>Imię</label>
                    <div class="mb-3">
                      <input type="text" class="form-control" placeholder="Wprowadź swoje imię"
                      value={data.name} id="name" name="name" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.name} className="mt-2" />
                <label>Płeć</label>
                <div class="mb-3">
                <div class="btn-group d-flex align-items-end mb-0 ms-sm-auto " role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="sex" id="btnradiosex1" autocomplete="off" value='Kobieta' onClick={onHandleChange} />
                    <label class="btn btn-white px-1 mb-0 " for="btnradiosex1">Kobieta</label>
                    <input type="radio" class="btn-check" name="sex" id="btnradiosex2" autocomplete="off" value='Mężczyzna' onClick={onHandleChange} />
                    <label class="btn btn-white px-1 mb-0" for="btnradiosex2">Mężczyzna</label>
                  </div>                
                </div>
                <InputError message={errors.sex} className="mt-2" />
                <label>Data urodzenia </label>
                    <div class="mb-3">
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
                    <div class="mb-3">
                      <input type="text" class="form-control" placeholder="Podaj skąd jesteś"
                      value={data.locality} id="locality" name="locality" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.locality} className="mt-2" />
                    <div class="d-block d-md-none">
                    <div class="form-check form-check-info text-left mb-0">
                    <input class="form-check-input" type="checkbox" id="rules" name="rules" checked={data.rules} value={data.rules} onChange={onHandleChange} />
                      <label class="font-weight-normal text-dark mb-0" for="flexCheckDefault">
                        Akceptuję <a href="javascript:;" class="text-dark font-weight-bold">regulamin serwisu</a>.
                      </label>
                      <InputError message={errors.rules} className="mt-2" />
                    </div>
                    <div class="text-center">
                      <button disabled={processing} type="button" onClick={submit} class="btn btn-dark w-100 mt-4 mb-3">Zarejestruj konto</button>
                    </div>
                    <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p class="mb-0 text-xs mx-auto">
                    Posiadasz już konto?
                    <a href="" class="text-dark font-weight-bold ms-1" data-bs-toggle="modal" data-bs-target="#loginModal" data-toggle="loginModal" data-target="loginModal">Zaloguj się.</a>
                  </p>
                </div>
                </div>

                </div>
                
                <div class="col-4 d-none d-lg-inline ps-3 text-center">
                <label>Możesz dołączyć rownież do naszej grupy na Facebooku!</label>

              <div class="card-header pb-3 p-3">           
                <img src="storage/img/facebook-wine.png" alt="facebook" class="mt-4 w-lg-80 w-xxl-60" />
                </div>

                  </div>

                </div>
                </form>               

              </div>
            </div>
            {/* <div class="col-md-8">

            <label>Potwierdź hasło</label>
                    <div class="mb-3">
            <Datetime
                        timeFormat={false}
                        locale="pl"
                        dateFormat={"DD MMMM YYYY"}
                        inputProps={{ placeholder: "Data urodzenia" }}
                        isValidDate={ valid }
                      />
          </div>

                    </div> */}
                </div></div>
            </div>
          </div>
        </div>

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form> */}
        </div></div>



                  {/* <!-- End Navbar --> */}
      <div className="container-fluid py-4 px-3">

<Footer />  
</div>
</main>  
        {/* </GuestLayout> */}
        </>
    );
}
