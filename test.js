//引用'http'模組
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mineTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};

//設定server網址，因為在本機端測試，所以輸入127.0.0.1
//const hostname = '127.0.0.1'  //上傳至伺服器需拿掉

//port 號會由 Heroku 給予，因此不再自行指定
const port = process.env.PORT || 3000;

//新增一個server並指定他的頁面資訊，內容為'Hello World!'
const server = http.createServer((req, res) => {
    var uri = url.parse(req.url).pathname;
    var fileName = path.join(process.cwd(), unescape(uri));
    console.log('Loading ' + uri);
    var stats;

    //check if the file is enter
    try{
        stats = fs.lstatSync(fileName);
    } catch(e) {
        res.writeHead(404, {'Content-type': 'text/plain'});
        res.write('404 Not Found!\n');
        res.end();
        return;
    }

    //get the file type to check is html type
    if(stats.isFile()){ //xxxx.xxxx.html (using reverse to make "html" in the index 0)
        console.log(path.extname(fileName));
        var mineType = mineTypes[path.extname(fileName).split(".").reverse()[0]];
        res.writeHead(200, {'Content-type': mineType});

        var fileStream = fs.createReadStream(fileName);
        fileStream.pipe(res);
    } else if(stats.isDirectory()){ //如果發現路徑是資料夾，則找index.html
        res.writeHead(302, {
            'Location': 'index.html'
        });
        res.end();
    } else{
        res.writeHead(500, {'Content-type': 'text/plain'});
        res.write('500 Internal Error\n');
        res.end();
    }
});

//監聽得到的 port 號開啟
server.listen(port, () => console.log(`Listening on ${port}`));