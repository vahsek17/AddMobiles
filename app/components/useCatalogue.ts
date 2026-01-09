"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // make sure this path is correct

export function useCatalogue() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const snap = await getDocs(collection(db, "Catalogue"));
        setItems(snap.docs.map(d => d.data()));
      } catch (err) {
        console.error("Error fetching catalogue:", err);
      }
    };
    load();
  }, []);

  return items;
}
