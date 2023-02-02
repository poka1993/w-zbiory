import React, {useState} from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import Dropdown from '@/Components/Dropdown'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm, usePage, InertiaLink } from '@inertiajs/inertia-react'

dayjs.extend(relativeTime);

const Post = ({post}) => {

    const {auth} = usePage().props;
    // console.log(auth)
    const [editing, setEditing] = useState(false);
    const {data, setData, patch, processing, reset, errors} = useForm({
        title: post.title,
        body: post.body
    })

    // console.log(post)

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        patch(route('posts.update', post.id), {onSuccess: () => setEditing(false) });
    }

    return (
        <div className='p-5 flex space-x-2'>
            <div className='flex-1'>
                <div className="flex justify-between items-center">
                    <div>
                        <span className='text-gray-800'>{post.user.name}</span>
                        {/* <small className='ml-2 text-sm text-gray-600'>{new Date(post.created_at).toLocaleString()}</small> */}
                        <small className='ml-2 text-sm text-gray-600'>{dayjs(post.created_at).fromNow()}</small>
                        {post.created_at !== post.updated_at && <small className='text-sm text-gray-600'>&middot; edited</small>}
                    </div>
                    { post.user.id === auth.user.id &&
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                <svg className="text-gray-400 group-hover:text-gray-300 mr-4 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button className='block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700' onClick={() => setEditing(true)}>
                                    Edit
                                </button>
                                <Dropdown.Link as="button" href={route('posts.destroy', post.id)} method='delete'>
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    }
                </div>
                { editing ?
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

                            <div className='space-x-2'>
                                <PrimaryButton className='mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500'>Save</PrimaryButton>
                                <button className='mt-4 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150' onClick={()=>setEditing(false) && reset()}>Cancel</button>
                            </div>
                        </form>
                    : (
                        <>
                            <p className='mt-4 text-lg text-black'>{post.title}</p>
                            <p className='mt-4 text-black'>{post.body}</p>
                            <InertiaLink href={`/post/${post.id}`}><PrimaryButton className='mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500'>Szczegóły</PrimaryButton></InertiaLink>
                        </>                    
                    )}
            </div>
        </div>
    )
}

export default Post