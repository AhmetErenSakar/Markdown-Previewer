import { useState } from 'react'

import { useSelector } from 'react-redux';

import { updatePre } from '../redux/preSlice';
import { useDispatch } from "react-redux";

function Content() {
    const items = useSelector(state => state.pre.items[0].title)

    const [one, setOne] = useState('this is user input')
    const dispatch = useDispatch();

    function handleChange(value) {
        setOne(value);
        dispatch(updatePre(value))
    }

    return (
        <textarea className={"content"} onChange={(e) => handleChange(e.target.value)} value={items} rows={30} cols={60} />
    )
}

export default Content