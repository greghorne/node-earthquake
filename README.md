# node-earthquake
Node, Express &amp; Leaflet to display earthquakes on a map

01/17/2019

I am stopping dev work on this project for now because I can't debug the issue.

Using SockJS trying to connect to: var sock = new SockJS('http://www.seismicportal.eu/standing_order');

This returns in the dev console:

Error:
Access to XMLHttpRequest at 'http://www.seismicportal.eu/standing_order/info?t=1547683295814' from origin 'http://0.0.0.0:3000' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header contains multiple values 'http://0.0.0.0:3000, *, *', but only one is allowed.

Warning:
Cross-Origin Read Blocking (CORB) blocked cross-origin response http://www.seismicportal.eu/standing_order/info?t=1547683295814 with MIME type application/json. See https://www.chromestatus.com/feature/5629709824032768 for more details.

The issue I believe is: 
header contains multiple values 'http://0.0.0.0:3000, *, *', but only one is allowed

The best I can tell is that this is a server side issue and it is not my server.

I was attempting to test the JS code found at: http://www.seismicportal.eu/realtime.html

Possibly there is an option with SockJS that I am not using because I don't understand the problem enough.

