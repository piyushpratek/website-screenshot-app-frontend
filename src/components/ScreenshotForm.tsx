import React, { useState } from 'react';
import axios from 'axios';

const ScreenshotForm: React.FC = () => {
    const [url, setUrl] = useState('');
    const [screenshotUrl, setScreenshotUrl] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:4000/api/screenshot', { url });
            setScreenshotUrl(response.data.url);
        } catch (error) {
            console.error('Error taking screenshot:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Enter website URL"
                    required
                />
                <button type="submit">Take Screenshot</button>
            </form>
            {screenshotUrl && (
                <div>
                    <h3>Screenshot:</h3>
                    <img src={screenshotUrl} alt="Website Screenshot" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default ScreenshotForm;