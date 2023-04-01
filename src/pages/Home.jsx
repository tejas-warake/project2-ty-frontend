import React from 'react'
import QuestionList from '../components/QuestionList.jsx';
import { useEffect, useContext } from 'react';
import { Context } from '../store/Store.js';

const Home = () => {
    const [state, dispatch] = useContext(Context);
    
    useEffect(() => {
        fetchDoubts();
    }, [])

    const fetchDoubts = async () => {
        const res = await fetch('http://localhost:4000/');
        const data = await res.json();
        const doubts = data.doubts;
        dispatch({type: 'FETCH_DOUBTS', data});
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
                {
                    state.doubts.map((doubt) => {
                        return <QuestionList key={doubt.id} element={doubt} />;
                    })
                }
        </div>
    )
}

export default Home;