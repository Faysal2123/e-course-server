const express =require('express')
const cors =require('cors')
require('dotenv').config()
const app =express()
const port=process.env.PORT|| 5000

app.use(cors())
app.use(express.json())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.erebr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const database=client.db('E-Course')
    const courseCollection=database.collection('course')
    const reviewCollection=database.collection('reviews')
    const userCollection=database.collection('users')
    const bookedCollection=database.collection('booked')

    app.get('/course',async(req,res)=>{
        const courses=await courseCollection.find().toArray()
        res.send(courses)
    })
   app.get('/reviews',async(req,res)=>{
      const reviews=await reviewCollection.find().toArray()
      res.send(reviews)
    })
      app.post('/users',async(req,res)=>{
      const user=req.body
      const result=await userCollection.insertOne(user)
      res.send(result)
    })
       app.get('/user/:email',async(req,res)=>{
      const email=req.params.email
      const user=await userCollection.findOne({email:email})
      if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  
  res.send({ role: user.role });
    })
      const email=req.params.email
      const user=await userCollection.findOne({email:email})
      if (!user) {
    return res.status(404).send({ message: "User not found" });
  }
  app.get('/courseDetails/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await courseCollection.findOne(query);
  res.send(result);
});


    await client.connect();
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
  }
}
run().catch(console.dir);
app.get('/',(req,res)=>{
    res.send("Hello from server")
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


