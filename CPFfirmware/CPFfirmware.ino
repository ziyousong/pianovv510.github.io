/*
 * cpf sensors available testing firmware
 * v1.0.0
 * First edition
 * 
 * pin 4: white led
 * pin 5: mini fan module
 */

#include <Wire.h>
#include <rgb_lcd.h>
#include <ChainableLED.h>

int ledPin = 4;

int lightPin = A0;
int tempPin = A1;

int lightValue = 0;
float tempValue = 0;

rgb_lcd lcd;

#define NUM_LEDS 1
ChainableLED leds(7, 8, NUM_LEDS);

int servoPin = 5;
int i = 0;

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  lcd.begin(16,2);
  leds.init();
}

void loop() {

  // fan 60
  analogLCD();
  digitalWrite(ledPin, HIGH);
  leds.setColorRGB(0, 255, 0, 0);
  analogWrite(servoPin, 60);   
  
  delay(600);
  analogLCD();
  digitalWrite(ledPin, LOW);
  leds.setColorRGB(0, 0, 255, 0);
  delay(600);
  
  analogLCD();
  digitalWrite(ledPin, HIGH);
  leds.setColorRGB(0, 0, 0, 255);
  delay(600);

  // fan 180
  analogLCD();
  digitalWrite(ledPin, LOW);
  leds.setColorRGB(0, 255, 0, 0);
  analogWrite(servoPin, 180);  
  
  delay(600);
  analogLCD();
  digitalWrite(ledPin, HIGH);
  leds.setColorRGB(0, 0, 255, 0);
  delay(600);
  
  analogLCD();
  digitalWrite(ledPin, LOW);
  leds.setColorRGB(0, 0, 0, 255);
  delay(600);

  // fan 255
  analogLCD();
  digitalWrite(ledPin, HIGH);
  leds.setColorRGB(0, 255, 0, 0);
  analogWrite(servoPin, 255);   
  
  delay(600);
  analogLCD();
  digitalWrite(ledPin, LOW);
  leds.setColorRGB(0, 0, 255, 0);
  delay(600);
  
  analogLCD();
  digitalWrite(ledPin, HIGH);
  leds.setColorRGB(0, 0, 0, 255);
  delay(600);

  // stop
  analogWrite(servoPin, 0);  
  digitalWrite(ledPin, LOW);
  leds.setColorRGB(0, 0, 0, 0);
  delay(2000);
}

void analogLCD() {
  
  lightValue = analogRead(lightPin);
  tempValue = toCelsius(analogRead(tempPin));

  lcd.clear();

  lcd.setCursor(0, 0);
  lcd.print("light(A0)= ");
  lcd.print(lightValue);

  lcd.setCursor(0, 1);
  lcd.print("temp(A1)= ");
  lcd.print(tempValue);
  
}

float toCelsius(int a) {
  float R = 1023.0/a-1.0;
  R = 100000*R;
  float temperature = 1.0/(log(R/100000)/4275+1/298.15)-273.15;
  return temperature;
}
