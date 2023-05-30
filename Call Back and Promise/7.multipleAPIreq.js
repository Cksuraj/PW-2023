
//  Creating funtion for multiple request from API to feach the data 

async function multipleapi(){

    // stroing the API resopons into the API1 and API2 useing Await keyword and getting mutlipal request at time by promise all

    const [Api1, Api2]=await Promise.all([
    // featching the data from API and retuning respons (json is belongs to file formate of Api)

    // arrow funtion for featchingthe API respons
        fetch("https://jsonplaceholder.typicode.com/todos/1").then((response)=> response.json()),

        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=> response.json())
        
    ]);

    

    // stroing the API data into the follwing object 
    const combineAPI ={
        todo:Api1,
        post:Api2,
    }

    return combineAPI;
}

// calling the function and Api data stored in the object 

multipleapi().then((data)=> console.log(data)); 
