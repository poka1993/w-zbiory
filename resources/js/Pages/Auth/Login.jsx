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
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Wprowadź swój email"
                        id="email" name="email" value={data.email} isFocused={true} onChange={onHandleChange} />
                    </div>
                    <InputError message={errors.email} className="mt-2" />
                    <label>Hasło</label>
                    <div class="mb-3">
                      <input type="password" class="form-control" placeholder="Wprowadź hasło" 
                       id="password" name="password" value={data.password} onChange={onHandleChange} />
                    </div>
                    <InputError message={errors.password} className="mt-2" />
                    <div class="form-check form-check-info text-left mb-0 ms-2">
                      <input class="form-check-input" type="checkbox" id="remember" name="remember" value={data.remember} onChange={onHandleChange} />
                      <label class="font-weight-normal text-dark mb-0" for="remember">
                        <a class="text-dark font-weight-bold">Zapamiętaj mnie</a>
                      </label>
                    </div>
                    <div class="text-center">
                            <button disabled={processing} type="button" onClick={submit} data-bs-dismiss={props ? "modal" : null} class="btn btn-dark w-100 mt-4 mb-3">Zaloguj się</button>
                    </div>
                    <div class="card-footer text-center pt-0 px-lg-2 px-1">
                    {/* <p class="mb-0 text-xs mx-auto mb-2">
                    Zapomniałeś hasła?
                    <Link href={route('password.request')} class="text-dark font-weight-bold ms-1">Zresetuj je.</Link>
                  </p> */}
                  <p class="mb-n2 text-xs mx-auto">
                    Nie posiadasz jeszcze konta?
                    <Link href={route('register')} class="text-dark font-weight-bold ms-1">Zarejestruj się.</Link>
                  </p>
                </div>
{/* 



                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
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
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ml-4" processing={processing}>
                        Log in
                    </PrimaryButton> */}





                </div>
            </form>
        </>
    );
}
