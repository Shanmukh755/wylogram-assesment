import './index.css'

const ProfileItem = props => {
    const {eachProfile} = props
    const {username, profilePic} = eachProfile
    const truncatedUsername = username.length > 7 ? `${username.slice(0, 7)}...` : username;
    return(
        <li className='profile-item-cont'>
            <img src={profilePic} className='profile-item-pic' alt='profile'/>
            <p className='profile-item-name'>{truncatedUsername}</p>
        </li>
    )
}
export default ProfileItem