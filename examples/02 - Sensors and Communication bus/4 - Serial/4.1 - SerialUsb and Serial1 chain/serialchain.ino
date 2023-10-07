#include <Arduino.h>
void setup()
{
  Serial.begin(115200);
  Serial1.begin(9600,SERIAL_8N1,9,10);
}
void loop()
{
  if (Serial1.available()) {
    Serial.println((Serial1.readStringUntil('\n')));
  }
  if (Serial.available()) {
    Serial1.println((Serial.readStringUntil('\n')));
  }
}
