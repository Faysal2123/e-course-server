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
    const noteCollection=database.collection('note')
    const materialsCollection=database.collection('materials')

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
     app.get('/courseDetails/:id', async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await courseCollection.findOne(query);
  res.send(result);
});
app.get('/bookedSession/:email',async(req,res)=>{
  const email=req.params.email
  const query={userEmail:email}
  const booked=await bookedCollection.find(query).toArray()
  res.send(booked)
})
app.post('/bookings',async(req,res)=>{
  const booked=req.body
  const result=await bookedCollection.insertOne(booked)
  res.send(result)
})
app.post('/note',async(req,res)=>{
  const note=req.body
  const result=await noteCollection.insertOne(note)
  res.send(result)
})
app.get('/note/:email',async(req,res)=>{
  const email=req.params.email
  const query={email:email}
  const result=await noteCollection.find(query).toArray()
  res.send(result)
})
app.delete('/note/:id',async(req,res)=>{
  const id=req.params.id
  const query={_id:new ObjectId(id)}
  const result=await noteCollection.deleteOne(query)
  res.send(result)
})
app.put('/note/:id',async(req,res)=>{
  const {id}=req.params
  const updateNote=req.body
  const result=await noteCollection.updateOne(
    {_id:new ObjectId(id)},
    {$set:updateNote}
  )
  res.send(result)
})

app.post('/course',async(req,res)=>{
  const course=req.body
  const result=await courseCollection.insertOne(course)
  res.send(result)
})
app.get("/course/:email",async(req,res)=>{
  const email=req.params.email
  const query={tutor_email:email}
  const result=await courseCollection.find(query).toArray()
  res.send(result)
})
app.get("/course/email/:email", async (req, res) => {
  const email = req.params.email;
  const status = req.query.status; 
  let query = { tutor_email: email };
  if (status) {
    query.status = status;
  }
  const result = await courseCollection.find(query).toArray();
  res.send(result);
});
app.post('/materials',async(req,res)=>{
  const materials=req.body;
  const result=await materialsCollection.insertOne(materials)
  res.send(result)
})
app.get('/materials/:email',async(req,res)=>{
  const email=req.params.email
  const query={tutorEmail:email}
  const result=await materialsCollection.find(query).toArray()
  res.send(result)
})
app.delete('/materials/:id',async(req,res)=>{
  const id=req.params.id
  const query={_id:new ObjectId(id)}
  const result=await materialsCollection.deleteOne(query)
  res.send(result)
})

app.patch('/materials/:id',async(req,res)=>{
  const id=req.params.id
  const updateData=req.body
  const query={_id:new ObjectId(id)}
  const update={
        $set:updateData,
      };
      const result=await materialsCollection.updateOne(query,update)
      res.send(result)
})

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


