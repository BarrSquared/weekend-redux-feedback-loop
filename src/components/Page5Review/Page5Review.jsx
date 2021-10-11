import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Page5Review() {
    const reviewToAdd = useSelector(reduxStore => reduxStore.reviewToAdd);
    const history = useHistory();

    const sendToServer = () => {
        axios({
            method: 'POST',
            url: '/prime_feedback',
            data: reviewToAdd,
        }).then(response => {
            history.pushState('/Page6TY');
        })
    }

    // const dispatch = useDispatch();

    return(
        <section>
            <p>{JSON.stringify(reviewToAdd)}</p>
            <h2>Review your feedback!</h2>
            <p>Feelings: {reviewToAdd.feeling}</p>
            <p>Understanding: {reviewToAdd.understanding}</p>
            <p>Support: {reviewToAdd.support}</p>
            <p>Comments: {reviewToAdd.comments}</p>
            <button onClick={sendToServer}>SUBMIT</button>
        </section>
    );
}

export default Page5Review;