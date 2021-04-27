import React from "react";
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
class ImageGalleryMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imageContents: this.props.apiContents,
            imageContentsShow: this.props.apiContentsShow,
        }
    }
    render() {
        return (
            <div>
                <Gallery>
                    <div className="container">
                        <div className="grid-container">
                            {this.state.imageContents.map((image) => {
                                return (
                                    <div class="img-hover-zoom">
                                    <Item
                                        original={image.download_url}
                                        thumbnail={image.download_url}
                                        width="1024"
                                        height="768"
                                        title={`Author : ${image.author}
                                <button class="button"><span>Download</span></button>
                                <a class="button" href=${image.url} target="_blank">Visit Page</a>`}
                                        className="demo"
                                    >
                                        {({ ref, open }) => (
                                            <img ref={ref} onClick={open} src={image.download_url} className="custom-image-size " />
                                        )}
                                    </Item>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Gallery>
            </div>
        );

    }
}

export default ImageGalleryMap;