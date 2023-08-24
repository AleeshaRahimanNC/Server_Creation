const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const urlp = url.parse(req.url, true).pathname;
    if (urlp === '/') {
        fs.readFile('./home.html', "utf-8", (err, page) => {
            if (err) {
                res.write("Something went wrong");
                res.end();
            } else {
                res.writeHead(200, {
                    "content-type": "text/html"
                });
                res.write(page);
                res.end();
            }
        });
    } else if (urlp === '/signup') {
        fs.readFile('./signup.html', "utf-8", (err, page) => {
            if (err) {
                res.write("Something went wrong");
                res.end();
            } else {
                res.writeHead(200, {
                    "content-type": "text/html"
                });
                res.write(page);
                res.end();
            }
        });
    } else if (urlp === '/login') {
        fs.readFile('./login.html', "utf-8", (err, page) => {
            if (err) {
                res.write("Something went wrong");
                res.end();
            } else {
                res.writeHead(200, {
                    "content-type": "text/html"
                });
                res.write(page);
                res.end();
            }
        });
    } else if (urlp === '/contact') {
        fs.readFile('./contact.html', "utf-8", (err, page) => {
            if (err) {
                res.write("Something went wrong");
                res.end();
            } else {
                res.writeHead(200, {
                    "content-type": "text/html"
                });
                res.write(page);
                res.end();
            }
        });
    }
}).listen(3000)