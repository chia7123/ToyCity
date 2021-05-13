/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// TODO 3.8 - push a message using the web push library
const webPush = require('web-push');

const pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/f7c4MZvUTRU:APA91bEk1fYgh0Cvb5UB7yThks4kcMgdAHFR5MN-r2ajatKtIczAJEPbZ5DmcJV3SVL10qaKDXAdEqGLuxXfTCd16lfWLBO4t-s-6a49hqcJYPgPV7oZS_t7dQXCR8Uuwl9pM3IGX2zL","expirationTime":null,"keys":{"p256dh":"BLtQ5qttyBO1I5CPt3wmPwyAMAonYxWL1bIxj6V8T7TE3V-c_UO-k8Nmi1RgUjZfvu7G_0zN2y966O0LYrVt0K4","auth":"Z87_YJn2Jb_yA79nEUhgaw"}};

// TODO 4.3a - include VAPID keys
const vapidPublicKey = 'BJk6TbZF6HP36lr9TpAYUpe_qPWYqfBqk6KGKAmRQFAA8AlAP9cMVCOmP2v6a3jePScNtR1e_KsLf_lRIHsE3LQ';
const vapidPrivateKey = 'uKhPr4US4EBR-XxX2NVRGliBLE80QZW8vYLzsAPeWTI';


const payload = 'There are more promotion! Dont miss it! Click to check your order.';

const options = {
  //gcmAPIKey: 'BMKKz9oa7oisRvIl1nELgQZk5KNW4mrgTU5wO-0zHqQC0_V0FQEXt5y7YKV4Pl8YniTAR8-APwU1mEL7A5Q4yCw',
  TTL: 60,
  
  // TODO 4.3b - add VAPID details
  vapidDetails: {
    subject: 'mailto: jasonlim@gmail.com',
    publicKey: vapidPublicKey,
    privateKey: vapidPrivateKey
  }

};

webPush.sendNotification(
  pushSubscription,
  payload,
  options
);