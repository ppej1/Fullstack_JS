import routes from "../routes";
import Video from "../models/Video";

export const home = async(req, res) => {
    try{
        const videos = await Video.find({});
        res.render("home", {pageTitle: "홈", videos});
    }catch(error){
        //console.log(error);
        res.render("home", {pageTitle: "홈", videos});
    }

}
export const search = (req, res ) =>{
    const {
        query :{ term: searchingBy}
    } = req;
    res.render("search", {pageTitle: "검색", searchingBy, videos });

}
export const getUpload = (req, res ) =>
    res.render("upload", {pageTitle: "업로드"});
export const postUpload = async(req, res ) =>{
    const{
        body:{ title, description},
        file : {path}
    }= req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id))
}

export const videoDetail = (req, res ) =>res.render("videoDetail", {pageTitle: "비디오상세"});
export const editVideo = (req, res ) =>res.render("editVideo", {pageTitle: "비디오 수정"});
export const deleteVideo = (req, res ) =>res.render("deleteVideo", {pageTitle: "비디오 삭제"});