# understanding-node-js
## piccoli esempi pratici per capire node-JS : backend


* [code separation](/code-separation)
	 - utilizzo di require ed exports (common JS)
	  
* [utilizzo di modulo core(http)](/core-http-module)
	- creazione server senza  pacchetti
	- dipendenze dev: nodemon per il riavvio automatico del server quando subisce cambiamenti
	
* [utilizzo file system](/file-system)
	- controlla se il file cambia
	- leggere contenuto file
	
* [utilizzo framework express (basic)](/express-module)
* [utilizzo framework express (medio-avanzato)](/express-api)
	- response in json
	- utilizzo di
		- code separation per mettere le response nella cartella controllers (common JS)
		- code separation per mettere le routes nella cartella routes (common JS)
		- utilizzo di express.route
* [utilizzzo os module](/os-module)
* [utilizzo url module](/core-url-module)
* [utilizzo di event module](/core-event-module)
	- esempio di utilizzo EventEmitter
	- esempio di logger con scrittura su file del log
* [esempio di web-server](/web-server-http-module)
	- solo http module
	- load statico delle pagine(vedi nei commit)
	- load dinamico delle pagine con gestione del 404
