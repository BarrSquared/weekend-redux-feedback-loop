import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Page4Comments() {

    const dispatch = useDispatch();

    let [comment, setComment] = useState('');

    const submitComment = (event) => {
        event.preventDefault();
        console.log('Updating comment rating.', comment);
        if(comment.length >=0 && comment.length <= 500) {
            dispatch({
                type: 'SET_COMMENT',
                payload: comment
            });
            clearComment();
        } else {
            alert("Your comment must be less than 500 characters.");
            clearComment();
            return;
        }
    }

    const clearComment = () => {
        setComment('');
    }

    return(
        <section>
            <h3>4 of 4 pages</h3>
            <br />
            <h2>Any comments you want to leave?</h2>
            <h3>In the text box below enter a comment with up to 500 characters.</h3>
            <form onSubmit={submitComment} >
                <input
                    onChange={(event) => setComment(event.target.value)}
                    value={comment}
                    type="string"
                    placeholder="Enter comment."
                />
                <button type="submit">
                    Next
                </button>
            </form>
        </section>
    );
}

export default Page4Comments;