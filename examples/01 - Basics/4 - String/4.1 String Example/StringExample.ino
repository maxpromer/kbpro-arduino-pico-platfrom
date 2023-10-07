#include <Arduino.h>
String str1;
void setup()
{
  Serial.begin(115200);
  Serial.println(String("=== > This is how we create or concat String <==="));
  Serial.println((String("String Concat")+String("  Analog0 = ")+String(analogRead(36))));
  Serial.println(String("=== > you can append string with this <==="));
  str1 = String("This is str1");
  str1 += String(String(" append with Hello"));
  Serial.println(str1);
  Serial.println(String("=== > you can check string is empty or not <==="));
  if ((str1.length() == 0)) {
    Serial.println(String("str1 is empty"));
  } else {
    Serial.println(String("str1 not empty"));
  }
  Serial.println(String("=== > let find string <==="));
  Serial.print(String("word 'append' occured at position : "));
  Serial.println((str1.indexOf(String("append")) + 1));
  Serial.print(String("and charector at position 6 is : "));
  Serial.println(String(str1.charAt(5)));
  Serial.println(String("=== > you can get some parts of string <==="));
  Serial.println(str1.substring(5,11));
  Serial.println(String("=== > you can string case with this <==="));
  str1.toUpperCase();
  Serial.println(str1);
  Serial.println(String("=== > you can string replace string by this block <==="));
  str1.replace(String("HELLO"),String("Hola"));
  Serial.println(str1);
}
void loop()
{

}
