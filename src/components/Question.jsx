import React from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/Store.js';
import { useEffect } from 'react';


const Question = () => {
    // console.log("hello");
    const { id } = useParams();
    // const [state, dispatch] = useContext(Context);
    const [doubt, setDoubt] = useState({});

    const fetchDoubt = async () => {
        const d = await fetch(`http://localhost:4000/doubts/${id}`);
        const res = await d.json();
        // console.log(res);
        setDoubt(res.doubt);
    }
    
    useEffect(() => {
        fetchDoubt();
    }, []);

    return (
        <div className="bg-white p-6 shadow-xl w-7/10 border-b border-gray-400">
            <div className="text-lg font-medium">
                <Link to={{ pathname: `/doubt/${id}` }} className="text-blue-600 hover:text-blue-400">
                    {doubt.title}
                </Link>
            </div>
            <div className="text-sm text-indigo-600 mt-2">
                <span className="bg-gray-200 px-2 py-1 rounded-full">tag1</span>
                <span className="bg-gray-200 px-2 py-1 rounded-full ml-1">tag2</span>
            </div>
            <div className="flex justify-between mt-4">
                <div className="flex items-center">
                    <div className="text-gray-600 text-sm mr-2">Votes: </div>
                    <div className="bg-gray-300 px-2 py-0 rounded-full">0</div>
                </div>
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon className="text-green-500" icon={faThumbsUp} />
                    <FontAwesomeIcon className="text-red-500 mt-2" icon={faThumbsDown} />
                </div>
            </div>
        </div>
    )
}

export default Question;