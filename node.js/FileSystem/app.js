const fs = require("fs");

// fs.writeFile("example.txt", "This is example text", (err) => {
//   if (err) console.log("Some Error Occured");
//   else {
//     console.log("File successfully created");
//     fs.readFile("example.txt", "utf-8", (err, data) => {
//       if (err) console.log("Some error occured");
//       else {
//         console.log("Data read from the file:" + data);
//         fs.rename("example.txt", "newfile.txt", (err) => {
//           if (err) console.log("Some error occured");
//           else {
//             console.log("File successfully renamed");
//             fs.appendFile("newfile.txt", "\nSome more example text", (err) => {
//               if (err) console.log("Some Error Occured");
//               else {
//                 console.log("Data successfully appended to the file");
//                 fs.readFile("newfile.txt", "utf-8", (err, data) => {
//                   if (err) console.log("Some error occured");
//                   else {
//                     console.log("Data read from the file:" + data);
//                     fs.unlink("newfile.txt", (err) => {
//                       if (err) console.log("Some error occured");
//                       else console.log("File deleted successfully");
//                     });
//                   }
//                 });
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// fs.writeFileSync("example.txt", "This is example text");
// console.log("File successfully created");
// console.log(fs.readFileSync("example.txt", "utf-8"));
// fs.renameSync("example.txt", "newfile.txt");
// console.log("File successfully renamed");

// fs.mkdir("example", (err) => {
//   if (err) console.log(err);
//   else {
//     console.log("Folder created");
//     fs.writeFile("example/example.txt", "This is example text", (err) => {
//       if (err) console.log(err);
//       else {
//         console.log("File created successfully");
//         fs.rmdir("example", { recursive: true }, (err) => {
//           if (err) console.log(err);
//           else console.log("Folder deleted");
//         });
//       }
//     });
//   }
// });

// const readStream = fs.createReadStream("example.txt", "utf8");
// const writeStream = fs.createWriteStream("example2.txt.gz");
// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });
const zlib = require("zlib");
// const gzip = zlib.createGzip();
// readStream.pipe(gzip).pipe(writeStream);
const readStream = fs.createReadStream("example2.txt.gz");
const writeStream = fs.createWriteStream("example2.txt");
const gunzip = zlib.createGunzip();
readStream.pipe(gunzip).pipe(writeStream);
