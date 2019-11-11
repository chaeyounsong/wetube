import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const users = (req,res) => res.render('users', { pageTitle: "Users"});


// Join
export const getJoin = (req,res) => res.render('join', { pageTitle: "Join"});
export const postJoin = async (req, res, next) => {
    const {
        body : {name,email,password,password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    } else{
      try{
        const user = await User({
            name,
            email
        });
        await User.register(user, password);
        next();
    } catch(error){
        console.log(error);
    }
        //To Do : Log user in

    }
};

// Log-in
export const getlogin = (req,res) => res.render('login', { pageTitle: "Log-in"});
export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

//Log-out
export const logout = (req,res) => {
 //To Do : Process Log Out   
    res.redirect(routes.home);
}

export const changePassword = (req,res) => res.render('changePassword', { pageTitle: "Change Password"});
export const editProfile = (req,res) => res.render('editProfile', { pageTitle: "Edit Profile"});
export const userDetail = (req,res) => res.render('userDetail', { pageTitle: "User Detail"});
