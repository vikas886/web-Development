const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Forms</title>
  </head>
  <body>
      <h2>This is html forms tutorial</h2>
  
      <form action="backend.php">
          <label for="name">Name</label>
          <div>
              <input type="text" name="myname" id="name">
  
          </div>
          <br>
          <label for="role">Role</label>
          <div>
              <input type="text" name="myrole" id="role">
  
          </div>
          <br>
          <label for="mail">Email</label>
          <div>
              <input type="email" name="myemail" id="mail">
          </div>
          <br>
          <label for="dob">DOB</label>
          <div>
              <input type="date" name="mydob" id="dob">
          </div>
          <br>
          <label for="num">Phone</label>
          <div>
              <input type="number" name="myphone" id="num">
          </div>
          <br>
          <label for="eli">Are you eligibile?</label>
          <div>
              <input type="checkbox" name="myeligibility" id="eli">
          </div>
          <br>
          <div>
              Gender:Male<input type="radio" name="mygender"> Female<input type="radio" name="mygender">
          </div>
          <br>
          <div>
             Write about you: <br> <textarea name="myself" id="" cols="30" rows="5"></textarea>
          </div>
          <div>
              <label for="car">Car</label>
              <select name="mycar" id="car">
                  <option value="ind">indica</option>
                  <option value="swift" selected>swift</option>
                  <option value="i10">i10</option>
              </select>
          </div>
          <br>
          <div>
              <input type="submit" value="Submit Now">
              <input type="reset" value="Reset Now">
          </div>
      </form>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
