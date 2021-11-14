let express = require("express");
let axios = require("axios");
const PORT = process.env.PORT || 3000;
let app = express();

app.use(express.json());
app.use(express.static("public"));

async function getLink(videoURL){
	try {
		let res = await axios.get(videoURL);
		let link = res.data.split('hd_src:"')[1].split('",')[0];
		return {
			status:"success",
			link:link
		};
	} catch(error){
		return {
			status:"error",
			link:null
		};
	}
}

app.get("/download", async function(req,res){
	let url = req.query.videoURL;
	let data = await getLink(url);
	res.json(data);
});


app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
  });