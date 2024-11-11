'use client'
import React, { useRef, useState } from 'react'
import classes from './ImagePicker.module.css'
import Image from 'next/image'

const ImagePicker = ({label, name}) => {
  const [previewImage, setPreviewImage] = useState()
  const imageInput = useRef();

  const handlePickImage = () => {
    imageInput.current.click();
  }
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPreviewImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    }
    reader.readAsDataURL(file);
  }

  return (
    <>
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}> 
        <div className={classes.preview}>
          {!previewImage && <p>No image picked yet.</p>}
          {previewImage && <Image src={previewImage} alt="Image selected by the use." fill   />}
        </div>
        <input 
          type='file' 
          id={name} 
          name={name} 
          accept='image/png image/jpg'
          className={classes.input} 
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type='button' onClick={handlePickImage}>Pick an image</button>
      </div>
    </div>
    </>
  )
}

export default ImagePicker