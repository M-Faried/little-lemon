import { useState } from 'react';

const availableTimes = [
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
];

const Form = ({ data, onReserve }) => {
    const [fName, setFName] = useState(data.firstName);
    const [lName, setLName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);
    const [tel, setTel] = useState(data.phone);
    const [guests, setGuests] = useState(data.noOfGuests ? data.noOfGuests : 1);
    const [occasion, setOccasion] = useState(data.occasion);
    const [comments, setComments] = useState(data.comments);
    const [preferences, setPreferences] = useState(data.preferences);
    const [date, setDate] = useState(data.date);
    const [time, setTime] = useState(data.time);

    const onSubmit = (e) => {
        e.preventDefault();
        onReserve({
            firstName: fName,
            lastName: lName,
            email,
            phone: tel,
            noOfGuests: guests,
            occasion,
            preferences,
            comments,
            date,
            time,
        })
    }

    return (
        <form className="reservation-form" onSubmit={onSubmit}>

            {/* First Name */}
            <div>
                <label htmlFor="fName">First Name</label> <br></br>
                <input
                    type="text"
                    id="fName"
                    placeholder="First Name"
                    required
                    minLength={2}
                    maxLength={50}
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                />
            </div>

            {/* Last Name */}
            <div>
                <label htmlFor="lName">Last Name</label> <br></br>
                <input
                    type="text"
                    id="lName"
                    placeholder="Last Name"
                    minLength={2}
                    maxLength={50}
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email">Email</label> <br></br>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    required
                    minLength={4}
                    maxLength={200}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone">Phone Number</label> <br></br>
                <input
                    type="tel"
                    id="phone"
                    placeholder="(xxx)-xxx-xxxx"
                    value={tel}
                    required
                    minLength={10}
                    maxLength={25}
                    onChange={(e) => setTel(e.target.value)}
                />
            </div>

            {/* Number of guests */}
            <div>
                <label htmlFor="guests">Number of People</label> <br></br>
                <input
                    type="number"
                    id="guests"
                    placeholder="Number of Guests"
                    value={guests}
                    required
                    min={1}
                    max={10}
                    onChange={(e) => setGuests(e.target.value)}
                />
            </div>

            {/* Date */}
            <div>
                <label htmlFor="date">Select Date</label> <br></br>
                <input
                    type="date"
                    id="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            {/* Time Slot */}
            <div>
                <label htmlFor="time">Select Time</label> <br></br>
                <select
                    id="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    {availableTimes.map((times) => <option>{times}</option>)}
                </select>
            </div>

            {/* Occasion */}
            <div>
                <label htmlFor="occasion">Occasion</label> <br></br>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </div>

            {/* Table Preferences */}
            <div>
                <label htmlFor="preferences">Seating preferences</label> <br></br>
                <select
                    id="preferences"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                >
                    <option>None</option>
                    <option>Indoors</option>
                    <option>Outdoor (Patio)</option>
                    <option>Outdoor (Sidewalk)</option>
                </select>
            </div>

            {/* Comment */}
            <div>
                <label htmlFor="comments">Additional Comments</label> <br></br>
                <textarea
                    id="comments"
                    rows={8}
                    cols={50}
                    placeholder="Additional Comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                />
            </div>

            {/* Confirmation Button */}
            <div>
                <button type='submit' className='reservation-form-button'>Submit</button>
            </div>

        </form>
    )
}

export default Form