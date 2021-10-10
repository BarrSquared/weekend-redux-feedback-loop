import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Page3Supported() {

    const dispatch = useDispatch();
    const history = useHistory();

    let [support, setSupport] = useState('');

    const submitSupport = (event) => {
        event.preventDefault();
        console.log('Updating understanding rating.', support);
        if(support >=1 && support <= 5) {
            dispatch({
                type: 'SET_SUPPORT_RATING',
                payload: support
            });
            clearSupport();
            history.push('/page4Comments');
        } else {
            alert("You must enter a number between 1 and 5!");
            clearSupport();
            return;
        }
    }

    const clearSupport = () => {
        setSupport('');
    }

    return(
        <section>
            <h3>3 of 4 pages</h3>
            <br />
            <h2>How well are you being supported?</h2>
            <h3>On a scale from 1 to 5 rate how well you are being supported,</h3>
            <h3>with 1 indicating a lack of support and 5 indicating positive support.</h3>
            <form onSubmit={submitSupport} >
                <input
                    onChange={(event) => setSupport(event.target.value)}
                    value={support}
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


export default Page3Supported;