var gulp = require('gulp');
var fork = require('child_process').fork;
var path = require('path');
var request = require('request');
var fs = require('fs');
var async = require('async');

gulp.task('default', () => {
    const PORT = 3000;
    const DIST = path.join(__dirname, 'public');

    const serverProcess = fork(path.join('bin', 'www'), {
        env: {
            NODE_ENV: 'production'
        }
    });

    serverProcess.on('message', (message) => {
        if (message.success) {
            build();
        } else {
            console.error('Express Failed');
        }
    });

    function build() {
        var pages = {
            '/index': 'index.html',
            '/about': 'about.html',
            '/develop': 'develop.html',
            '/web-management': 'web-management.html',
            '/online-support': 'online-support.html',
            '/recruit': 'recruit.html',
            '/support': 'support.html',
            '/thankyou': 'thankyou.html',
            '/404': '404.html'
        };

        async.every(Object.keys(pages), (route, callback) => {
            const file = pages[route];
            const stream = request
                .get(`http://localhost:${PORT}${route}`)
                .on('error', (err) => {
                    console.error(err)
                })
                .pipe(fs.createWriteStream(path.join(DIST, file)));

            stream.on('finish', () => {
                callback(null, true);
            });
        }, () => {
            serverProcess.kill('SIGINT')
        });
    }
});