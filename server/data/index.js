const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const findAsset = (name) => {
    return new Promise ((resolve, reject) => {
        let assetPath = path.join(__dirname, name);
        // todo db call, fs === mock data
        fs.readFile(assetPath, {encoding: 'utf-8'}, (err, asset) => {
            if (err) {
                reject(err)
            } else {
                resolve(asset)
            }
        })

    })
}
app.get('/fullstack/mock', async (req, res) => {
    res.send(await findAsset('/mock.json'));
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`))
