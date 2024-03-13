const homePage = (_, res)=>{
    res.status(200).send(`<h1>Student Mentor Management</h1>
<<<<<<< HEAD
    
=======
    <h2>Mentor</h2>
    <ul>

    <li>GET Get All Mentors = api/mentors</li>
    </ul>
>>>>>>> d3cbefe16e571a85d705cd2309d34ab06965bd05

    <h2>Student</h2>

    <ul>

    <li>GET Get All Student = api/student</li>
    <li>POST Add New Student = api/student</li>
    <li>DELETE Delete Student = api/student/:id</li>
    <li>GET GEt One Studnt = api/student/:id</li>
    <li>PUT Edit Sudent = api/student/:id</li>

    </ul>



    `);
}

export default {homePage}
