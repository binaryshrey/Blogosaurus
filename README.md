# Blogosaurus ![GitHub deployments](https://img.shields.io/github/deployments/binaryshrey/blogosaurus/production?style=flat&logo=vercel&label=vercel)

Publish blogs at the speed of light : Instantly share your thoughts with our blazing-fast blogging platform - [View](https://blogosaurus.vercel.app/)

![Banner](https://raw.githubusercontent.com/binaryshrey/Blogosaurus/main/blogo-product.png)

### Development setup

```
git clone https://github.com/binaryshrey/Blogosaurus.git
cd Blogosaurus
npm i
npm run start
```

#### Firebase configs
- Create a .env file for Firebase
```
REACT_APP_FIREBASE_API_KEY=**********
REACT_APP_FIREBASE_AUTHDOMAIN=**********.firebaseapp.com
REACT_APP_FIREBASE_PROJECTID=**********
REACT_APP_FIREBASE_STORAGE_BUCKET=**********.appspot.com
REACT_APP_FIREBASE_MESSAGESENDER_ID=**********
REACT_APP_FIREBASE_APPID=**********
REACT_APP_FIREBASE_MEASUREMENTID=**********
```

- Include Google & Github Auth under Firebase Authentication
- Include Firebase-Firestore with below prod db-rule:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid} {
      allow create: if request.auth != null;
      allow read;
      allow update, delete: if request.auth != null && request.auth.uid == uid;
    	
    }
    match /blogs/{uid} {
      allow create: if request.auth != null;
      allow read : if request.auth != null;
      allow update, delete: if request.auth != null && request.auth.uid == uid;
    
    }
  }
}
```


Development server runs at `http://localhost:3000`






