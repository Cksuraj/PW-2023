const express= require('express')

const app=express()

const PORT =3000;

app.get("/random", (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100);
    res.json({ value: randomNumber });
  });

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
