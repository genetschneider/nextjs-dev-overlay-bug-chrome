const axios = require('axios');
const app = require('express')();
const port = 7777;

(() => {
	// Mock CDN
	app.get('/assets/*', async (req, res) => {
		const { 0: filename } = req.params;

		console.log(`Proxying ${filename}`);

		try {
			// Get the actual asset from nextjs server
			// Send the actual asset back to client
			const client = 'http://localhost:3000';
			const { data } = await axios.get(`${client}/${filename}`);

			res.setHeader('Content-Type', 'application/javascript');
			res.send(data);
		} catch (e) {
			console.log(e.message, filename);

			res.status(404).send();
		}
	});

	app.listen(port, () => console.log('Mock CDN listening on', port));
})();