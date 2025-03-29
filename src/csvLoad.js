import React, { useState, useRef } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCiqtadS6kJeT9DP5vg8hNikqdgCQ74Gfs',
  authDomain: 'site-9686c.firebaseapp.com',
  projectId: 'site-9686c',
  storageBucket: 'site-9686c.appspot.com',
  messagingSenderId: '529711415178',
  appId: '1:529711415178:web:cf5e62aac730009e389273',
  measurementId: 'G-VK8M10QC65',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function CsvLoad() {
  const [inputData, setInputData] = useState('');
  const [accumulatedMobiles, setAccumulatedMobiles] = useState([]);
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const topRef = useRef(null);

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAccumulate = (e) => {
    e.preventDefault();
    const mobileEntries = inputData.split('~');
    const newMobiles = mobileEntries.map((entry) => {
      const keyValuePairs = entry.split('`');
      
      const mobileData = keyValuePairs.reduce((acc, pair) => {
        const [key, value] = pair.split('^').map((item) => item.trim());
        if (key && value) {
          acc[key] = value;
        }
        return acc;
      }, {});
      return mobileData;
    });

    setAccumulatedMobiles((prev) => [...prev, ...newMobiles]);
    setInputData('');
    scrollToTop();
  };

  const handleAddAllToFirestore = async () => {
    setIsLoading(true);
    try {
      await Promise.all(
        accumulatedMobiles.map((mobile) => {
          const sanitizedModel = mobile.model.replace(/\//g, '-');
          const docRef = doc(collection(db, 'Catalogue'), sanitizedModel);
          return setDoc(docRef, mobile, { merge: true });
        })
      );
      setStatusMessage('All mobiles added successfully!');
      setAccumulatedMobiles([]);
    } catch (error) {
      console.error('Error adding documents: ', error);
      setStatusMessage('Error adding documents: ' + error.message);
    }
    setIsLoading(false);
  };

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={topRef} style={{ marginTop: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px' }}>Add Mobile Phone</h1>
      <div style={{ position: 'absolute', top: '0%', right: '5%' }}>
        <h4>Accumulated Mobiles</h4>
        <ul>
          {accumulatedMobiles.map((mobile, index) => (
            <li key={index}>{mobile.model}</li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleAccumulate} style={{ width: '80%' }}>
        <textarea
          value={inputData}
          onChange={handleInputChange}
          style={{ width: '90%', height: '250px', padding: '4px', fontSize: '10px'}}
          placeholder="Enter multiple mobile data delimited by '`' for key-value pairs and '~' for different mobiles. the keys and values should be delimited by ^ The format of the data should be in below order: model: iPhone 14 Pro Max` architecture: ARM` aspectRatio: 19.5:9` audioFeatures: Spatial Audio` audioJack: None` availableStorage: 128GB, 256GB, 512GB, 1TB` battery: Built-in rechargeable lithium-ion battery` batteryCapacity: 4323 mAh` batteryRemovable: No` batteryTalkTime: Up to 28 hours on 3G` batteryType: Lithium-ion` benchMarks: A16 Bionic chip performance benchmarks` bezelLessDisplay: Yes` bluetooth: Bluetooth 5.3` chipset: A16 Bionic chip` colours: Space Black, Silver, Gold, Deep Purple` comparePrices: Available at Apple and major electronics retailers` cpu: 6-core CPU with 2 performance and 4 efficiency cores` customUi: iOS 16` dimensions: 160.7 x 77.6 x 7.85 mm` displayType: Super Retina XDR display with ProMotion` expandable: No` expertRating: 5/5` fingerpringType: None` fingerprintPosition: None` fingerprintSensor: No` fmRadio: No` frontAutofocus: Yes, with autofocus` frontCamera: 12 MP, f/1.9 aperture` frontCameraSetup: Dual camera` frontFlash: Yes, Retina Flash` frontResolution: 12 MP` frontVideo: 4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps` gps: Yes, with A-GPS, GLONASS, GALILEO, QZSS, and BeiDou` graphics: Apple GPU (5-core graphics)` hdr: HDR display support` imageURL: [Insert Image URL here]` internalMemory: 128GB, 256GB, 512GB, 1TB` launchDate: September 2022` loudSpeaker: Yes, with stereo speakers` material: Surgical-grade stainless steel and Ceramic Shield` networkSupport: 5G capable` nfc: Yes` operatingSystem: iOS 16` otg: Supported` otherSensors: LiDAR Scanner, Proximity sensor, Accelerometer, Gyroscope, Barometer, Ambient light sensor` peakBrightness: 2000 nits (HDR)` performance: High-performance gaming and AR applications` pixelDensity: 460 ppi` priceList: Starting at $1099` quickCharging: Fast charging, up to 50% charge in 30 minutes with 20W adapter or higher` ram: 6GB` rearAutoFocus: Yes, with focus pixels (phase detection)` rearCamera: Triple 48 MP, f/1.78, 26mm (wide), 12 MP, f/2.2, 120˚ (ultrawide), 12 MP, f/2.8 (telephoto)` rearCameraFeatures: Night mode, Deep Fusion, Smart HDR 4, Photographic Styles, macro photography` rearCamersSetup: Triple` rearFlash: Dual LED True Tone flash` rearImageResolution: 48 MP wide, 12 MP ultrawide` rearOis: Yes, optical image stabilization for video` rearResolution: 12 MP` rearSettings: Exposure compensation, ISO control` rearShootingModes: Portrait, Night, Macro, Panorama, Slow-motion` rearVideoFeatures: ProRes video recording up to 4K at 30 fps, Cinematic mode up to 4K HDR at 60 fps` rearVideoRecording: 4K video recording at 24 fps, 25 fps, 30 fps, or 60 fps` refreshRate: 120 Hz` resolution: 2796 x 1290 pixels` ruggedness: Water and dust resistant (IP68)` sar: Below 1.6 W/kg (head) 1.6 W/kg (body)` screenProtection: Ceramic Shield` screenSize: 6.7 inches` screenToBodyRatio: 87.4%` sim1: Nano-SIM` sim2: eSIM` simSize: Nano-SIM` simSlot: Dual SIM (nano-SIM and eSIM)` stereoSpeakers: Yes` storage: 128GB, 256GB, 512GB, 1TB` touchScreen: Yes, Haptic Touch` usbConnectivity: USB 2.0` usbType: Lightning` userRatings: 4.8/5` voLte: Yes` waterproofing: Water resistant up to 6 meters for 30 minutes` weight: 240 grams` wifi: Wi-Fi 6E` wifiFeatures: MIMO, Dual band"
        />
        <button
          type="submit"
          style={{
            color: 'white',
            backgroundColor: 'blue',
            fontSize: '16px',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            marginRight: '10px',
          }}
        >
          Accumulate
        </button>
        <button
          type="button"
          onClick={handleAddAllToFirestore}
          style={{
            color: 'white',
            backgroundColor: 'green',
            fontSize: '16px',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Add All to Firestore
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}

export default CsvLoad;
