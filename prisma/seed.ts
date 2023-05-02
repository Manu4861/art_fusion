import {Prisma, PrismaClient} from "@prisma/client";

const client = new PrismaClient();

const getPrev_projects = ():Prisma.prev_projectsCreateInput[] =>[
  {
    project_name: 'kantara',
    production_name: 'Hoombale films',
    technician_role: 'camera',
    link: 'youtube',
    released_date: 'break',
  },
  {
    project_name: 'Sir',
    production_name: 'Hoombale films',
    technician_role: 'camera',
    link: 'youtube',
    released_date: 'continued',
  },
]

const getsession_detail = ():Prisma.session_detailsCreateInput[] =>[
  {
    login_date: '2022-12-02',
    s_id: 2,
  },
  {
    login_date: '2022-12-07',
    s_id: 1,
  },
]

const getproductionowner = ():Prisma.Production_ownerCreateInput[] =>[
  {
    address: 'bangalore',
    age: 20,
    date_of_birth: 'morning',
    email_id: 'hombale34@gmail.com',
    id_proof: 'aadhar',
    name: 'jessica',
    password: 'paass',
    phone_no: 674367,
    session: 2, 
  },
 
]

const main = ()=>{
  return Promise.all(getPrev_projects().map((Prev_proj)=>client.prev_projects.create({
    data:Prev_proj
  })))
}

main().then(()=>{
  console.log("success")
}).catch((e)=>{
  console.log(e);
})