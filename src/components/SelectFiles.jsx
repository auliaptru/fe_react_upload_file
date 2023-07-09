import React, { useState } from 'react';
import { MdDriveFolderUpload } from 'react-icons/md';
import './selectFiles.scss';

const SelectFiles = () => {
    const [isDrag, setIsDrag] = useState(false);
    const inputRef = React.useRef(null);

    const handleDragFile = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === 'dragenter' || e.type === 'dragover') {
            setIsDrag(true);
        } else if (e.type === 'dragleave') {
            setIsDrag(false);
        }
    };

    const handleDropFile = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDrag(false);
    };

    const handleChange = (e) => {
        e.preventDefault();
    };

    const onButtonClick = () => {
        inputRef.current.click();
    };
    return (
        <form
            className={isDrag ? 'form__selectFiles drag' : 'form__selectFiles'}
            onDragEnter={handleDragFile}
            onDragOver={handleDragFile}
            onDragLeave={handleDragFile}
            onDrop={handleDropFile}
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                type='file'
                name='file'
                id='input__selectFiles'
                multiple={true}
                onChange={handleChange}
                ref={inputRef}
            />
            <label htmlFor='input__selectFiles'>
                <MdDriveFolderUpload className='icon' />
                <p>Drag and drop files here</p>
                <span>OR</span>
                <button onClick={onButtonClick}>Browse Files</button>
            </label>
            {/* {isDrag && (
                <div
                    className='drag__element'
                    onDragEnter={handleDragFile}
                    onDragOver={handleDragFile}
                    onDragLeave={handleDragFile}
                    onDrop={handleDropFile}
                ></div>
            )} */}
        </form>
    );
};

export default SelectFiles;
