import React from 'react';

import {SpinnerContainer,SpinnerOverlay} from './with-spinner.styles';

const WithSpinner=WrappedComponent =>{

    
    const Spinner=({isLoading,...otherProps})=>{
        console.log("SPINNER");
        console.log(otherProps);
        return isLoading?
        (<SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>)
        :
        (<WrappedComponent {...otherProps} />)
    }


    return Spinner;




}


export default WithSpinner;