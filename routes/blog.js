const express=require("express")
const path = require("path")
const blogs = require("../data/blog")
const router = express.Router()

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname, "../templates/index.html"))
    res.render("home")
})

router.get('/blogs',(req,res)=>{
    // blogs.forEach(Element => {
    //     console.log(Element.title)
    // });
    // res.sendFile(path.join(__dirname, "../templates/blogs.html"))
    res.render("blogs",{blogs:blogs})
})


router.get('/blogpost/:slug',(req,res)=>{
    myblog = blogs.filter(e=>{
        return e.slug==req.params.slug
    })  
    // console.log(myblog)
    //  res.sendFile(path.join(__dirname, "../templates/blogpost.html"))
    res.render("blogpost",{title:myblog[0].title,content:myblog[0].content })
})
 
module.exports=router;