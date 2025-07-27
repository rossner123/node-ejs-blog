import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path"
import { fileURLToPath } from "url";

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = []

app.get("/", (req, res) => {
    res.render("index.ejs", {
        posts: posts,
    })

    console.log(posts)
})

app.get("/post", (req, res) => {
    
})

app.get("/new", (req, res) => {
    res.render("new.ejs")
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
    const postId = req.params.id

    res.render("edit.ejs", {
        postId: postId
    })
})

app.post("/edit/:id", (req, res) => {
    const idParaEditar = req.params.id;
    const { newTitle, newContent } = req.body

    const novosDados = {
        title: newTitle,
        content: newContent
    }

    const indice = posts.findIndex(post => post.id === Number(idParaEditar));

    if (indice !== -1) {
      posts[indice].title = newTitle;
      posts[indice].content = newContent;
    }

    res.redirect("/")
})

app.post("/delete/:id", (req, res) => {
    const idParaExcluir = req.params.id;

    const indice = posts.findIndex(post => post.id === Number(idParaExcluir));

    posts.splice(indice, 1)

    res.redirect("/")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...")
})