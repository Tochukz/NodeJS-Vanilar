__To generate a self-signed certificate__   
```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```
This shoudl leave you with two files, `cert.pem`(the certificate) and `key.pem`(the pivate key). Put these files in the same directory as your Node.js server file. 

__To allow sekf signed certificate on Google Chrome__ 
* Paste this `chrome://flags/#allow-insecure-localhost` on the address/location bar of the browser. 
* Enable the "`Allow invalid certificate for resurces loaded from localhost`" option 
* Hit the _Relunch_ button to relunch the browser  
