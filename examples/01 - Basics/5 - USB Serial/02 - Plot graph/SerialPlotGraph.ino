#include <Arduino.h>

void setup()
{  
  Serial.begin(115200);
}
void loop()
{
  Serial.println(analogRead(36));
  delay(50);
}
