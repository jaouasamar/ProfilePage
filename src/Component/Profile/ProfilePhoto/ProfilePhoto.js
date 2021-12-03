import React from 'react'
import './ProfilePhoto.css'
import { Image } from 'react-bootstrap'


const ProfilePhoto = () => {
    return (
        <div>
              <Image src="./userprofile.jpg" alt="profilelmg"  roundedCircle className="userImage"/>
             
        </div>
    )
}

export default ProfilePhoto
