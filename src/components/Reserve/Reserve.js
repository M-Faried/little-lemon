import { useState } from 'react';
import './Reserve.css';
import ReserveForm from './ReserveForm';
import ReserveConfimation from './ReserveConfirmation';
import ReserveSuccess from './ReserveSuccess';

const ReserveState = {
    Input: 0,
    Confirmation: 1,
    Success: 2,
}

const Reserve = () => {
    const [state, setState] = useState(ReserveState.Input);
    const [data, setData] = useState({});

    const onFormSubmitted = (formData) => {
        setData(formData);
        setState(ReserveState.Confirmation);
    }

    const onInputConfirmed = () => {
        setState(ReserveState.Success);
    }

    const onBack = () => {
        setState(ReserveState.Input);
    }

    return (
        <>
            {state === ReserveState.Input && <ReserveForm data={data} onReserve={onFormSubmitted} />}
            {state === ReserveState.Confirmation && <ReserveConfimation data={data} onConfirm={onInputConfirmed} onBack={onBack} />}
            {state === ReserveState.Success && <ReserveSuccess />}
        </>
    )
}

export default Reserve;