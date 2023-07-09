import React from 'react';
import {
    AiFillFilePdf,
    AiFillFileExcel,
    AiFillFileZip,
    AiFillFileWord,
} from 'react-icons/ai';

import './uploadedFiles.scss';

const files = [
    {
        icon: <AiFillFilePdf />,
        name: 'resume.pdf',
        progress: 100,
    },
    {
        icon: <AiFillFileWord />,
        name: 'resume.word',
        progress: 78,
    },
    {
        icon: <AiFillFileExcel />,
        name: 'File size is too large',
        progress: 0,
    },
    {
        icon: <AiFillFileZip />,
        name: 'resume.zip',
        progress: 38,
    },
];

const UploadedFiles = () => {
    return (
        <div className='uploaded'>
            <h1>Uploaded Files</h1>
            <div className='files'>
                {files.map((file, i) => (
                    <div
                        className='file'
                        key={i}
                        style={{
                            border: `${
                                file.name === 'File size is too large'
                                    ? '3px solid #d25298'
                                    : '1px solid lightgray'
                            }`,
                        }}
                    >
                        <div className='fileIcon'>{file.icon}</div>
                        <div className='progress__upload'>
                            <div className='status'>
                                <h3
                                    style={{
                                        color: `${
                                            file.name ===
                                            'File size is too large'
                                                ? '#E03377'
                                                : 'gray'
                                        }`,
                                    }}
                                >
                                    {file.name}
                                    {file.progress !== 0 &&
                                        ` (${file.progress})%`}
                                </h3>
                                <p
                                    style={{
                                        color:
                                            file.progress === 100
                                                ? 'green'
                                                : file.name ===
                                                  'File size is too large'
                                                ? '#E03377'
                                                : 'gray',
                                    }}
                                >
                                    {file.progress === 100
                                        ? 'Completed'
                                        : 'Cancel'}
                                </p>
                            </div>
                            <div className='progress'>
                                <div
                                    style={{
                                        width: `${
                                            file.progress === 0
                                                ? 2
                                                : file.progress
                                        }%`,
                                        backgroundColor: `${
                                            file.progress === 0
                                                ? 'red'
                                                : '#1d8960'
                                        }`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UploadedFiles;
