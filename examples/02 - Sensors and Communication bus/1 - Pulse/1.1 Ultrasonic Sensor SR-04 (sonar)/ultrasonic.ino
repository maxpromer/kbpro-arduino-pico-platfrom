#include <Arduino.h>
typedef int Number;
typedef int Boolean;
Number length2;
Number echoPin;
Number trigPin;
Number duration;
Number readDistance();


Number readDistance(){
  digitalWrite(trigPin,1);
  delayMicroseconds(10);
  digitalWrite(trigPin,0);
  duration = pulseIn(echoPin,1,1000);
  length2 = (duration / 29.01) / 2.01;
  return length2;
}

void setup()
{
  Serial.begin(115200);
  echoPin = 16;
  trigPin = 17;
  pinMode(trigPin,OUTPUT);
  pinMode(echoPin,INPUT);
}

void loop()
{
  Serial.println(((String("Distance =")+String(readDistance()))));
  delay(500); 
}
