import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Page2Understanding() {

    const dispatch = useDispatch();
    const history = useHistory();

    let [understanding, setUnderstanding] = useState('');

    const submitUnderstanding = (event) => {
        event.preventDefault();
        console.log('Updating understanding rating.', understanding);
        if(understanding >=1 && understanding <= 5) {
            dispatch({
                type: 'SET_UNDERSTANDING_RATING',
                payload: understanding
            });
            clearUnderstanding();
            history.push('/Page3Supported');
        } else {
            alert("You must enter a number between 1 and 5!");
            clearUnderstanding();
            return;
        }
    }

    const clearUnderstanding = () => {
        setUnderstanding('');
    }

    return(
        <section>
            <h3>2 of 4 pages</h3>
            <br />
            <h2>How well are you understanding the content?</h2>
            <h3>On a scale from 1 to 5 rate how well you understand the content,</h3>
            <h3>with 1 indicating a lack of understanding and 5 indicating a positive comprehension.</h3>
            <form onSubmit={submitUnderstanding} >
                <input
                    onChange={(event) => setUnderstanding(event.target.value)}
                    value={understanding}
                    type="number"
                    placeholder="1-5"
                />
                <button type="submit">
                    Next
                </button>
            </form>
        </section>
    );
}

export default Page2Understanding;