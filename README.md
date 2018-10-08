#Full stack reddit clone with firebase firestore react.js 


* [x] create-react-app
* [x] create firebase project
* [x] Add Firebase Auth
    * [x] Save user on login
    * [x] Update the rules so that only the user can change his data




```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read :if true;
    }
    match /users/{user_id}{
    	allow write : if request.auth.uid== user_id;
    }
  }
}
```