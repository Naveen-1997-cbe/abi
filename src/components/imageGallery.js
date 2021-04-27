import React from "react";
import axios from "axios";
import "./imageGallery.css";
import ImageGalleryMap from "./imageMap";

class ImageGallery extends React.Component {
    constructor() {
        super()
        this.state = {
            apiContents: "",
            apiContentsShow: false,
        }
    }

    async componentDidMount() {
        await axios.get('https://picsum.photos/v2/list?page=1').then(resp => {

            console.log('result', resp.data);
            this.setState({
                apiContents: resp.data,
                apiContentsShow: true
            })
        });
        console.log('apiContents', this.state.images)
    }
    handleNext =()=>{
        this.props.history.push('nextPage');
    }
    render() {
        return (
            <div>
                <h2>Gallery</h2>
                {this.state.apiContentsShow ?
                <ImageGalleryMap apiContents={this.state.apiContents} apiContentsShow={this.state.apiContentsShow} /> 
                : ''}
                <div className="button-align">
                <button class="btn btn-outline-dark mr-3">Privious</button>
                <button onClick={this.handleNext} class="btn btn-outline-dark">Next</button>
                </div>
            </div>
        );

    }
}

export default ImageGallery;