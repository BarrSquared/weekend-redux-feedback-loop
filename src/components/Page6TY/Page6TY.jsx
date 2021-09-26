import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Page6TY() {
    
    const leaveNewFeedback = (event) => {
        
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