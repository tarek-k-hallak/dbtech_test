import React from 'react'

export default function imagePicker({ setPicture }) {

    return (
        <input type="file" accept='image/*' onChange={e => {
            setPicture(URL.createObjectURL(e.target.files[0]))
        }} />
    )
}
