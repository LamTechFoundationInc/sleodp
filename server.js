var express = require('express'),
cors = require('cors'),
fs = require('fs'),
async = require('async'),
zlib = require('zlib'),
imagemin = require('imagemin'),
imageminJpegtran = require('imagemin-jpegtran'),
imageminPngquant = require('imagemin-pngquant'),
httpsRedirect = require('express-https-redirect'),
app = express();
app.use('/', httpsRedirect());
app.use(cors());
app.options('*', cors());

// imagemin([__dirname + '/www/assets/imgs/*.{jpg,png}'], 'www/assets/imgs', {
// 	plugins: [
// 		imageminPngquant({quality: '65-80'})
// 	]
// }).then(files => {
// });

// imagemin([__dirname + '/www/assets/imgs/candidate/*.{jpg,png}'], 'www/assets/imgs/candidate', {
// 	plugins: [
// 		imageminPngquant({quality: '65-80'})
// 	]
// }).then(files => {
// });

// imagemin([__dirname + '/www/assets/imgs/party/*.{jpg,png}'], 'www/assets/imgs/party', {
// 	plugins: [
// 		imageminPngquant({quality: '65-80'})
// 	]
// }).then(files => {
// });

app.get('*.html', function (req, res, next) {
	file = fs.readFile(__dirname + '/www' + req.url, 'utf8', function(err, data) {
		zlib.gzip(data, function(_, file) {
			res.writeHead(200, {'Content-Type': 'text/html', 'Content-Encoding': 'gzip'});
			res.end(file);
		})
	})
});

app.get('*.js', function (req, res, next) {
	file = fs.readFile(__dirname + '/www' + req.url, 'utf8', function(err, data) {
		zlib.gzip(data, function(_, file) {
			res.writeHead(200, {'Content-Type': 'text/javascript', 'Content-Encoding': 'gzip'});
			res.end(file);
		})
	})
});

app.get('*.css', function (req, res, next) {
	file = fs.readFile(__dirname + '/www' + req.url, 'utf8', function(err, data) {
		zlib.gzip(data, function(_, file) {
			res.writeHead(200, {'Content-Type': 'text/css', 'Content-Encoding': 'gzip'});
			res.end(file);
		})
	})
});

app.get('*.woff2', function (req, res, next) {
	file = fs.readFile(__dirname + '/www' + req.url, 'utf8', function(err, data) {
		zlib.gzip(data, function(_, file) {
			res.writeHead(200, {'Content-Type': 'font', 'Content-Encoding': 'gzip'});
			res.end(file);
		})
	})
});

// app.get('*.jpg', function(req, res, next) {
// 	imagemin([__dirname + '/www' + req.url], {
// 		plugins: [
// 			imageminJpegtran()
// 		]
// 	}).then(files => {
// 		res.end(files[0].data);
// 	});
// })

// app.get('*.png', function(req, res, next) {
// 	imagemin([__dirname + '/www' + req.url], {
// 		plugins: [
// 			imageminPngquant({quality: '65-80'})
// 		]
// 	}).then(files => {
// 		res.end(files[0].data);
// 	});
// })

app.use(express.static('www'));

var urls = {
	polling_centre: "www/assets/resources/polling-centres/",
	president: "www/assets/results/all-president-election-results/",
    parliament: "www/assets/results/all-parliamentary-election-results/",
    mayor: "www/assets/results/all-mayor-election-results/",
    villageheadman: "www/assets/results/all-village-headman-election-results/",
    councilor: "www/assets/results/all-councilor-election-results/",
    president_2018: "www/assets/results/all-president-polling-centre-results-2018/",
    parliament_2018: "www/assets/results/all-parliamentary-polling-centre-results-2018/",
    mayor_2018: "www/assets/results/all-mayor-polling-centre-results-2018/",
    councilor_2018: "www/assets/results/all-councilor-polling-centre-results-2018/",
    villageheadman_2018: "www/assets/results/all-villageheadman-polling-centre-results-2018/"
}

var _whole_results = {};

app.get('/election_results', function(req, res, next) {
	async.forEachOf(urls, function(url, key, callback) {
		fs.readdir(url, function(err, names) {
			async.map(names, function(name, callback) {
				fs.readFile(url + name, 'utf8', function(err, contents) {
					callback(null, contents == "" ? [] : JSON.parse(contents));
				});
			}, function(err, results) {
				if (err) res.send([]);

				var election_results = [];
				results.forEach(function(items) {
					election_results = election_results.concat(items);
				});

				_whole_results[key] = election_results;
				callback(null)
			})
		})
	}, function(err) {
		res.writeHead(200, {'Content-Type': 'application/json', 'Content-Encoding': 'gzip'});
		var buf = new Buffer(JSON.stringify(_whole_results), 'utf-8');
		zlib.gzip(buf, function(_, result) {
			res.end(result);
		})
	})
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});