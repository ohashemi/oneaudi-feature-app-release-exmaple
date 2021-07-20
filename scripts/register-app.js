const https = require('follow-redirects').https;
const fs = require('fs');
const path = require('path');
const fileName = path.join(__dirname, '..', 'package.json');
const packageJson = require(fileName);

const options = {
  method: 'POST',
  hostname: 'app-store.api.prod.one.audi.com',
  path: '/api/v1/apps',
  headers: {
    'Content-Type': 'application/json',
  },
  maxRedirects: 20,
};

const addAppstoreInformation = (appId) => {
  packageJson.appStore.appId = appId;
  fs.writeFileSync(fileName, JSON.stringify(packageJson, null, 2));
};

// Standard library for HTTP Requests in Node, doesn't rely on installed dependencies
const req = https.request(options, (res) => {
  let chunks = [];

  res.on('data', (chunk) => {
    chunks.push(chunk);
  });

  res.on('end', () => {
    let body = Buffer.concat(chunks);
    let bodyString = body.toString();
    let response = JSON.parse(bodyString);

    if (response.id && response.accessKey) {
      console.log(`App Id (saved in package.json): ${response.id}`);
      console.log(`App Access Key: ${response.accessKey}`);
      console.log('DO NOT LOSE THE APP ACCESS KEY.\nPlease store it safely.');

      // Save the App Id in the project package.json
      addAppstoreInformation(response.id);
    } else {
      console.error(`Could not register app. ${response.errorMessage}`);
    }
  });

  res.on('error', (error) => {
    console.error(`Could not register app. ${error}`);
  });
});

// Get the app name without prefixes (e.g.: '@volkswagen-onehub')
let appName = packageJson.name.split('/').slice(-1)[0];

let postData = JSON.stringify({
  name: appName,
});

req.write(postData);
req.end();
