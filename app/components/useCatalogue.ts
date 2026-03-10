"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // make sure this path is correct

export function useCatalogue() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const branch = process.env.NODE_ENV === "production" ? "main" : "dev";
        const snap = await getDocs(collection(db, branch));
        //Catalogue, dev, or main - here catalogue has the older mobile data, but the main & dev are the databases of prod & dev environments respectively
        
        setItems(snap.docs.map(d => d.data()));
      } catch (err) {
        console.error("Error fetching catalogue:", err);
      }
    };
    load();
  }, []);

  return items;
}
