import express from 'express'

const app = express()

app.listen(80, () => console.log("API Running on PORT 80"))

app.get('/', (req, res) => {
    res.redirect("https://dhairyashah.dev/")
})
