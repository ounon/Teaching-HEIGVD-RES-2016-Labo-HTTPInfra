var Chance = require('chance');
var chance = new Chance();

// console.log("Bonjour " + chance.name()); 

const Hapi = require('hapi');

const app = new Hapi.Server();
// on se met a l'écoute sur le port 3000
app.connection({ port: 3000 });


app.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(generateEmails());
    }
});  

app.route({
    method: 'GET',
    path: '/test',
    handler: function (request, reply) {
        reply('Hello again, tes RES!');
    }
});


app.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Accepting HTTP requests on port 3000.');
});

function generateEmails(){
	var numberOfEmails = chance.integer({
		min: 5,
		max:25
	})
	console.log(numberOfEmails);
	var emails = [];
	for (var i = 0; i< numberOfEmails; i++){
		var domain = chance.domain({tld: 'ch'});
		emails.push({
			domain: domain,
			mail: chance.email({domain: domain})	
		});
	};
	console.log(emails);
	return emails;
}