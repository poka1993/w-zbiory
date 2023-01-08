import React, {useState} from 'react'
// import Pagination from 'react-js-pagination'

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import PaginationComponent from '@/Components/PaginationComponent'
import { useForm, Head } from '@inertiajs/inertia-react'
import Post from '@/Components/Post'

const Index = ({auth, posts, prevPhrase, prevCategory, ses}) => {

    const {data, setData, post, processing, reset, errors } = useForm({
        title: '',
        body: ''
    })

    const [phrase, setPhrase] = useState(Boolean(prevPhrase) ? prevPhrase : "");
    const [category, setCategory] = useState(Boolean(prevCategory) ? prevCategory : "");
    
    const submit = (e) => {
        e.preventDefault();
        post(route('posts.store'), {onSuccess: () => reset() });
    }

    // const search = (e) => {
    //     e.preventDefault();
    //     console.log(phrase, category);
    //     route('posts.destroy', post.id)
    //     console.log(lol)
    // }

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title='Posts' />
            <div className='max-w-2x1 mx-auto p4 sm:p-6 lg:p-8'>
                <form onSubmit={submit}>
                    <input
                        value={data.title}
                        onChange={e => setData('title', e.target.value)}
                        type="text"
                        placeholder='Title'
                        autoFocus
                        className="mb-3 block w-full border-gray-300 focus:border-indigo-300"                        
                    />
                    <InputError message={errors.title} className="mt-2" />
                    <textarea
                        value={data.body}
                        onChange={e => setData('body', e.target.value)}
                        type="text"
                        placeholder='Body'
                        className='block w-full border-gray-300 focus:border-indigo-300'
                    >
                    </textarea>
                    <InputError message={errors.body} className="mt-2" />
                    <PrimaryButton className={!processing ? "mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500" : "hidden"} >
                        Create
                    </PrimaryButton>
                </form>
                <form className="form-row d-flex mt-2">
                    <label className='mt-3' htmlFor="phrase">Szukana fraza:</label>
                    <div className="col d-flex">
                        <input type="text" className="col-2 m-2" name="phrase" placeholder="" value={phrase} onChange={e => setPhrase(e.target.value)} />
                        <select className='custom-select m-2 col-2' name="category" value={category} onChange={e => setCategory(e.target.value)}>
                            <option value="all">Wszystko</option>
                            <option value="games">Gry</option>
                            <option value="movies">Filmy</option>
                        </select>
                        <button href={route('posts.index', {phrase, category})} method='get' className='mb-2.5 mt-2.5 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150'>Wyszukaj</button>
                    </div>
                </form>
                <div className='mt-6 bg-white shadow-sm rounded-lg divide-y'>
                    {
                        posts.data.map( post => <Post key={post.id} post={post} /> )
                    }
                </div>
                <PaginationComponent links={posts.links} phrase={phrase} category={category} />
            </div>
        </AuthenticatedLayout>
    )
}

export default Index