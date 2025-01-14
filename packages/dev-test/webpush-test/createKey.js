const webpush = require('web-push');

const vapidKeys = webpush.generateVAPIDKeys();
console.log(vapidKeys.publicKey, vapidKeys.privateKey);
// BILsf1-DzhEoMkBA8HrWH1ziIXX7-XdYaN2ycBdQ24mk5tOHaefHtMmIgzQzJqzMamZ1CJO3iDmJaG0uADRIhO4 