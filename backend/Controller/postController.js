const post = require("../moduls/Post.Model")
module.exports.allPost=async(req,res)=>{
    try {
        const showAllPost=await post.find();
        res.status(200).json({
            message:true,
            showAllPost
        })

    } catch (error) {
        console.error(error)
        res.status(201).json({
            success:false,
            Message:error.message,
            Error:error

        })
    }
}