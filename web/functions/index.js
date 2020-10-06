const functions = require('firebase-functions');
const admin =require('firebase-admin')
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onCall(async (data, context) => {
   
    await admin.auth().createUser({
      email: data.email,
      
      password: data.password,
    }).catch(function(error) {
      throw new functions.https.HttpsError('unknown', 'User auth creation failed.');
  });
 })

