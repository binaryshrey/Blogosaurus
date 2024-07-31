import { db } from '../Firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  where
} from 'firebase/firestore';

export const saveUserDataIfNewUser = async (user) => {

    try{
        const collection_ref = collection(db, 'users')
        const querySnapshot = query(collection_ref, where("email", "==", user.email))
        const doc_refs = await getDocs(querySnapshot);
        const res = []
        doc_refs.forEach(user => {
            res.push({
                id: user.id, 
                ...user.data()
            })
        })

        if(res.length === 0){
        await addDoc(collection(db, 'users'), {
            displayName : user.displayName,
            email: user.email,
            uid: user.uid,
            phoneNumber : user.phoneNumber,
            photoURL : user.photoURL,
        }, { merge: true });
        }
    }
    catch (error) {
      console.error('Error saving user data:', error);
    }
  };


export const saveBlogAsDraftToFirestore = async (blog) => {
  try{
      await addDoc(collection(db, 'blogs'), {
          blogID : blog.draftID,
          blogTitle: blog.title,
          blogDescription: blog.description,
          blogContents : blog.contents,
          blogAuthor : blog.author,
          blogAuthorPhoto: blog.authorPhoto,
          blogTimestamp : blog.timestamp,
          blogAuthorEmail: blog.authorEmail,
      }, { merge: true });
      console.log('Successfully saved blog as draft!');
  }
  catch (error) {
    console.error('Error saving blog data:', error);
  }
};



export const getBlogsFromFirestore = async (userEmail) => {
  
  try {
    let blogs = [];

    const blogsCollection = collection(db, 'blogs');
    const blogsSnapshot = query(blogsCollection, where("blogAuthorEmail", "==", userEmail))
    const doc_refs = await getDocs(blogsSnapshot);

    doc_refs.forEach((doc) => {
      blogs.push({
        ...doc.data()
      });
    });
    
    return blogs;
    
  } catch (error) {
    console.error('Error getting blogs:', error);
  }
}
