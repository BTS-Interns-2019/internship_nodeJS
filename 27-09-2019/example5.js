const http = require ('http');
const fs = require ('fs');

const app = http.createServer((req, res) => {
    fs.stat('../HARINA.mp4', (err, stats) => {
        if (err) {
            throw Error;
        }

        const streaming = fs.createReadStream('../HARINA.mp4');
        filesize = stats.size;

        res.writeHead(200, { 'content-type': 'video/mp4', 'content-length': filesize});
        streaming.pipe(res);
    });
});

app.listen(5000, '127.0.0.1');
console.log('Server listen on port 5000');
