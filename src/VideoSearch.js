import React from 'react'
import SearchResults from './SearchResults'
import {API_ENDPOINT} from './config'
import TokenService from './service/token-service'

class VideoSearch extends React.Component {
    //setup the constructor with the default props and states
    constructor(props) {
        super(props)
        this.state = {
            video: [],
            error: null,
            params: {
                term: ''
            },
            addWorkout: []
        }
    }

    componentDidMount() {
        let currentUser = TokenService.getUserId()
        console.log(currentUser)

        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }


    }

    // convert query parameter from an object to a string
    formatQueryParams(params) {
        const queryItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&')
    }

    // if an integer is empty, undefinded or null, default it to 0
    checkInteger(inputInteger) {
        let outputValue = inputInteger
        if (inputInteger === "") {
            outputValue = 0
        }
        if (inputInteger === undefined) {
            outputValue = 0
        }
        if (inputInteger == null) {
            outputValue = 0
        }
        return outputValue
    }

    // if a string is undefinded or null, default it to "no details"
    checkString(inputString) {
        let outputText = inputString
        if (inputString === undefined) {
            outputText = "no details"
        }
        if (inputString == null) {
            outputText = "no details"
        }
        return outputText
    }

    // if a URL is undefinded or null, default it to the root url "/"
    checkURL(inputURL) {
        let outputURL = inputURL
        if (inputURL === undefined) {
            outputURL = "/"
        }
        if (inputURL == null) {
            outputURL = "/"
        }
        return outputURL
    }

    // if a URL is undefinded or null, default it to the root url "/"
    checkEmptyImage(inputURL) {
        let outputURL = inputURL
        if (inputURL === undefined) {
            outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
        if (inputURL == null) {
            outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
        return outputURL
    }

    //get the imput from the user
    handleSearch = (e) => {
        e.preventDefault()
        let currentUser = TokenService.getUserId()
        // console.log(currentUser)

        //create an object to store the search filters
        const data = {}

        //get all the from data from the form component
        const formData = new FormData(e.target)


        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1]
        }
        console.log(formData)
        //assigning the object from the form data to params in the state
        this.setState({
            params: data
        })

        //check if the state is populated with the search params data
        console.log(this.state.params)

        //get the yelp api url


        //format the queryString paramters into an object
        //const queryString = this.formatQueryParams(data)

        //sent all the params to the final url
        const api = `${API_ENDPOINT}/video-api-data/${data.term}`
        console.log(data.term)


        //useing the url and paramters above make the api call
        fetch(api)
            // if the api returns data ...
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again later.')
                }

                // ... convert it to json
                return res.json()
            })

            // use the json api output
            .then(data => {

                //check if there is meaningful data
                console.log(data)

                // check if there are no results
                if (data.totalItems === 0) {
                    throw new Error('No videos found')
                }

                // create and object with each one of the results
                const aVideo = data.items.map(video => {
                    

                    // get the name, rating, price, review_count, 
                    const {
                        channelId,
                        title,
                        description,
                        thumbnails,
                    } = video.snippet
                    const {videoId} = video.id
                    console.log(videoId)

                    let validatedOutput = {
                        video_id: videoId,
                        channelId: this.checkString(channelId),
                        title: this.checkString(title),
                        thumbnail: this.checkEmptyImage(thumbnails.default),
                        description: this.checkString(description),
                    }

                    return validatedOutput
                })

                //check if the validated data is structured in a new array objects

                //send all the results to the state
                this.setState({
                    video: aVideo,
                    error: null
                })
            })

            //catch connection errors
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
        console.log(api)

    }


    handleAddWorkout = (e) => {
        e.preventDefault()
        let currentUser = TokenService.getUserId();
        // console.log(currentUser)
        //create an object to store the search filters
        const data = {}

        //get all the from data from the form component
        const formData = new FormData(e.target)

        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1]
        }

        //assigning the object from the form data to params in the state
        this.setState({
            params: data
        })

        //check if the state is populated with the search params data
        console.log(data)
        
 

        fetch(`${API_ENDPOINT}/workout-plan`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) :
                res.json()
            )
            .catch(err => {
                console.log('error:', err)
            })

            
    };

    render() {

        //if there is an error message display it
        const errorMessage = this.state.error ? <div>{this.state.error}</div> : false

        //get all the books from the state and map each book for the corresponding component
        const videos = this.state.video.map((video, i) => {
            console.log(video)
            return <SearchResults
                key={i}
                video_id = {video.video_id}
                user_id={TokenService.getUserId()}
                // channelId = {video.channelId}
                title={video.title}
                thumbnail={video.thumbnail}
                description={video.description}
                handleAddWorkout={this.handleAddWorkout}
            />
        })
  
        return (
            <div>
            <section className="search-videos">
                   <form onSubmit={this.handleSearch}>
                    <label>Find:</label>
                    <input type='text'
                    name='term' 
                    className='search-bar'
                    placeholder='HIIT, abs, cardio'
                    required />
                    <button type='submit'>Search</button>
                </form>
                {errorMessage}
                <div className="search-results-wrapper">
                {videos}
                </div>
                </section>
            </div>
        )
    }
}

export default VideoSearch
