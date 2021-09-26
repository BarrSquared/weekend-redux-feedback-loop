import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

function Page1Feeling() {

    const dispatch = useDispatch();
    // const history = useHistory();

    let [feeling, setFeeling] = useState('');

    const submitFeeling = (event) => {
        event.preventDefault();
        console.log('Updating feeling rating.', feeling);
        if (feeling >= 1 && feeling <= 5) {
            dispatch({
                type: 'SET_FEELING_RATING',
                payload: feeling
            });
            clearFeeling();
            // history.push('/Page2Understanding')
        } else {
            alert("You must enter a number between 1 and 5!");
            clearFeeling();
            return;
        }
    }

    const clearFeeling = () => {
        setFeeling('');
    }


    return (
        <section>
            <h3>1 of 4 pages</h3>
            <br />
            <h2>How are you feeling today?</h2>
            <h3>On a scale from 1 to 5 rate how you are feeling today,</h3>
            <h3>with 1 indicating mostly negative and 5 indicating mostly positive.</h3>
            <form onSubmit={submitFeeling} >
                <input
                    onChange={(event) => setFeeling(event.target.value)}
                    value={feeling}
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

export default Page1Feeling;