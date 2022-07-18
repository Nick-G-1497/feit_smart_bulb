# Feit Smart Light Bulb 

## Initial Information Gathering

Manufacture Number: OM60/RGBW/CA/AG
FCC ID: SYW-A19RGBWAGT2

MAC Address: 70:89:76:fc:40:c7
Reservered IP Address : xx.xx.xx.xx (LAN)

Original Design Manufacture of the IOT Device: Tuya Smart

    - According to Tuya they "Implement strict security measures like device certificates and one-key-per-device authentication to prevent illegal access. The TLS protocol creates secure data transmission channels."
    - Feit just bought a ready made solution that allows the device to be control via their MQTT API
        - TuyAPI (https://github.com/codetheweb/tuyapi)
        - It was noted that I was able to log onto the device with the Tuya App

All the underlying MQTT servers are running on AWS

On the client-side (light bulb) they try to hide the MQTT port by using 6668 rather that the typical 8883
