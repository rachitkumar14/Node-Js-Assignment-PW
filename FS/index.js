const fs=require('fs');

            // ---> Write data in nodejs_architecture.txt using fs Module
// let text="Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.";
// fs.writeFileSync('nodejs_architecture.txt',text);
 

           // ---> Read the data of nodejs_architecture.txt using fs module in the console
// let data=fs.readFileSync('nodejs_architecture.txt','utf-8');           
// console.log(data);



          //  ----> ADD additional data in the nodejs_architecture.js using append 
// let appendData="Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier."
// fs.appendFileSync('nodejs_architecture.txt',appendData);
// let appendDataRead=fs.readFileSync('nodejs_architecture.txt','utf-8');
// console.log(appendDataRead);



         //  ----> Delete the nodejs_architecture and show it into the console using fs module
  // fs.unlink('nodejs_architecture.txt',(err)=>{
  //   if(err)
  //   {
  //     console.log('File Not deleted');
  //   }
  //   else{
  //     console.log('File delete Successfully');
  //   }
  // }) 
