async function getPost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok)
       throw new Error('something went wrong!');
    return response.json();
 }
 
 const data = await getPost();
 console.log(data);
 const postContainer = document.querySelector('.posts');
 
 data.forEach((object, index) => {
    const h1Element = document.createElement('h1');
    h1Element.innerText = `title: ${object.title}`;
    postContainer.append(h1Element);
 });
