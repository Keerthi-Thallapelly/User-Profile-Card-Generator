const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/profile", (req, res) => {

    const { name, bio, imageUrl } = req.body;

    res.json({
        name,
        bio,
        imageUrl,
        profileId: Math.floor(Math.random() * 10000),
        createdAt: new Date().toLocaleString()
    });

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});