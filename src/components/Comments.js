import React, {useState, useEffect} from 'react';
import SingleComment from "./SingleComment";
import {commentCreate, commentsLoad} from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import uniqid from 'uniqid'

const Comments = (props) => {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();
    const comments = useSelector(state => {
        const {commentsReducer} = state;
        return commentsReducer.comments;
    })

    const handleInput = (event) => {
        setTextComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
        setTextComment('');
    }

    useEffect(() => {
        dispatch(commentsLoad())
    },[]);

    return (
        <div className='card-comments'>
            <form onSubmit={handleSubmit} className='comments-item-create'>
                <input
                    type='text'
                    placeholder='push Enter to add your comment'
                    value={textComment}
                    onChange={handleInput}/>
                <input type='submit' hidden/>
            </form>
            {!!comments.length && comments.map(res => <SingleComment key={res.id} data={res}/>)}
        </div>
    );
};

export default Comments;