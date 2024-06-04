'use client'
import { useState } from 'react'; 

export default function Home() { 
    const [selectedFile, setSelectedFile] = useState(null); 
    const [downloadFileName, setDownloadFileName] = useState(''); 
    const [downloadedFile, setDownloadedFile] = useState(null); 

    const handleFileChange = (event) => { 
        setSelectedFile(event.target.files[0]); 
    }; 

    const handleUpload = async () => { 
        if (!selectedFile) return alert('Please select a file first.'); 

        const reader = new FileReader(); 
        reader.readAsDataURL(selectedFile); 
        reader.onloadend = async () => { 
            const base64data = reader.result.split(',')[1]; 
            const res = await fetch('/api/upload', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify({ 
                    file: base64data, 
                    fileName: selectedFile.name
                })
            }); 

            if (res.ok) { 
                alert('File uploaded successfully'); 
            } else { 
                const error = await res.json(); 
                alert('Error uploading file: ' + error.error); 
            } 
        }; 
    }; 

    const handleDownload = async () => { 
        if (!downloadFileName) return alert('Please enter a file name.');

        const res = await fetch(`/api/download?fileName=${downloadFileName}`);
        if (res.ok) { 
            const data = await res.json(); 
            setDownloadedFile(data.file); 
        } else { 
            const error = await res.json(); 
            alert('Error downloading file: ' + error.error); 
        } 
    }; 
    
    return ( 
        <div> 
            <h1>Upload and Download Files</h1> 
            <input type="file" onChange={handleFileChange} /> 
            <button onClick={handleUpload}>Upload</button> 

            <h2>Download File</h2>
            <input 
                type="text" 
                value={downloadFileName} 
                onChange={(e) => setDownloadFileName(e.target.value)} 
                placeholder="Enter file name" /> 
            <button onClick={handleDownload}>Download</button> 
            
            {downloadedFile && ( 
                <div> 
                    <h3>Downloaded File</h3> 
                    <a 
                        href={`data:application/octet-stream;base64,${downloadedFile}`} 
                        download={downloadFileName} 
                    > 
                        Click here to download 
                    </a> 
                </div> 
            )} 
        </div> 
    ); 
}