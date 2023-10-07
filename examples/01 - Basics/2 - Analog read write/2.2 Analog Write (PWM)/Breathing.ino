#include <Arduino.h>
int i;

void setup()
{
  ledcSetup(0, 5000, 8);
  ledcAttachPin(2, 0);
}
void loop()
{
  for (i = 1; i <= 255; i++) {
    ledcWrite(0, i);
    delay(5);
  }
  for (i = 255; i >= 1; i--) {
    ledcWrite(0, i);
    delay(5);
  }
}