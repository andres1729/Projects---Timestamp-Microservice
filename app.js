const express = require('express');
const app = express();

app.get('/api/timestamp/:dateString?', (request, response) => {
    const dateString = request.params.dateString;

    let date;

    if (!dateString) {
        date = new Date();
    } else {
        if (!isNaN(dateString)) {
            date = new Date(parseInt(dateString));
        } else {
            date = new Date(dateString);
        }
    }

    if (date.toString() === 'Invalid Date') {
        response.json({ error: date.toString() });
    } else {

        response.json({ unix: date.getTime(), utc: date.toUTCString() });
    }
});

app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(`${__dirname}/views/index.html`);
});

const portNumber = process.env.PORT || 8000;
app.listen(portNumber, () => {
    console.log(`listening on port ${portNumber}`);
});