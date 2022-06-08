import { NextApiHandler } from "next";
import { XataClient } from "../../xata"

const client = new XataClient({
    databaseURL: "https://xata-learning-fvmet3.xata.sh/db/home",
    apiKey: process.env.XATA_API_KEY,
})

const handler: NextApiHandler = async (req, res) => {
    const { filter } = req.query;
    const data = filter ? await client.db.teams.filter({ name: { $contains: String(filter) } }).getAll() : await client.db.teams.getAll()
    res.end(JSON.stringify(data));
}

export default handler;