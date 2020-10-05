const functions = require('firebase-functions');
const admin =require('firebase-admin')
admin.initializeApp();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onCall(async (data, context) => {
   
    await admin.auth().createUser({
      email: "cloud3@gmail.com",
      
      password: "wer@123",
    }).catch(function(error) {
      throw new functions.https.HttpsError('unknown', 'User auth creation failed.');
  });
 })
 exports.deleteUser = functions.https.onCall(async (data, context) => {
   
  await admin.auth().deleteUser({
    email: "cloud2@gmail.com",
    
    password: "wer@123",
  }).catch(function(error) {
    throw new functions.https.HttpsError('unknown', 'User auth creation failed.');
});
})

