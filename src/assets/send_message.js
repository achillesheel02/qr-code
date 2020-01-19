
const credentials = {
    apiKey: '969106437e3b6e8f19e37ec3f77b2161525b4a779742a418033a0b2513487805',
    username: 'sandbox',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

export function sendMessage(number,code) {
    const options = {
        // Set the numbers you want to send to in international format
        to: [number],
        // Set your message
        message: code,
        // Set your shortCode or senderId
        from: 'Test'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}
