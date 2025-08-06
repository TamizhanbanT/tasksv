import express from 'express';
import roleRoutes from '../src/routes/role.route'
import subjectRoutes from '../src/routes/subject.route'
import profileRoutes from '../src/routes/profile.route';
import profileRoleRoutes from '../src/routes/profileRole.routes';
import mentorStudentRoutes from '../src/routes/mentorStudent.route'
import authRoutes from '../src/routes/auth.route'

import dotenv from "dotenv";
dotenv.config();




const port =3000
const app=express();
app.use(express.json());

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
}


app.use('/api/roles', roleRoutes);
app.use('/api/subjects', subjectRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/profileRoles",profileRoleRoutes)
app.use("/api/mentorstudents",mentorStudentRoutes)
app.use("/api/",authRoutes)





app.listen(port , ()=>{
    console.log(`server running on port ${port}` )
})