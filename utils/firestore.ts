// // utils/firestore.ts

// import { collection, addDoc, getDoc, doc } from 'firebase/firestore';
// import { db } from '../lib/firebaseConfig';
// import { generateShortCode } from './generateShortCode';

// export const saveUrl = async (longUrl: string): Promise<string> => {
//   const shortCode = generateShortCode();
//   await addDoc(collection(db, 'urls'), {
//     shortCode,
//     longUrl,
//   });
//   return shortCode;
// };

// export const getUrl = async (shortCode: string): Promise<string | null> => {
//   const docRef = doc(db, 'urls', shortCode);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     return docSnap.data()?.longUrl || null;
//   } else {
//     return null;
//   }
// };

// utils/firestore.ts

import { collection, setDoc, getDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebaseConfig';
import { generateShortCode } from './generateShortCode';

export const saveUrl = async (longUrl: string): Promise<string> => {
  const shortCode = generateShortCode();

  // Use setDoc with doc to specify the document ID as the shortCode
  await setDoc(doc(db, 'urls', shortCode), {
    shortCode,  // Store the shortCode in the document
    longUrl,    // Store the long URL in the document
  });

  return shortCode;
};

export const getUrl = async (shortCode: string): Promise<string | null> => {
  const docRef = doc(db, 'urls', shortCode);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()?.longUrl || null;
  } else {
    return null;
  }
};

