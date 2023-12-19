import path from "path";

import fileSchema from "./schema/file.schema.js";

export async function Set(req, res) {
    try {
        let { name } = req.body;
        let image = req.file;
        let result = await fileSchema.create({ name, image });
        if(result) {
            return res.json("Image upload successful!");
        }
        res.status(500).send("Image upload unsuccessful!")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error occured!");
    }
}

export async function Get(req, res) {
    try {
        let result = await fileSchema.find();
        if(result) {
            return res.json(result);
        }
        res.status(404).send("There is nothing to show")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error occured!");
    }
}

export async function Image(req, res) {
    try {
        let { image } = req.params;
        return res.sendFile(path.resolve(`./images/${image}`));
    } catch (error) {
        console.log(error);
        res.status(500).send("Error occured!");
    }
}