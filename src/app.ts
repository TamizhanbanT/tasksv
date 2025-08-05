import express from 'express';
import roleRoutes from '../src/routes/role.route'
import subjectRoutes from '../src/routes/subject.route'



const port =3000
const app=express();
app.use(express.json());


app.use('/api/roles', roleRoutes);
app.use('/api/subjects', subjectRoutes);


app.listen(port , ()=>{
    console.log(`server running on port ${port}` )
})