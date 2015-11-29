// app/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    app.get('/tm-orders', isLoggedIn, function(req, res){
	res.render('tm-orders.ejs', {
		user: req.session.user
	});
					
    });	

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.session.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================	
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    var User= require("./models/user.js");

     app.post("/signup", function(req, res){
        if (!req.body.email || !req.body.password){
                res.end("Username and Password required");
        }
        else{
                User.findOne({
                'local.email': req.body.email
                }, function(err, user){
                        if (err){
                                res.end("DB error");
                                console.log(err);
                        }
                        else if(user){
                                req.flash("signupMessage", "That email is already in use");
                                console.log("user exists");
                        }
                        else {
                                console.log("creating new user with "+req.body.email);
                                var newUser= new User();
                                newUser.local.email= req.body.email;
                                newUser.local.password= newUser.generateHash(req.body.password);

                                newUser.save(function(err){
                                        if (err) throw err;
                                        console.log("User "+req.body.email+" signed up!!");
                                        req.session.isAuthenticated= true;
                                        req.session.user= newUser;
                                        res.redirect("/profile");
                                });
                        }
                });
        }
    });
    
    app.post("/login", function(req, res){
        if (!req.body.email || !req.body.password){
                res.end("Username and Password required");
        }
        else{
                User.findOne({
                'local.email': req.body.email
                }, function(err, user){
                        if (err){
                                res.end("DB error");
                                console.log(err);
                        }
                        else if(user){
             
                                console.log("user exists");
                    
                                if (err) throw err;
                                console.log("User "+req.body.email+" signed up!!");
                                req.session.isAuthenticated= true;
                           	req.session.user= user;
                                res.redirect("/tm-orders"); 
                        }
                });
        }
    
    });	 
}

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.session.isAuthenticated)
        next();
    else{	
    // if they aren't redirect them to the home page
    res.redirect('/');
    }
}
