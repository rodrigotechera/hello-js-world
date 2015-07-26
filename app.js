var app = jooby();

app.get('/', function (req) {
  return 'Hello ' + req.param('name').value('World') + '!';
});
