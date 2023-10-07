#include <Wire.h>
#define ADDRESS 0x27

void SendData(byte data) {
  Wire.beginTransmission(ADDRESS);
  Wire.write(data);
  Wire.endTransmission();
}

void setup() {
  Wire.begin();
  SendData(B01010101);
  delay(2000);
  SendData(B10101010);
  delay(2000);
}

void loop() {
  byte data = B00000000;
  for(int i = 1; i <= 8 ; i++){
    data = data & (1 << i);
    SendData(data);
    delay(500);
  }
}