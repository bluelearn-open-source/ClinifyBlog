import * as admin from 'firebase-admin';
  
var serviceAccount =JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT as string)
// console.log(serviceAccount,typeof serviceAccount);
if (admin.apps.length<=0){
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://farm-helper-app-mqtt.firebaseio.com/"
    });
}

export default admin