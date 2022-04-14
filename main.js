import fetch from 'node-fetch';
import express, { response } from 'express';

const app = express();

var apikey = '';
var apikeyHistorical = '';

app.listen(8000, '0.0.0.0', () => console.log('listening on port 8000'));
app.use(express.static('public'));
app.use(express.text());
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.post('/api/query', async(request, response) => {
    const data = request.body;
    console.log(data);
    let searchData = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ 
    data +'&appid=' + apikey);
    var obj = await searchData.json();
    if(obj == null) {
        response.sendStatus(404);
    } else {
        response.send(obj);
    }
})

app.post('/api/historical', async(request, response) => {
    const data = request.body;
    console.log(data);
    let searchData = await fetch('http://api.weatherbit.io/v2.0/history/daily' + data + '&key=' + apikeyHistorical);
    var obj = await searchData.json();
    if(obj == null) {
        response.sendStatus(404);
    } else {
        response.send(obj);
    }
})