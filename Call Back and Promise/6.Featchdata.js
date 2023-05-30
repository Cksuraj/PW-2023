// creating the function which Featch the data form the API

async function featchdata(){
    // await is keyword to featch the data from API || The Response from the API is stroed into the Data variabel 
    const data= await
    fetch('https://jsonplaceholder.typicode.com/todos/1');
    // after featching the data form Api It is stroing the data into the data.json || and then into variavle DataApi
    const DataApi = await data.json();
    console.log(DataApi);
}

// after writing the funtion feacthing the data form api

featchdata();