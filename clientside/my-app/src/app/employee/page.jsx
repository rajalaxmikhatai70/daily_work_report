import Link from "next/link";
import Employee from "../components/Employee";
async function getEmployees() {
    const res = await fetch("https://localhost:5000/all-columns");
    const data = await res.json();
    // console.log(data)
   
  }
  export default async function Employees() {
    const edata = await getEmployees();
    // console.log({products}, 'pp');
    return (
      <div className="bg-gray-300">
      
        <h1 className="font-bold text-3xl text-amber-950 m-3 text-center pt-2 pb-2">User login Page</h1>
        
      <div className="text-black gap-2 grid grid-cols-3 mb-2 w-2/3 justify-center ml-[20%]">
        
                  
      
             
              <Link   href={{
                pathname: `/employees/${item.slug? item.slug : item.title
                  ?.replace(/\s+/g, "-")
                  ?.replace(/%7C$/, "")
                  ?.slice(0, -2)}`,
                query: { id: item.id },
              }}>
                
            <Employee 
  
            />
            </Link>
            
          
      </div>
      </div>
    );
  }
  