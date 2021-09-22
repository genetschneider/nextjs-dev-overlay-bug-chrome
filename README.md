# Next dev error overlay not working in Chrome example

This example repository shows how the dev error overlay is not workign in Chrome when using a custom assetPrefix in next.config.js.

## Running the example
- `node asset-cdn.js` // starts the mock cdn server
- `npm run dev`
- open `http://localhost:3000`
- - You should see a blank white screen with an error in dev console
- - In Safari or Firefox, the dev overlay shows as expected showing the error and stack