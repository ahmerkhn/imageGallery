


import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
// import 'lightgallery/scss/lightgallery.scss';
// import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };


    const images = [
        { src: "/1.jpg", alt: "1" },
        { src: "/2.jpg", alt: "2" },
        { src: "/3.jpg", alt: "3" },
        { src: "/4.jpg", alt: "4", },
        { src: "/5.jpg", alt: "5", },
        { src: "/6.jpg", alt: "6", },
        { src: "/7.jpg", alt: "7", },
        { src: "/8.jpg", alt: "8", },
        { src: "/9.jpg", alt: "9", },
        { src: "/10.jpg", alt: "10", },
        { src: "/11.jpg", alt: "11", },
    ]    

    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
               {images.map((images,index)=>{
                return( 
                    <a href={images.src}>
                    <img alt={images.alt} src={images.src} />
                </a>
               )
               }
            )}
          
                {/* <a href="/2.jpg">
                    <img alt="img2" src="/2.jpg" />
                </a>
                ... */}
            </LightGallery>
        </div>
    );
}

export default Gallery