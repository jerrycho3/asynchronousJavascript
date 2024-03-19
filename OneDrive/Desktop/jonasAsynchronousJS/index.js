const fs = require("fs");
const superagent = require("superagent");

//create a readfilepro func bcos it returns a promise,instead of a callbck function

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    // this is where we do our asynchronous functions
    fs.readFile(file, (err, data) => {
      if (err) reject("i could not find the file");
      resolve(data);
    });
  });
};

//we can consume promises using async await
const getDogPic = async () => {
  try {
    const data = readFilePro(`${__dirname}/dog.txt`);
    console.log(`breed:${data}`);

    //awaa

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(req.body.message);

    await writeFilePro("dog-img.txt", res.body.message);
    console.log("random dog image saved to file");
  } catch (err) {
    console.log(err);
  }
};
getDogPic();

// const writeFilePro = (file, data)=>{
//     return new Promise((resolve, reject) => {
//         // this is where we do our asynchronous functions
//         fs.writeFile(file, data, err =>{
//             if(err) reject("could not write file")
//             resolve('success')
//         })
// })
// }
// readFilePro(`${__dirname}/dog.txt`)
// .then(data=>{
//     console.log(`breed:${data}`);

//     return  superagent
//     //we need the data object thtwe got before to do ths get request insid the callback func of d readfile func
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
// }).then( res=>{
//     if(err) return console.log(err.message)
//     console.log(res.body.message)

//     return writeFilePro("dog-img.txt", res.body.message)
// })
//   .then(()=>{
//     console.log("random dog image saved to file")
//   })
//   .catch(err=>{
// console.log(err.message)
//   })

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`breed:${data}`);

//   //this should do the http request
//   superagent
//   //we need the data object thtwe got before to do ths get request insid the callback func of d readfile func
//   .get(`https://dog.ceo/api/breed/${data}/images/random`)
//   .end((err, res)=>{
//     if(err) return console.log(err.message)
//     console.log(res.body.message)
// })

// //we want to save the image that we got from the get request
// fs.writeFile("dog-img.txt", res.body.message, err=>{
//     if(err) return console.log(err.message)
//     console.log("random dog image saved to file")
// })

// });
