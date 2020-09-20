import React from 'react';

import './custom-button.styles.scss';

const CustomButton =({children,isGoogleSignIn,...otherProps})=>{
    console.log("custom button----------------");
    console.log("children----------------");
    console.log(children);
    console.log("other props----------------");
    console.log(otherProps);

    return (    <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`}{...otherProps}>{children}</button>)








}

export default CustomButton;