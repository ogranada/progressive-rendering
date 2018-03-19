
const express = require('express');
const fs = require('fs');
const faker = require('faker');

const app = express()
app.disable('etag');
app.use(express.static('public'));

const HTML = fs.readFileSync('./templates/demo.html').toString();
const HTML2 = fs.readFileSync('./templates/demo_slow.html').toString();


app.get('/api/:id', (req, res)=>{
  res.setHeader('Content-Type', 'application/json');
  res.write('[\n');
  let cnt = 0;
  let ivl = setInterval(()=>{
    res.write(JSON.stringify({
      id: cnt+1,
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      age: faker.random.number(100),
      values: faker.random.words(5).split(' ')
    }));
    if(cnt === 10000){
      clearInterval(ivl);
      res.write('\n]');
      res.end();
    } else {
      res.write(',');
    }
    cnt++;
  }, 5);
});

app.get('/', (req, res)=>{
    res.status(200).send(HTML);
});

app.get('/slow.html', (req, res)=>{
    res.status(200).send(HTML2);
});

app.listen(8080, () => {
  console.log('ready...');
});

