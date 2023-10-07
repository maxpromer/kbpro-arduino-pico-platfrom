/*
    KeyboardBT.h

    Modified by Earle F. Philhower, III <earlephilhower@yahoo.com>
    Main Arduino Library Copyright (c) 2015, Arduino LLC
    Original code (pre-library): Copyright (c) 2011, Peter Barrett

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Lesser General Public
    License as published by the Free Software Foundation; either
    version 2.1 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public
    License along with this library; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

#ifndef KEYBOARDBT_h
#define KEYBOARDBT_h

#include <HID_Keyboard.h>

class KeyboardBT_ : public HID_Keyboard {
protected:
    virtual void sendReport(KeyReport* keys) override;
    virtual void sendConsumerReport(uint16_t key) override;
public:
    KeyboardBT_(void);
    void begin(const char *localName = nullptr, const char *hidName = nullptr, const uint8_t *layout = KeyboardLayout_en_US);
    void end(void);
};
extern KeyboardBT_ KeyboardBT;

#endif
