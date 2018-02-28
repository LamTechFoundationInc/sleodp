var express = require('express'),
cors = require('cors'),
herokuProxy = require('heroku-proxy'),
fs = require('fs'),
async = require('async'),
bodyParser = require('body-parser'),
app = express();
app.use(cors());
app.options('*', cors());
app.use(herokuProxy({
	hostname: 'electiondata.io',
	prefix  : 'api',
	protocol: 'https'
}));
app.use(express.static('www'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var urls = {
	polling_centre: "www/assets/resources/polling-centres/",
	president: "www/assets/results/all-president-election-results.json",
    parliament: "www/assets/results/all-parliamentary-election-results.json",
    mayor: "",
    chairperson: "",
    councilor: "www/assets/results/all-councilor-election-results.json",
    villageheadman: "www/assets/results/all-village-headman-election-results",
    president_2018: "www/assets/results/all-president-polling-centre-results-2018/",
    parliament_2018: "www/assets/results/all-parliamentary-polling-centre-results-2018/",
    mayor_2018: "www/assets/results/all-mayor-polling-centre-results-2018/",
    chairperson_2018: "www/assets/results/all-chairperson-polling-centre-results-2018/",
    councilor_2018: "www/assets/results/all-councilor-polling-centre-results-2018/",
    villageheadman_2018: "www/assets/results/all-villageheadman-polling-centre-results-2018/"
}

app.get('/polling_centres', function(req, res, next) {
	fs.readdir(urls['polling_centre'], function(err, names) {
		async.map(names, function(name, callback) {
			fs.readFile(urls['polling_centre'] + name, 'utf8', function(err, contents) {
				callback(null, JSON.parse(contents));
			});
		}, function(err, results) {
			if (err) res.send([]);

			var polling_centres = [];
			results.forEach(function(items) {
				polling_centres = polling_centres.concat(items);
			});

			res.send(polling_centres);
		})
	});
});

app.post('/election_results', function(req, res, next) {
	var fields = req.body;
	if (Number(fields.year) >=2018) {
		fs.readdir(urls[fields.type + '_' + fields.year], function(err, names) {
			async.map(names, function(name, callback) {
				fs.readFile(urls[fields.type + '_' + fields.year] + name, 'utf8', function(err, contents) {
					callback(null, JSON.parse(contents));
				});
			}, function(err, results) {
				if (err) res.send([]);

				var election_results = [];
				results.forEach(function(items) {
					election_results = election_results.concat(items);
				});

				res.send(election_results);
			})
		});
	}
	else {
		fs.readFile(urls[fields.type], 'utf8', function(err, contents) {
			if (err) res.send([]);

			res.send(JSON.parse(contents));
		});
	}
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});