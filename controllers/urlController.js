const shortid = require("shortid");
const urlModel = require("../models/urlmodel");
async function sayHello(req,res)
{
    res.render("../views/home",{}); 
}

async function handleIncomingUrl(req,res)
{
    const body = req.body;
    if(!body.originalUrl)
        res.status(400).json({err:"url is required"});
    const id = shortid();  
    await urlModel.create({
        originalUrl: body.originalUrl,
        updatedUrl: id,
        visitHistory: [],
    });

    res.render("home",{
        bodies: body.originalUrl,
        shortid: id,
    })

}

async function handleShowallUrls(req,res)
{
    const data = await urlModel.find({});

    res.render("showAll",{
        urls: data,
    });
}

async function handleRedirection(req,res)
{
    const urls = req.params.urls;
    // console.log(urls);
    const result = await urlModel.findOne({updatedUrl: urls});
    console.log(result.originalUrl);
    res.redirect(result.originalUrl);
}

module.exports = {
    sayHello,
    handleIncomingUrl,
    handleShowallUrls,
    handleRedirection,
}