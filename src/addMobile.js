import React, { useState, useRef } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

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

function AddMobile() {
  const [mobileData, setMobileData] = useState({});
  const [accumulatedMobiles, setAccumulatedMobiles] = useState([]);

  const attributeNames = {
    model: "Model No.",
    architecture: "Architecture",
    aspectRatio: "Aspect Ratio",
    audioFeatures: "Audio Features",
    audioJack: "Audio Jack",
    availableStorage: "Available Storage",
    battery: "Battery",
    batteryCapacity: "Battery Capacity",
    batteryRemovable: "Removable Battery",
    batteryTalkTime: "Battery Talk Time",
    batteryType: "Battery Type",
    benchMarks: "Benchmarks",
    bezelLessDisplay: "Bezel-less Display",
    bluetooth: "Bluetooth",
    chipset: "Chipset",
    colours: "Colors",
    comparePrices: "Compare Prices",
    cpu: "CPU",
    customUi: "Custom UI",
    dimensions: "Dimensions",
    displayType: "Display Type",
    expandable: "Expandable Storage",
    expertRating: "Expert Rating",
    fingerpringType: "Fingerprint Type",
    fingerprintPosition: "Fingerprint Position",
    fingerprintSensor: "Fingerprint Sensor",
    fmRadio: "FM Radio",
    frontAutofocus: "Front Autofocus",
    frontCamera: "Front Camera",
    frontCameraSetup: "Front Camera Setup",
    frontFlash: "Front Flash",
    frontResolution: "Front Resolution",
    frontVideo: "Front Video",
    gps: "GPS",
    graphics: "Graphics",
    hdr: "HDR",
    imageURL: "Image URL",
    internalMemory: "Internal Memory",
    launchDate: "Launch Date",
    loudSpeaker: "Loudspeaker",
    material: "Material",
    networkSupport: "Network Support",
    nfc: "NFC",
    operatingSystem: "Operating System",
    otg: "OTG Support",
    otherSensors: "Other Sensors",
    peakBrightness: "Peak Brightness",
    performance: "Performance",
    pixelDensity: "Pixel Density",
    priceList: "Price List",
    quickCharging: "Quick Charging",
    ram: "RAM",
    rearAutoFocus: "Rear Autofocus",
    rearCamera: "Rear Camera",
    rearCameraFeatures: "Rear Camera Features",
    rearCamersSetup: "Rear Camera Setup",
    rearFlash: "Rear Flash",
    rearImageResolution: "Rear Image Resolution",
    rearOis: "Rear OIS",
    rearResolution: "Rear Resolution",
    rearSettings: "Rear Settings",
    rearShootingModes: "Rear Shooting Modes",
    rearVideoFeatures: "Rear Video Features",
    rearVideoRecording: "Rear Video Recording",
    refreshRate: "Refresh Rate",
    resolution: "Resolution",
    ruggedness: "Ruggedness",
    sar: "SAR",
    screenProtection: "Screen Protection",
    screenSize: "Screen Size",
    screenToBodyRatio: "Screen-to-Body Ratio",
    sim1: "SIM1",
    sim2: "SIM2",
    simSize: "SIM Size",
    simSlot: "SIM Slot",
    stereoSpeakers: "Stereo Speakers",
    storage: "Storage",
    touchScreen: "Touch Screen",
    usbConnectivity: "USB Connectivity",
    usbType: "USB Type",
    userRatings: "User Ratings",
    voLte: "VoLTE",
    waterproofing: "Waterproofing",
    weight: "Weight",
    wifi: "WiFi",
    wifiFeatures: "WiFi Features"
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMobileData(prev => ({ ...prev, [name]: value }));
  };

  const topRef = useRef(null); 
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const handleAccumulate = (e) => {
    e.preventDefault(); // Correct use: function call
    if (!mobileData.model) {
      console.log("Please enter a model name."); // Correct use: function call
      return; // Correct use: part of control flow
    }
    setAccumulatedMobiles(prev => [...prev, mobileData]); // Correct use: function call
    setMobileData({}); // Correct use: function call
    scrollToTop(); // Correct use: function call
  };
  
  const handleAddAllToFirestore = async () => {
    try {
      await Promise.all(accumulatedMobiles.map(mobile => {
        const docRef = doc(collection(db, "Catalogue"), mobile.model);
        return setDoc(docRef, mobile); // Correct use: return statement in map function
      }));
      console.log("All mobiles added successfully!"); // Correct use: function call
      setAccumulatedMobiles([]); // Correct use: function call
      scrollToTop(); // Correct use: function call
    } catch (error) {
      console.error("Error adding documents: ", error); // Correct use: function call
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobileData.model) {
      console.log("Please enter a model name.");
      return;
    }
    const docRef = doc(collection(db, "Catalogue"), mobileData.model);
    try {
      await setDoc(docRef, mobileData);
      console.log("Mobile added successfully with model as ID!");
      setMobileData({});
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div ref={topRef} style={{ marginTop: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px' }}>Add Mobile Phone</h1>
      <div style={{ position: 'absolute', top: '10%', right: '10%' }}>
        <h4>Accumulated Mobiles</h4>
        <ul>
          {accumulatedMobiles.map((mobile, index) => (
            <li key={index}>{mobile.model}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleAccumulate} style={{ width: '80%' }}>
        {Object.keys(attributeNames).map(key => (
          <div key={key} style={{ marginBottom: '10px' }}>
            <label htmlFor={key} style={{ display: 'block', fontWeight: 'bold' }}>{attributeNames[key]}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={mobileData[key] || ''}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            />
          </div>
        ))}
        <button type="submit" style={{ color: 'white', backgroundColor: 'blue', fontSize: '16px', padding: '10px 20px', border: 'none', borderRadius: '5px', marginRight: '10px' }}>
          Accumulate
        </button>
        <button type="button" onClick={handleAddAllToFirestore} style={{ color: 'white', backgroundColor: 'green', fontSize: '16px', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
          Add All to Firestore
        </button>
      </form>
    </div>
  );
}

export default AddMobile;