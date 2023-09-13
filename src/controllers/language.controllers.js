import { getConnection } from "./../database/database";

const getLanguage = async (req, res)=>{
    const connection = await getConnection();
    const result = await connection.query("SELECT Id, name, programmers FROM language");
    console.log(result);
    res.json(result);
};





const addLanguage = async (req, res)=> {
    try {
        console.log(req.body);
        const connection = await getConnection();
        res.json("addLanguage");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    getLanguage,
    addLanguage
};