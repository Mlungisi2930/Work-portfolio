const express = require('express');
const path = require('path');
const app = express();
const API_PORT = 3001; // Port for the API server

// --- FILE DOWNLOAD ROUTES ---

// Route to handle CV download
app.get('/download/cv', (req, res) => {
    // *** FIX 1: Corrected folder to 'downloads' (plural) ***
    // *** FIX 2: Corrected file name and extension to match the uploaded file ***
    const cvFilename = 'Mlungisi real c.v.docx';
    const filePath = path.join(__dirname, 'downloads', cvFilename);
    
    // Use the actual file name for the download prompt
    res.download(filePath, cvFilename, (err) => {
        if (err) {
            // This error appears in your Node.js console, not the browser
            console.error(`Error downloading CV (${filePath}):`, err.message);
            
            // Send a helpful message back to the client
            if (err.code === 'ENOENT') {
                 res.status(404).send('Error: CV file not found. Please ensure the file "Mlungisi real c.v.docx" is inside a folder named "downloads" next to server.js.');
            } else {
                 res.status(500).send('Internal server error during download.');
            }
        }
    });
});

// Route to handle Certificates download
app.get('/download/certificates', (req, res) => {
    // Placeholder for Certificates file
    const certFilename = 'Mlungisi_Mvubu_Certificates.zip';
    const filePath = path.join(__dirname, 'downloads', certFilename);

    res.download(filePath, certFilename, (err) => {
        if (err) {
            console.error('Error downloading Certificates:', err.message);
            if (err.code === 'ENOENT') {
                 res.status(404).send('Error: Certificates file not found.');
            } else {
                 res.status(500).send('Internal server error during download.');
            }
        }
    });
});


// --- SERVER SETUP ---

// Start the server
app.listen(API_PORT, () => {
    console.log(`Node.js Download Server listening at http://localhost:${API_PORT}`);
    console.log('*** REMINDER: Ensure your React application proxies /download requests to this port (3001). ***');
});