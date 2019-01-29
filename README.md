# node-earthquake
Node, Express &amp; Leaflet to display earthquakes on a map

The application uses a WebSocket to connect to http://www.seismicportal.eu/realtime.html to receive earthquake information as they occur (near real-time).

Currently, the WebSocket randomly closes (not gracefully) and I am unable to determine the cause after numerous tests.  

Chrome, Firefox and Safari are closing the websocket randomly and interesting enough Opera keeps the websocket open until the page is refreshed or navigates away.

- The WebSocket .onclose event is stating: wasClean: false, code: 1006, reason: "".  So, not a whole lot of information there.  1006 however does point to the client-side (browser) and not the WebSocket server.  

- I have attemmpted to send a message (some text) to the WebSocket server every few minutes in the hope that the WebSocket would remain open but the message appears to have no effect.

- Thus, if the WebSocket closes other than the user refreshing the page or navigating away, a new WebSocket connection will be opened again.


