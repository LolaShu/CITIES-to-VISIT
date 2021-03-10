//DisplayPhotos.js

import { Slide } from 'react-slideshow-image';

const DisplayPhotos = ({photos}) => {
    
    const fadeProperties = {
        duration: 5000,
        canSwipe: true,
    };
    return (       
        <div>
            <Slide {...fadeProperties}>
                {photos.map((photo) => {
                    
                    return (
                        
                        <div className="slideContainer" key={photo.id}>
                            <div className="each-fade" >
                                <div>
                                    <img src={photo.urls.regular} alt={photo.alt_description} />
                                </div>
                                <h2>{photo.user.first_name}</h2>
                            </div>
                        
                        </div>
                    )
                })}
            </Slide>
        
        </div>
    )
}
export default DisplayPhotos
