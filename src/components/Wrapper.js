import { useState } from 'react';
import Box from './Box';
import Button from './Button';




const Wrapper = () => {

const [marginTopState, setMargin] = useState(0);
const [marginLeftState, setLeftMargin] = useState(0);

    const addingMarg = () => {
        setMargin(marginTopState + 10);
    }
    
    const leftMarg = () => {
        setLeftMargin(marginLeftState + 10);
    }

    return (
        <>
        <Button mediatorFuncAdding={addingMarg} mediatorFuncLeft={leftMarg}  />
        <Box theLeftMargin={marginLeftState} theMargin={marginTopState} />
        </>

    )
}

export default Wrapper;