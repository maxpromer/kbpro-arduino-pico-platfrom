#include <Arduino.h>
typedef int Number;
typedef int Boolean;

Number value;
void setup()
{  
  Serial.begin(115200);
}
void loop()
{
  value = analogRead(36);
  Serial.println((String("Value = ")+String(value)));
  delay(500);
}