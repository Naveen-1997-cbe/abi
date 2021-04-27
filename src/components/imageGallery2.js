import React from "react";
import axios from "axios";
import "./imageGallery.css";
import ImageGalleryMap from "./imageMap";
import { Gallery, Item } from 'react-photoswipe-gallery'

class ImageGallery2 extends React.Component {
    constructor() {
        super()
        this.state = {
            apiContents: "",
            apiContentsShow: false,
            images: []
        }
    }

    async componentDidMount() {
        await axios.get('https://picsum.photos/v2/list?page=2').then(resp => {

            console.log('result-nextpage', resp.data);
            this.setState({
                apiContents: resp.data,
                apiContentsShow: true
            })
        });
    }
    handlePrevious =()=>{
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h2>Gallery</h2>
                {this.state.apiContentsShow ? <ImageGalleryMap apiContents={this.state.apiContents} apiContentsShow={this.state.apiContentsShow} /> : ''}
                <div className="button-align">
                <button class="btn btn-outline-dark mr-3" onClick={this.handlePrevious}>Privious</button>
                <button class="btn btn-outline-dark">Next</button>
                </div>
            </div>
        );

    }
}

export default ImageGallery2;