import { Request, Response } from "express"

const home = (req: Request, res: Response) => {
    res.send("Rawnaq backend")
}

module.exports = home