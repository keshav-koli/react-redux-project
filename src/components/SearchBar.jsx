import { useState } from "react";
import { setQuery } from "../redux/features/searchSlice"
import { useDispatch } from "react-redux";
const SearchBar = () => {

    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(setQuery(text))
        setText('');
    }

    return (
        <form onSubmit={submitForm} className='flex  bg-(--c1) gap-5 py-10 px-10'>
            <input placeholder='Enter text' value={text} onChange={e => setText(e.target.value)} className='w-full border-2 px-6 py-3 text-xl rounded outline-none' />
            <button className='active:scale-95 cursor-pointer border-2 px-6 py-3 text-xl rounded outline-none'>Search</button>
        </form>
    )
}

export default SearchBar