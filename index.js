const PORT = 8080;
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("<!doctype html><title>Hello World!</title><p>Hello World!");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.static(`${__dirname}/projects`));

app.get("/:project", function (req, res) {
    console.log("get a project");
    const project = req.params.project;
    console.log(`${__dirname}/projects/${project}/index.html`);
    res.send(`${__dirname}/projects/${project}/index.html`);
});

app.listen(PORT, () => {
    console.log(`✅ I'm listening on port ${PORT}\n\nhttp://localhost:${PORT}`);
});
