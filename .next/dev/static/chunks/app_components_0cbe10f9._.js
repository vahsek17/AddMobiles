(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
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
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/useCatalogue.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCatalogue",
    ()=>useCatalogue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/firebase.ts [app-client] (ecmascript)"); // make sure this path is correct
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useCatalogue() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCatalogue.useEffect": ()=>{
            const load = {
                "useCatalogue.useEffect.load": async ()=>{
                    try {
                        const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "Catalogue"));
                        setItems(snap.docs.map({
                            "useCatalogue.useEffect.load": (d)=>d.data()
                        }["useCatalogue.useEffect.load"]));
                    } catch (err) {
                        console.error("Error fetching catalogue:", err);
                    }
                }
            }["useCatalogue.useEffect.load"];
            load();
        }
    }["useCatalogue.useEffect"], []);
    return items;
}
_s(useCatalogue, "E85yb7BhBnl3/OpymRdjFiQJ97s=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attributeNames",
    ()=>attributeNames,
    "sections",
    ()=>sections
]);
const attributeNames = {
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
    rearCameraSetup: "Rear Camera Setup",
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
const sections = {
    summary: [
        "performance",
        "Display",
        "rearCamera",
        "frontCamera",
        "battery",
        "Storage",
        "expertRating",
        "userRatings",
        "benchMarks",
        "comparePrices"
    ],
    general: [
        "launchDate",
        "operatingSystem",
        "customUi"
    ],
    designKeys: [
        "dimensions",
        "weight",
        "material",
        "colours",
        "waterproofing",
        "ruggedness"
    ],
    performance: [
        "chipset",
        "cpu",
        "architecture",
        "graphics",
        "ram"
    ],
    display: [
        "displayType",
        "screenSize",
        "resolution",
        "aspectRatio",
        "pixelDensity",
        "screenToBodyRatio",
        "screenProtection",
        "bezelLessDisplay",
        "touchScreen",
        "peakBrightness",
        "refreshRate",
        "hdr"
    ],
    cameraRear: [
        "rearCameraSetup",
        "rearCamera",
        "rearAutoFocus",
        "rearOis",
        "rearFlash",
        "rearImageResolution",
        "rearSettings",
        "rearShootingModes",
        "rearCameraFeatures",
        "rearVideoRecording",
        "rearVideoFeatures"
    ],
    cameraFront: [
        "frontCameraSetup",
        "frontCamera",
        "frontAutofocus",
        "frontFlash",
        "frontResolution",
        "frontVideo"
    ],
    battery: [
        "battery",
        "batteryCapacity",
        "batteryRemovable",
        "quickCharging",
        "usbConnectivity",
        "usbType",
        "batteryType",
        "batteryTalkTime"
    ],
    storageKeys: [
        "internalMemory",
        "expandable",
        "otg",
        "storage",
        "availableStorage"
    ],
    nwcKeys: [
        "simSlot",
        "simSize",
        "networkSupport",
        "voLte",
        "sim1",
        "sim2",
        "sar",
        "wifi",
        "wifiFeatures",
        "bluetooth",
        "gps",
        "nfc",
        "usbConnectivity"
    ],
    multimediaKeys: [
        "fmRadio",
        "stereoSpeakers",
        "loudSpeaker",
        "audioJack",
        "audioFeatures"
    ],
    sensorsKeys: [
        "fingerprintSensor",
        "fingerprintPosition",
        "fingerprintType",
        "otherSensors"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/compareTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompareTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$useCatalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/useCatalogue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CompareTable() {
    _s();
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$useCatalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogue"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        null,
        null
    ]);
    const [dropdownCount, setDropdownCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [expandedRows, setExpandedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const availableOptions = items.map((item)=>({
            value: item.model,
            label: item.model
        })).filter((option)=>!selected.some((s)=>s?.value === option.value));
    const handleChange = (opt, index)=>{
        const copy = [
            ...selected
        ];
        copy[index] = opt;
        // Only count non-null UP TO current dropdownCount
        const activeSelections = [];
        for(let i = 0; i < dropdownCount; i++){
            if (copy[i] !== null) {
                activeSelections.push(copy[i]);
            }
        }
        const newCount = Math.max(2, activeSelections.length);
        // Create new selected array with exact size
        const newSelected = Array(4).fill(null);
        for(let i = 0; i < newCount; i++){
            newSelected[i] = activeSelections[i];
        }
        setSelected(newSelected);
        setDropdownCount(newCount);
    };
    const addDropdown = ()=>{
        if (dropdownCount < 4) {
            setDropdownCount(dropdownCount + 1);
        }
    };
    if (items.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/app/components/compareTable.tsx",
        lineNumber: 53,
        columnNumber: 34
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen py-8 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-64 lg:h-80 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl mb-8 flex items-center justify-center text-gray-200 text-lg font-semibold shadow-2xl border border-gray-600",
                        children: "Advertisement (300x250)"
                    }, void 0, false, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/90 backdrop-blur-xl shadow-2xl rounded-3xl p-4 lg:p-6 border border-gray-600",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-gray-100 table-fixed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "h-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-bold py-4 px-2 sticky left-0 z-20 border-r-4 border-purple-400 shadow-lg w-1/5",
                                                        children: [
                                                            " ",
                                                            "Specification"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/compareTable.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, this),
                                                    Array.from({
                                                        length: dropdownCount
                                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: `py-4 px-1 ${dropdownCount === 2 ? 'w-2/5' : dropdownCount === 3 ? 'w-1/3' : 'w-1/4'}`,
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-center gap-4",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                                            options: availableOptions,
                                                                            value: selected[i] || null,
                                                                            onChange: (opt)=>handleChange(opt, i),
                                                                            classNamePrefix: "compare-select",
                                                                            placeholder: `Phone ${i + 1}`,
                                                                            isClearable: true,
                                                                            styles: {
                                                                                control: (base)=>({
                                                                                        ...base,
                                                                                        backgroundColor: '#374151',
                                                                                        borderColor: '#6b7280',
                                                                                        color: 'white',
                                                                                        width: dropdownCount === 2 ? '380px' : dropdownCount === 3 ? '280px' : '220px',
                                                                                        minHeight: '44px',
                                                                                        textAlign: 'center'
                                                                                    }),
                                                                                menu: (base)=>({
                                                                                        ...base,
                                                                                        backgroundColor: '#1f2937',
                                                                                        color: 'white',
                                                                                        width: dropdownCount === 2 ? '380px' : dropdownCount === 3 ? '280px' : '220px'
                                                                                    }),
                                                                                singleValue: (base)=>({
                                                                                        ...base,
                                                                                        color: 'white',
                                                                                        fontWeight: '600',
                                                                                        textAlign: 'center'
                                                                                    }),
                                                                                valueContainer: (base)=>({
                                                                                        ...base,
                                                                                        padding: '2px 6px',
                                                                                        textAlign: 'center'
                                                                                    }),
                                                                                option: (base, state)=>({
                                                                                        ...base,
                                                                                        backgroundColor: state.isSelected ? '#6366f1' : state.isFocused ? '#374151' : 'transparent',
                                                                                        color: 'white'
                                                                                    })
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/compareTable.tsx",
                                                                            lineNumber: 75,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        dropdownCount < 4 && i === dropdownCount - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: addDropdown,
                                                                            className: "bg-purple-600 hover:bg-purple-700 text-white px-2 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex-shrink-0",
                                                                            title: "Add another phone",
                                                                            children: "+"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/compareTable.tsx",
                                                                            lineNumber: 121,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/compareTable.tsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/components/compareTable.tsx",
                                                            lineNumber: 73,
                                                            columnNumber: 21
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/compareTable.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/compareTable.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: selected.filter((s)=>s !== null).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    colSpan: dropdownCount + 1,
                                                    className: "text-center py-16 text-2xl text-gray-400 font-medium",
                                                    children: [
                                                        " ",
                                                        "Select phones from dropdowns above to compare specs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/compareTable.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/compareTable.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attributeNames"]).map(([key, label], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: `${index % 2 === 0 ? 'bg-gradient-to-r from-gray-700/50 to-gray-800/70' : 'bg-gradient-to-r from-gray-750/60 to-gray-850/80'} border-b-2 border-purple-500/30 hover:bg-purple-500/20 transition-all duration-200`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-2 py-2 font-medium text-gray-200 sticky left-0 z-10 bg-inherit border-r-2 border-purple-400/50",
                                                                children: [
                                                                    " ",
                                                                    label
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/compareTable.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 25
                                                            }, this),
                                                            Array.from({
                                                                length: dropdownCount
                                                            }).map((_, phoneIndex)=>{
                                                                const phoneModel = selected[phoneIndex]?.value;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-2 py-2 text-center text-gray-100",
                                                                    children: [
                                                                        " ",
                                                                        phoneModel ? items.find((item)=>item.model === phoneModel)?.[key] || 'N/A' : ''
                                                                    ]
                                                                }, `${key}-${phoneIndex}`, true, {
                                                                    fileName: "[project]/app/components/compareTable.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        ]
                                                    }, key, true, {
                                                        fileName: "[project]/app/components/compareTable.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/compareTable.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/compareTable.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-48 lg:h-64 bg-gradient-to-r from-emerald-800 to-green-800 rounded-2xl mt-8 flex items-center justify-center text-emerald-200 text-xl font-bold shadow-2xl border border-emerald-600",
                        children: [
                            " ",
                            "Advertisement (728x90)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/compareTable.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(CompareTable, "gxLS+SDn+UvDV8/H1hRS/PQFKMQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$useCatalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogue"]
    ];
});
_c = CompareTable;
var _c;
__turbopack_context__.k.register(_c, "CompareTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_0cbe10f9._.js.map