
 import { Sequelize } from "sequelize";

 export const sequelize = new Sequelize('bvqsxktut1cbykgmh7my', 'uiwpchryf7fa6jtg', '7Lj6pflkD8Jin63aq8dl', {
    host: 'bvqsxktut1cbykgmh7my-mysql.services.clever-cloud.com',
    dialect: "mysql"
  });






  const connectionDB= async()=> {

     await sequelize.sync({alter:false,force:false}).then (()=>{
        console.log("connected to database");
    }).catch((err)=>{
        console.log("Error connecting to database");
    })

  }



  export default connectionDB