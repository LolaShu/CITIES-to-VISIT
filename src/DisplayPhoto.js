//DisplayPhotos.js
// import Form from './Form.js'
// import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const DisplayPhotos = ({photos}) => {
    
    const fadeProperties = {
        duration: 5000,
        canSwipe: true,
    };
    return (    
        
        <div className="slide">
        
            <Slide {...fadeProperties}>
                {photos.map((photo) => {
                    
                    return (
                        <div className="slideContainer" key={photo.id}>
                            <div className="each-fade" >
                                <div>
                                    <img src={photo.urls.regular} alt={photo.alt_description} />
                                </div>
                                <h2>{photo.user.name}</h2>
                            </div>
                        
                        </div>
                    )
                })}
            </Slide>
        </div>
    
    )
}
export default DisplayPhotos

    // <>
    // {/* <h2>Photos!</h2> */ }

    // < div className = "photos" >
    // {
    //     photos.map((photo) => {
    //         return (
    //             <div className="photo-container" key={photo.id}>
    //                 <img src={photo.urls.regular} alt={photo.alt_description} />
    //                 <h2>{photo.user.first_name}</h2>
    //             </div>

    //         );
    //     })
    // }
    //                 </div >
    //             </>
