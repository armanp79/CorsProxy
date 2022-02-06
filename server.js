const express = require('express')
const app = express()
const port = 8888
const cors = require('cors')
const request = require('request')



app.use(
   cors({
	//adjust origin based on where your webserver is running
	origin: ['http://localhost:3000'],
	// make credentials false if you are nott using any authentication
	credentials: true,
   })
);


// url should be api you are proxying to
const url = "http://18.189.77.245:4000"


app.use((req, res) => {
        console.log(req.url);
        req.pipe(request(url + req.url)).pipe(res)
})

app.listen(port, () => {console.log('listening on port:', port)})
