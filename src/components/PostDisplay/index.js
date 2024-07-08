import {Component} from 'react'
import Header from '../Header'
import PostItem from '../PostItem'
import ProfileItem from '../ProfileItem'
import EndCard from '../EndCard'
import './index.css'

class PostDisplay extends Component{
    
    render(){
        const {data} = this.props
        return(
            <div className='post-display-container'>
                <Header />
                <div className='posts-content-container'>
                    <div className='scroll-cont'>
                    <ul className='profiles-list-container'>
                        {data.map(each => (
                            <ProfileItem eachProfile={each} key={each.id} />
                        ))}
                    </ul>
                    </div>
                    <ul className='posts-container'>
                        {data.map(each => (
                            <PostItem eachPost={each} key={each.id} />
                        ))}
                    </ul>
                </div>
                <EndCard />
            </div>
        )
    }
}
export default PostDisplay

