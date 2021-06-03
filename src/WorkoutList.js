import React from 'react'
import {API_ENDPOINT} from './config'
import TokenService from './service/token-service'



class WorkoutList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            workoutsByUserId: [],

        }
    }



    componentDidMount() {

        let currentUser = TokenService.getUserId()
        // console.log(currentUser)

        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }





        let getWorkoutByUserIdUrl = `${API_ENDPOINT}/workout-plan/user/${currentUser}`

        fetch(getWorkoutByUserIdUrl)
            .then((videoInList) => videoInList.json())
            .then((videoInList) => {
                console.log(videoInList)
                this.setState({
                    workoutsByUserId: videoInList,
                })
                // console.log(this.state)
            })

            .catch((error) => this.setState({ error }))
    }

    


    render() {



        // console.log(this.state.itemsByUserId.length)
        let showVideoList = ''
        //by default show there are no items
        if (this.state.workoutsByUserId.length === 0) {
            showVideoList =
            <tbody>
                <tr className="videosByUser">
                    <td>No Workouts Saved</td>
             </tr>
            </tbody>
                
        }
        // if there are items 
        else {

            // display details for each one of the items
            console.log(this.state.workoutsByUserId)
            showVideoList = this.state.workoutsByUserId.map((item, key) => {
                if (item) {
                    let videoUrl = `https://www.youtube.com/watch?v=${item.video_id}`
                    return (
                        <tbody key = {key}>
                        <tr>  
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <a href={videoUrl} target='_blank'>
                            <img src={item.thumbnail} alt={item.title} className='workoutListImg' />
                            </a>
                        </tr>
                        </tbody>
                    )
                }
            })
        }


        return (
            <div className="Workouts">
                <section id="WorkoutPage">
                <table className ="WorkoutTable">
                <colgroup>
                    <col span = "4"/>
                    <col span = "4"/>
                    <col span = "4"/>
                    <col span = "4"/>
                </colgroup>
                
                <tbody>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Video
                    </th>
                </tr>
                </tbody>
                    {showVideoList}
                    </table>

                </section>
            </div>
        )
    }
}
export default WorkoutList