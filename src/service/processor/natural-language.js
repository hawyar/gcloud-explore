require('dotenv').config();
const fs = require('fs');

async function main() {
  const language = require('@google-cloud/language');

  // Instantiates a client
  const client = new language.LanguageServiceClient({
    keyFilename: process.env.GOOGLE_SECRET,
  });

  // The text to analyze
  const text = `You can also use this method with promises. The readFile method will return a promise if you do not pass a callback function.`;

  const document = {
    content: text,
    type: 'PLAIN_TEXT',
  };

  // Detects the sentiment of the text
  const [result] = await client.analyzeSentiment({ document: document });
  const sentiment = result.documentSentiment;

  const entity = await client.analyzeEntities({ document: document });

  const entities = entity[0].entities;

  function makeJson(dir, data, path, callback) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    fs.writeFile(path.join(dir, path), JSON.stringify(data, null, 4), (err) => {
      if (err) return err;
    });
    callback();
  }

  entities.forEach((el, val = 1) => {
    makeJson(`result`, el, `file-${val + 1}.json`, () =>
      console.log(`✅ Success: ${val + 1} file created`)
    );
  });

  console.log(`Text: ${text}`);
  console.log(`Sentiment score: ${sentiment.score}`);
  console.log(`Sentiment magnitude: ${sentiment.magnitude}`);
  console.log('------------');

  function humanize(score) {
    score >= 0.8 ? console.log('Happy') : console.log(`Why so mad broski`);
  }

  humanize(sentiment.score);

  const [classification] = await client.classifyText({ document: document });
  console.log('Categories:');
  classification.categories.forEach((category) => {
    console.log(`Name: ${category.name}, Confidence: ${category.confidence}`);
  });
}

main();
