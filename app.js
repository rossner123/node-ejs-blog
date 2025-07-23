import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path"
import { fileURLToPath } from "url";

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [
    {
        id: 1,
        title: "Post Test"
    }
]

app.get("/", (req, res) => {
    res.render("index.ejs", {
        posts: posts,
    })

    console.log(posts)
})

app.get("/new", (req, res) => {
    res.render("new.ejs",)
})

app.post("/new", (req, res) => {
    const { title, content } = req.body

    const post = {
        id: Date.now(),
        title: title,
        content: content,
    }

    posts.push(post)
    res.redirect("/")
})

app.get("/edit/:id", (req, res) => {
    res.render("edit.ejs", {

    })
})

app.post("/edit/:id", (req, res) => {
    res.render("edit.ejs", {

    })
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...")
})