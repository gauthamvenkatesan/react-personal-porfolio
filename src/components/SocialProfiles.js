import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';



const SocialProfile = props =>{
    const { image, link} = props.socialProfile;
    return (
        <span><a href={link} ><img src={image} alt='socialMediaIcon' style={{height: 35, width:35, margin:5}}/></a> 
        </span>)
}

const SocialProfiles = () => {
    return ( <div >
        <h2>Connect with me!</h2>
        {SOCIAL_PROFILES.map( SOCIAL_PROFILE => {
            return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}></SocialProfile>
        })}
        </div>
    )
};

export default SocialProfiles;

