import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This Magic Website will detect any faces in your pictures. Give it a try and have fun!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center br3' type="text" placeholder='Enter Image URL' onChange={onInputChange} />
                    <button className='w-30 grow f4 center link ph3 pv2 dib white bg-light-purple br3' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;