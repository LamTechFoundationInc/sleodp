var express = require('express'),
cors = require('cors'),
fs = require('fs'),
async = require('async'),
bodyParser = require('body-parser'),
app = express();
app.use(cors());
app.options('*', cors());
app.use(express.static('www'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var urls = {
	polling_centre: "www/assets/resources/polling-centres/",
	president: "www/assets/results/all-president-election-results/",
    parliament: "www/assets/results/all-parliamentary-election-results/",
    mayor: "www/assets/results/all-mayor-election-results/",
    chairperson: "www/assets/results/all-chairperson-election-results/",
    villageheadman: "www/assets/results/all-village-headman-election-results/",
    councilor: "www/assets/results/all-councilor-election-results/",
    president_2018: "www/assets/results/all-president-polling-centre-results-2018/",
    parliament_2018: "www/assets/results/all-parliamentary-polling-centre-results-2018/",
    mayor_2018: "www/assets/results/all-mayor-polling-centre-results-2018/",
    chairperson_2018: "www/assets/results/all-chairperson-polling-centre-results-2018/",
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
		res.send(_whole_results)
	})
})

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});