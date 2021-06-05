import React from 'react'
import PropTypes from 'prop-types'


class SearchResults extends React.Component {
    render() {
        let videoUrl = `https://www.youtube.com/watch?v=${this.props.video_id}`
        //get the arrays of authors
        //get the saleability status
        console.log(this.props.thumbnail)
        //if the book is free ...
            //... there is no price to show
            return (
                    <div>
                        <form onSubmit={this.props.handleAddWorkout}>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.description}</p>
                        <a href={videoUrl} target='_blank' rel="noopener noreferrer">
                        <img src={this.props.thumbnail.url} /></a>
                        <input type='hidden' name='video_id' defaultValue={this.props.video_id} />
                        <input type='hidden' name='user_id' defaultValue={this.props.user_id} />
                        {/* <input type='hidden' name='channelId' defaultValue={this.props.channelId} /> */}
                        <input type='hidden' name='title' defaultValue={this.props.title} />
                        <input type='hidden' name='thumbnail' defaultValue={this.props.thumbnail.url} />
                        <input type='hidden' name='description' defaultValue={this.props.description} />
                        <button type="submit">Add to Workout Plan</button>
                        </form>
                    </div>
            )
        }  
    }

    SearchResults.propTypes = {
        // classes: PropTypes.object.isRequired,
        handleAddWorkout: PropTypes.func.isRequired,
        // order: PropTypes.oneOf(['asc', 'desc']).isRequired,
        thumbnail: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        video_id: PropTypes.number.isRequired,
        user_id: PropTypes.number.isRequired,
      };

export default SearchResults