import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCiqtadS6kJeT9DP5vg8hNikqdgCQ74Gfs",
    authDomain: "site-9686c.firebaseapp.com",
    projectId: "site-9686c",
    storageBucket: "site-9686c.appspot.com",
    messagingSenderId: "529711415178",
    appId: "1:529711415178:web:cf5e62aac730009e389273",
    measurementId: "G-VK8M10QC65"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function ImageLoad() {
  const [rows, setRows] = useState([{ model: '', imageURL: '' }]);
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const handleBulkPaste = (e) => {
    const pastedData = e.clipboardData.getData('Text');
    const newRows = pastedData.split('\n').map(row => {
      const [model, imageURL] = row.split('\t');
      return { model: model?.trim() || '', imageURL: imageURL?.trim() || '' };
    });
    setRows(newRows);
    e.preventDefault();
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      await Promise.all(rows.map(async ({ model, imageURL }) => {
        if (model && imageURL) {
          const docRef = doc(collection(db, "Catalogue"), model);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            await setDoc(docRef, { imageURL }, { merge: true });
          } else {
            setStatusMessage(prev => `${prev}\nModel ${model} not found`);
          }
        }
      }));
      setStatusMessage("All updates processed successfully!");
    } catch (error) {
      console.error("Error updating documents: ", error);
      setStatusMessage("Error updating documents: " + error.message);
    }
    setIsLoading(false);
  };

  return (
    <div style={{ marginTop: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px' }}>Mobile Catalogue</h1>
      <table style={{ width: '80%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Model</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Image URL</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea
                  value={row.model}
                  onChange={(e) => handleInputChange(index, 'model', e.target.value)}
                  style={{ width: '100%' }}
                  onPaste={handleBulkPaste}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <textarea
                  value={row.imageURL}
                  onChange={(e) => handleInputChange(index, 'imageURL', e.target.value)}
                  style={{ width: '100%' }}
                  onPaste={handleBulkPaste}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleUpdate} style={{ marginTop: '10px', padding: '10px 20px' }}>
        Update All
      </button>
      {isLoading && <p>Loading...</p>}
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default ImageLoad;
