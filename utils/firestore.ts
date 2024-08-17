
// import { collection, setDoc, getDoc, doc } from 'firebase/firestore';
// import { db } from '../lib/firebaseConfig';


// export const saveUrl = async (longUrl: string): Promise<string> => {
//   // const shortCode = generateShortCode();

  
//   // await setDoc(doc(db, 'urls', shortCode), {
//   //   shortCode,  
//   //   longUrl,   
//   // });

//   // return shortCode;
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

