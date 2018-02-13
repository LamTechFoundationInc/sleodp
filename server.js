var express = require('express'),
cors = require('cors'),
app = express();
app.use(cors());
app.options('*', cors());
app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});