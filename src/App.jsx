import React from 'react';

import UploadedFiles from './components/UploadedFiles';
import SelectFiles from './components/SelectFiles';
import './app.scss';

const App = () => {
    return (
        <div className='app'>
            <div className='app__upload'>
                <h1 className='title'>Upload Files</h1>
                <p>Upload documents you want to share with your team.</p>
                <div className='app__upload-wrapper'>
                    <div className='browse__file'>
                        <SelectFiles />
                    </div>
                    <div className='uploaded__file'>
                        <UploadedFiles />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
