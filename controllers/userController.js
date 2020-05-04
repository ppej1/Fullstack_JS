import routes from "../routes";

export const getJoin = (req, res) =>{
    res.render("join", {pageTitle: "조인"}); 

} 
export const postJoin = (req,res) =>{
    const{
        body:{ name, email,password, password2}
    } = req;
    if(password !== password2){
        res.status(400);
        res.render("join",{pageTitle:"Join"});
    } else {
        // To Do :Register User
        //To Do: Log User In
        res.redirect(routes.home)
    }
}
export const getLogin = (req, res) => {
    res.render("login", {pageTitle: "로그인"});
}
export const postLogin = (req, res) => 

{
    res.redirect(routes.home)
}
export const logout = (req, res) =>{
    res.redirect(routes.home)
}
export const userDetail = (req, res) => res.render("userDetail", {pageTitle: "유저상세"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle: "유저정보수정"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle: "비밀번호 변경"});