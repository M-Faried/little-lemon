

const ReserveConfimation = ({ data, onConfirm, onBack }) => {
    return (
        <div className='reserve-confirm'>
            {/* First Name */}
            <div>
                Name: {data.lastName}, {data.firstName}
            </div>

            {/* Email */}
            <div>
                Email: {data.email}
            </div>

            {/* Phone */}
            <div>
                Phone: {data.phone}
            </div>

            {/* Number of guests */}
            <div>
                No. Guests: {data.noOfGuests}
            </div>

            {/* Date */}
            <div>
                Time: {data.date} @ {data.time}
            </div>

            {/* Occasion */}
            <div>
                Occasion: {data.occasion}
            </div>

            {/* Table Preferences */}
            <div>
                Preferences: {data.preferences}
            </div>

            {/* Comment */}
            <div>
                Comment:
                <div>
                    {data.comments ? data.comments : 'No Comment'}
                </div>
            </div>

            <div className='reserve-confirm-buttons'>
                <button
                    className='reservation-form-button'
                    onClick={onConfirm}>
                    Confirm
                </button>
                <button
                    className='reservation-form-button'
                    onClick={onBack}>
                    Back
                </button>
            </div>
        </div>
    )
}

export default ReserveConfimation;