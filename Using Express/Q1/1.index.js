const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      let parsedData;
      try {
        parsedData = JSON.parse(body);
      } catch (err) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Invalid JSON data");
        return;
      }

      switch (req.url) {
        case "/men":
          saveMenProducts(parsedData);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              status: "success",
              message: "Men products data saved successfully.",
              data:parsedData,
            })
          );
          break;

        case "/women":
          saveWomenProducts(parsedData);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              status: "success",
              message: "Women products data saved successfully.",
              data: parsedData,
            })
          );
          break;

        default:
          res.writeHead(404, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ status: "error", message: "Page not found" })
          );
          break;
      }
    });
  } else {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Men & Women Dummy Data");
        break;

      case "/other":
      default:
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");

        break;
    }
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

function saveMenProducts(products) {
  
    console.log("Received men products:", products);
}

function saveWomenProducts(products) {
  console.log("Received women products:", products);
}
