import React from 'react';

import {ErrorImageOverlay,ErrorImageText,ErrorImageContainer} from './error-boundary.styles';

class ErrorBoundary extends React.Component {

    constructor(){
        super();

        this.state={
            hasErrored:false
        }
    }

    //to be aware of the children inside the component throwing error, to catch error ahead of time
    static getDerivedStateFromError(error){
        //process the error
        return {hasErrored:true}
    }


    componentDidCatch(error,info){
        console.log(error);
    }

    render(){
        if (this.state.hasErrored){
            return <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/lKJiT77.png'/>
                <ErrorImageText>Sorry a dog finds this page tasty, we cannot refuse a dog</ErrorImageText>
            </ErrorImageOverlay>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;