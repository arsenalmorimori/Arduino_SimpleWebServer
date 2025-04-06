#include "WiFiS3.h"

			// WiFi credentials
			char ssid[] = "MASHI";
			char pass[] = "mashizuki";

			// LED pin
			const int redPin = 1;
			const int bluePin = 2;
			const int yellowPin = 3;
			const int greenPin = 4;4

			WiFiServer server(80);

			void setup() {
				// ----------------------------- FUNCTION -----------------------------

				Serial.begin(9600);
				pinMode(redPin, OUTPUT);
				pinMode(bluePin, OUTPUT);
				pinMode(yellowPin, OUTPUT);
				pinMode(greenPin, OUTPUT);
				
				// Start WiFi Access Point
				Serial.print("Starting AP: ");
				Serial.println(ssid);
				WiFi.beginAP(ssid, pass);
				delay(5000);
				server.begin();
				Serial.println("Server started!");
				Serial.print("IP Address: ");
				Serial.println(WiFi.localIP());
			}

			void loop() {
				WiFiClient client = server.available();
				if (client) {
					Serial.println("New Client Connected");
					String request = "";
					while (client.connected()) {
						if (client.available()) {
							char c = client.read();
							request += c;
							if (c == '\n') break;
						}
					}
					
					// ----------------------------- FUNCTION -----------------------------

					if (request.indexOf("GET /redON") >= 0) {
						digitalWrite(redPin, HIGH);
					} 
					if (request.indexOf("GET /redOFF") >= 0) {
						digitalWrite(redPin, LOW);
					}

					if (request.indexOf("GET /blueON") >= 0) {
						digitalWrite(bluePin, HIGH);
					} 
					if (request.indexOf("GET /blueOFF") >= 0) {
						digitalWrite(bluePin, LOW);
					}

					if (request.indexOf("GET /greenON") >= 0) {
						digitalWrite(greenPin, HIGH);
					} 
					if (request.indexOf("GET /greenOFF") >= 0) {
						digitalWrite(greenPin, LOW);
					}

					if (request.indexOf("GET /yellowON") >= 0) {
						digitalWrite(yellowPin, HIGH);
					} 
					if (request.indexOf("GET /yellowOFF") >= 0) {
						digitalWrite(yellowPin, LOW);
					}



					// ----------------------------- CONTROL -----------------------------
					
					client.println("HTTP/1.1 200 OK");
					client.println("Content-Type: text/html");
					client.println("<a href=\"/redON\">helo</a>");
					client.println("<a href=\"/redOFF\">helo</a>");
          
					client.println("<a href=\"/blueON\">helo</a>");
					client.println("<a href=\"/blueOFF\">helo</a>");
          
					client.println("<a href=\"/greenON\">helo</a>");
					client.println("<a href=\"/greenOFF\">helo</a>");
          
					client.println("<a href=\"/yellowON\">helo</a>");
					client.println("<a href=\"/yellowOFF\">helo</a>");

          client.stop();
					Serial.println("Client Disconnected");
				}
			}
			