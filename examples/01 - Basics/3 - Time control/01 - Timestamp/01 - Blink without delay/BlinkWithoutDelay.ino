#include <Arduino.h>

typedef int Number;
typedef int Boolean;
Number now;
Boolean value;

void setup()
{
  pinMode(13,OUTPUT);
  now = millis() + 1000;
  value = true;
}
void loop()
{
  if (millis() > now) {
    value = !value;
    digitalWrite(13,value);
    now = millis() + 1000;
  }
}
