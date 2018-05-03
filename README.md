
# Progressive rendering sample

Progressive rendering is a killing but missused feature of the web, this sample use a server with streams and progressive JSON
parsing to use Progressive rendering and show the advantages of it.

# Run Guide
* Install dependencies:
  > `npm install`
* Run server:
  > `node index.js`
* Open your browser and go to <a href="http://127.0.0.1:8080/slow.html" target="_blank">http://127.0.0.1:8080/slow.html</a> to 
  watch a slow version (without progressive rendering).
* Open your browser and go to <a href="http://127.0.0.1:8080" target="_blank">http://127.0.0.1:8080</a> to 
  watch a fast version (with progressive rendering).
  

# Releated Links
* [Jake Archibald Streams Guide](https://jakearchibald.com/2016/streams-ftw/).
* [Oboe.js - A library to parse JSON data](http://oboejs.com/).
