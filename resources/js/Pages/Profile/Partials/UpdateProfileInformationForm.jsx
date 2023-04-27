import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { useState } from 'react';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from 'moment';
import 'moment/dist/locale/pl';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className, handleClose }) {
    const user = usePage().props.auth.user;

    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        nick: user.nick,
        sex: user.sex,
        birthday: user.birthday,
        locality: user.locality,
        description: user.description
    });

    const [showFlash, setShowFlash] = useState(false);
    const handleCloseFlash = () => setShowFlash(false);
    
        const onHandleChange = (event) => {
            setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
        };







    

    const submit = (e) => {
        e.preventDefault();
        setShowFlash(false);

        // patch(route('profile.update')); Inertia wymaga post do obslugi image, a tam tylko zmieniamy method na patch (tj bylo wczesniej)

        post(route('profile.update', {_method: 'patch'}), {onSuccess: () => (
            setShowFlash('Twoje dane zostały zaktualizowane.')
            )
        });
    };

    const setClose = () => {
        handleClose();
    }

    const deleteAvatar = (e) => {
        e.preventDefault();
        post(route('avatar.delete', {_method: 'delete'}), {onSuccess: () => (
            setData({...data, avatar: null}),
            setShowFlash('Twój avatar został usunięty.')
            )
        });
    }

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
                <div className={`card mt-1 w-lg-75 border shadow-xs p-3 alert-card position-fixed d-flex flex-row ${Boolean(showFlash) ? null : "d-none" }`} >
          <div className='d-flex col-10 align-items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="text-success bi bi-check-circle-fill me-2" viewBox="0 0 16 16">
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

        <div className='d-flex flex-column col-12'>
            <header className='col-12 d-flex flex-row'>
                <p className="mt-2 text-sm text-gray-600 ms-auto me-auto">
                    Tutaj możesz zaktualizować swoje dane profilowe oraz adres e-mail.
                </p>
            </header>







            <div className="col-12 d-flex flex-column flex-lg-row ps-2 pe-2">
            <div className="col-12 col-lg-6 d-sm-inline pe-md-2">
                    <label>Nick</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Wprowadź swój nick" 
                      value={data.nick} id="nick" name="nick" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.nick} className="mt-2" />

                <label>Imię</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Wprowadź swoje imię"
                      value={data.name} id="name" name="name" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.name} className="mt-2" />

                    <label>Adres email</label>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Wprowadź swój email"
                      value={data.email} id="email" name="email" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.email} className="mt-2" />

                    <label>Płeć</label>
                <div className="mb-3">
                <div className="btn-group d-flex align-items-end mb-0 ms-sm-auto " role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" className="btn-check" name="sex" id="btnradiosex1" autoComplete="off" value='Kobieta' onChange={onHandleChange} checked={data.sex == "Kobieta"} />
                    <label className="btn btn-white px-1 mb-0" htmlFor="btnradiosex1">Kobieta</label>
                    <input type="radio" className="btn-check" name="sex" id="btnradiosex2" autoComplete="off" value='Mężczyzna' onChange={onHandleChange} checked={data.sex == "Mężczyzna"} />
                    <label className="btn btn-white px-1 mb-0" htmlFor="btnradiosex2">Mężczyzna</label>
                  </div>                
                </div>
                <InputError message={errors.sex} className="mt-2" />

          <label>Miejscowość</label>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Podaj skąd jesteś"
                      value={data.locality} id="locality" name="locality" onChange={onHandleChange} required/>
                    </div>
                    <InputError message={errors.locality} className="mt-2" />

            </div>
            <div className="col-12 col-lg-6 d-sm-inline pe-md-2">

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

                    <label>Avatar (opcjonalnie)
                    </label>
                    {Boolean(user.avatar) ?
                    <div><button onClick={deleteAvatar} className="btn btn-dark w-100 mt-0">Usuń Avatar</button></div>
                    :
                    <div className="mb-3">
                    <input type="file" className="form-control" id="avatar" name="avatar" onChange={(e) => setData('avatar', e.target.files[0])}/>
                    </div>

                }
                <InputError message={errors.avatar} className="mt-2" />

                <label>Kilka zdań o sobie (opcjonalnie)</label>
                <textarea className="form-control" rows="12" id="description" name="description" placeholder="Nie wypełniono." value={data.description} onChange={onHandleChange}></textarea>
                <InputError message={errors.description} className="mt-2" />





           </div>

                </div>
                <div className="col-12 col-lg-6 d-sm-inline pe-md-2">
           <div className="text-center d-flex gap-2 mb-n3 ">
                        <button disabled={processing} type="button" onClick={submit} className="btn btn-dark w-100 mt-2">Zapisz zmiany</button>
                        <button disabled={processing} type="button" onClick={setClose} className="btn btn-dark w-100 mt-2 ">Anuluj</button>
                    </div>
            </div>

        </div>
        </>
    );
}
