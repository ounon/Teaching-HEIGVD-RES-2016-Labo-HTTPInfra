$(function(){
	console.log( "Loading emails" );
	
	function loadEmails(){
		$.getJSON( "/api/emails/", function( emails ){
			console.log(emails);
			var message = "No emails is here";
			if (emails.length > 0){
				message = emails[0].domain + " " + emails[0].mail;
			}
			$(".subheading").text(message);
		});
	};
	loadEmails();
	setInterval(loadEmails, 2000);
	
});