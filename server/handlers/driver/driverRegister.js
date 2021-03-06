const driverRegister = require("../../models/driverDetails");

module.exports = (req, res)=>{
	const driverUser = new driverRegister.driverDetails(),
		err = req.validationErrors();

	let uname = req.body.username,
		pwd = req.body.password,
		email = req.body.email,
		fname = req.body.fname,
		lname = req.body.lname;

	req.checkBody('username','username must not be empty').notEmpty();
	req.checkBody('password','password must not be empty').notEmpty();
	req.checkBody('fname','fname must not be empty').notEmpty();
	req.checkBody('lname','lname must not be empty').notEmpty();

	if(err) {
		res.status(400).send({ "message": "Missing parameter" });
	} else {
		driverUser.dUname = uname;
		driverUser.dPwd = pwd;
		driverUser.dEmail = email;
		driverUser.dFname = fname;
		driverUser.dLname = lname;
		res.json(driverUser);
	}
};