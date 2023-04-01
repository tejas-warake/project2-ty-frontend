import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const QuestionList = ({ element }) => {
    const { _id, title } = element;
    // console.log(_id);
    // console.log(title);
    return (
        <div className="bg-white p-6 shadow-xl w-full border-b border-gray-400" key={_id}>
            <div className="text-lg font-medium">
                <Link to={{pathname: `/doubt/${_id}`}} className="text-blue-600 hover:text-blue-400">
                    {element.title}
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

export default QuestionList;