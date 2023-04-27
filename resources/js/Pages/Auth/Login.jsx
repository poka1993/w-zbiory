import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ props, status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };


    return (
        <>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div className='ms-3 me-3'>
                    
                    <label>Adres email</label>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Wprowadź swój email"
                        id="email" name="email" value={data.email} isfocused="true" onChange={onHandleChange} />
                    </div>
                    <InputError message={errors.email} className="mt-2" />
                    <label>Hasło</label>
                    <div className="mb-3">
                      <input type="password" className="form-control" placeholder="Wprowadź hasło" 
                       id="password" name="password" value={data.password} onChange={onHandleChange} />
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                    <div className="form-check form-check-info text-left mb-0 ms-2">
                      <input className="form-check-input" type="checkbox" id="remember" name="remember" value={data.remember} onChange={onHandleChange} />
                      <label className="font-weight-normal text-dark mb-0" htmlFor="remember">
                        <a className="text-dark font-weight-bold">Zapamiętaj mnie</a>
                      </label>
                    </div>
                    <div className="text-center">
                            <button disabled={processing} type="button" onClick={submit} data-bs-dismiss={props ? "modal" : null} className="btn btn-dark w-100 mt-4 mb-3">Zaloguj się</button>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                  <p className="mb-n2 text-xs mx-auto">
                    Nie posiadasz jeszcze konta?
                    <Link href={route('register')} className="text-dark font-weight-bold ms-1">Zarejestruj się.</Link>
                  </p>
                </div>

                </div>
            </form>
        </>
    );
}
