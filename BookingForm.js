import React from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
        props.SubmitForm(e)
    }
    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' reuired/>
                        </div>
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={
                                        availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor='book-guests'>Number Of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor='book-occasion'>Occassion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOcassion
                                (e.target.value)}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                    <option>Engagement</option>
                                </select>
                        </div>
                        <div classname='btnReceive'>
                            <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
                        </div>
                    </fieldset>
                </form>

            </section>
        </header>
    )
}

export default BookingForm;
