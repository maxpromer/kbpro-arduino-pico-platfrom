The ESP32 has four SPi buses, however as of right now only two of
them are available to use, HSPI and VSPI. Simply using the SPI API 
as illustrated in Arduino examples will use VSPI, leaving HSPI unused.


However if we simply intialise two instance of the SPI class for both
of these buses both can be used. However when just using these the Arduino
way only will actually be outputting at a time.
 
Logic analyser capture is in the same folder as this example as

![https://raw.githubusercontent.com/espressif/arduino-esp32/master/libraries/SPI/examples/SPI_Multiple_Buses/multiple_bus_output.PNG](https://raw.githubusercontent.com/espressif/arduino-esp32/master/libraries/SPI/examples/SPI_Multiple_Buses/multiple_bus_output.PNG)

created 30/04/2018 by Alistair Symonds
(source from https://github.com/espressif/arduino-esp32/tree/master/libraries/SPI/examples/SPI_Multiple_Buses)