# node-earthquake
Node, Express &amp; Leaflet to display earthquakes on a map

The application uses a websocket to connect to http://www.seismicportal.eu/realtime.html to receive earthquake information as they occur (near-realtime).

Currently, the websocket is being closed (not gracefully) and I am unable to determine the cause after numerous tests.  I have attemmpted to send a message (some text) to the websocket server every few minutes in the hope that the websocket would remain open but the message appears to have no effect.

Thus, if the websocket closes other than the user refreshing the page or navigating away, the webpage will automatically refresh on the websocket closing.

