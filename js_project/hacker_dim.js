const TuyAPI = require('tuyapi');

const device = new TuyAPI({
    id: 'xxxxxxxxxxxxxxxxxxxxxx',
    key: 'xxxxxxxxxxxxxxxxxxxx',
    ip: 'xxxxxxxxxxxxxxxxxxxxx',
    version: '3.3',
    issueRefreshOnConnect: true});

// Find device on network
device.find().then(() => {
    // Connect to device
    device.connect();
});

// Add event listeners
device.on('connected', () => {
    console.log('============================');
    console.log("Welcome")
    console.log('============================');
});

device.on('disconnected', () => {
    console.log('Disconnected from device.');
});

device.on('error', error => {
    console.log('Error!', error);
});



// Set Color to Hacker Green

device.on('data', data=> {
    device.set({dps: 20, set: true});
})

device.on('data', data=>{
    device.set({dps: 21, set: 'colour'});

})

device.on('data', data=> {
    device.set({dps: 25, set: '000e0d0000000000000000c80000'});
})

// Disconnect after 1 second
setTimeout(() => { device.disconnect(); }, 1);

// process.exit()

// device.on('dp-refresh', data => {
//     console.log('DP_REFRESH data from device: ', data);
// });


