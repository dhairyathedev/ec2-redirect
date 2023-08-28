import express from 'express'

const app = express()

app.listen(2402, () => console.log("API Running on PORT 2402"))

app.get('/', (req, res) => {
    res.redirect("https://dhairyashah.dev/")
})