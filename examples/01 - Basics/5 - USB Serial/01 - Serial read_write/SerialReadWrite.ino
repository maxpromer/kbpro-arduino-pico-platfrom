#include <Arduino.h>
String txt;
void setup()
{
  Serial.begin(115200);
  pinMode(13,OUTPUT);
}
void loop()
{
  if (Serial.available()) {
    txt = (Serial.readStringUntil('\n'));
    txt.trim();
    Serial.println(((String("Received : ")+String(txt))));
    if (txt == String("ON")) {
      Serial.println(String("Turn on LED"));
      digitalWrite(13,1);
    } else if (txt == String("OFF")) {
      Serial.println(String("Turn off LED"));
      digitalWrite(13,0);
    }
  }
}
