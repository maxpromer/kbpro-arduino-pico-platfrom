module.exports = {
  name: "arduino-avr-actionbar",
  title: "Arduino-avr actionbar",
  description: "Actionbar setting menu for arduino-avr",
  auther: "Comdet Pheaudphut",
  website: "?",
  git: "",
  image: "",
  version: "1.0.0",
  components: [
    "actionbar-just-compile",
    "actionbar-build",
    "actionbar-setting",
  ],
  data: {
    wifi_ssid: "",
    wifi_password: "",
    comport: "",
    baudrate: 115200,
    cflag: "",
    loaded: false, //this will automatic set to 'true' if this pacakage loaded to IDE
  },
  persistence: {
    test: true,
  },
};
