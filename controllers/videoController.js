import routes from "../routes"
export const home = (req, res) =>  res.render("home", {pageTitle: "홈", videos});
export const search = (req, res ) =>{
    const {
        query :{ term: searchingBy}
    } = req;
    res.render("search", {pageTitle: "검색", searchingBy, videos });

}
export const getUpload = (req, res ) =>
    res.render("upload", {pageTitle: "업로드"});
export const postUpload = (req, res ) =>{
    const{
        body:{file, title, description}
    }= req;
    //Todo Upload and save Video
    res.redirect(routes.videoDetail(324393))
}

export const videoDetail = (req, res ) =>res.render("videoDetail", {pageTitle: "비디오상세"});
export const editVideo = (req, res ) =>res.render("editVideo", {pageTitle: "비디오 수정"});
export const deleteVideo = (req, res ) =>res.render("deleteVideo", {pageTitle: "비디오 삭제"});