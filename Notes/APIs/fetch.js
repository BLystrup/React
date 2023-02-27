// Fetch method
fetch("http://www.example.com")
    .then(response =>{
        //do something
    }).catch(err => {
        console.log(err);
    })

// Can also write it using async (ES7)
let response = await fetch("http://www.example.com");

// html file to use fetch in
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Document</title>
// </head>
// <body>
//     <div id = "root"></div>
//     <script>
//         fetch("https://pokeapi.co/api/v2/pokemon")
//           .then(response => {
//             // not the actual JSON response body but the entire HTTP response
//             return response.json();
//         }).then(response => {
//             // we now run another promise to parse the HTTP response into usable JSON
//             console.log(response);
//         }).catch(err=>{
//             console.log(err);
//         });
//     </script>
// </body>
// </html>



