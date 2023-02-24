import React from 'react'

export default function imagePicker({ setPicture }) {

    return (
        <div className='main'>
            <input className='inputfile' type="file" id="file" accept='image/*'
                onChange={e => {
                    setPicture(URL.createObjectURL(e.target.files[0]))
                }} />
            <label htmlFor="file">Choose an image</label>
        </div>
    )
}
