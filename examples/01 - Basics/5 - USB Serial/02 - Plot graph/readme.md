## Serial graph plot 
1. Download "Processing" at [https://processing.org/download/](https://processing.org/download/) and install to your PC.
2. Open this example and upload to your ESP32's board.
3. Connect "Analog Sensor" or any devices output 0 - 3.3v to GPIO2 (ADC0)
4. Open "Processing" and put this code 


>
    import processing.serial.*;  
    Serial port; // The serial port instance
    int xPos = 1; // horizontal position of the graph  
    float data = 0;  
    
    void setup () {  
      size(400, 300); //set windows size here    
      println(Serial.list());  
      port = new Serial(this, Serial.list()[0], 115200);  //<<< change index here
      port.bufferUntil('\n'); //buffer data until get newline    
      background(0);  
    }  
    
    void draw () {
      stroke(30, 30, 255);                      //set color
      line(xPos, height, xPos, height - data);  //draw line
      if (xPos >= width) { //draw at start if out of windows  
        xPos = 0;  
        background(0);  
      } else {  
        xPos++;  
      }  
    }  
      
    void serialEvent (Serial port) {  
      String line = port.readStringUntil('\n');  
      if (line == null) return;  
      line = trim(line);  
      data = float(line); //convert to int  
      println(data);  
      data = map(data, 0, 1023, 0, height);  
    } 



5. Run processing to see your Serial Port (if found multiple port you need to change index in Processing code corresponding to your ESP32 serial port.)
6. Test your analog sensor.

![picture from https://www.arduino.cc/en/Tutorial/Graph](https://www.arduino.cc/en/uploads/Tutorial/graph-output.png)
picture from https://www.arduino.cc/en/Tutorial/Graph