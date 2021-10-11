import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Page6TY() {
    const history = useHistory();

    const leaveNewFeedback = (event) => {
        history.push('/');
        // console.log('In page 6, clicking Leave New Feedback button');
    }

    return(
        <section>
            <h2>Thank you!</h2>
            <form onSubmit={leaveNewFeedback} >
                <button type="submit">
                    Leave New Feedback
                </button>
            </form>
        </section>
    );
}

export default Page6TY;