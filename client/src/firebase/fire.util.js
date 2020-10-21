import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config=
    {
        apiKey: "AIzaSyCYrxCh-TEgeMFq3tXS6LlzxHEpOPVzDjE",
        authDomain: "lionfashion.firebaseapp.com",
        databaseURL: "https://lionfashion.firebaseio.com",
        projectId: "lionfashion",
        storageBucket: "lionfashion.appspot.com",
        messagingSenderId: "810178059008",
        appId: "1:810178059008:web:30157209dc7828c46331e5",
        measurementId: "G-3M9KYVZE7X"
      };


firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

export const createUserProfileDocument=async (userAuth,additionalData)=>{
  if (!userAuth)return;

  /*query inside firestore to see if already exist*/
  /*firebase will always return us a reference object and snapshot object even if nothing exists there*/
  const userRef=firestore.doc(`users/${userAuth.uid}`);
  const snapshot=await userRef.get();

  if(!snapshot.exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date();

    try{

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData

      })
    }catch(error){
      console.log("error creating user",error.message);

    }
  }
  return userRef;

};



//*****ONE OFF to add all SHOP DATA to firebase automatically to save manual entry time!!! */
export const addCollectionAndItems=async (collectionKey,objectToAdd)=>{
  const collectionRef=firestore.collection(collectionKey);
  //batch write
  const batch=firestore.batch();
  
  objectToAdd.forEach((obj) =>{
    const newDocRef=collectionRef.doc();
    batch.set(newDocRef,obj);

  });

  return await batch.commit()

}



export const convertCollectionsSnapshotToMap=(collections)=>{
  const transformedCollection=collections.docs.map(doc=>{
    const {title,items}=doc.data();

    return {
      routeName:encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  }
  );

  //returned object go into next object until we end up with an object where the title of each object is the KEY
  return transformedCollection.reduce((accumulator,collection)=>{
    accumulator[collection.title.toLowerCase()]=collection;
    return accumulator;
  },{});
}
















const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'}) /*trigger google popup*/
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;