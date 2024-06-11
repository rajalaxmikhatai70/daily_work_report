// import ProductButton from "./ProductButton";

export default function Employee(){
  
    return(
        <div>

        <div className=' flex flex-1 justify-center h-screen items-center'>
   <div className="bg-gray-600 p-8 rounded-lg shadow-lg max-w-sm w-full border-2">
       <p className="text-black font-bold text-3xl text-center mb-6">Login</p>
       <form> 
           <div className="mb-4">
               <input type="text" id="fullName" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="enter your name"/>
           </div>
           <div className='mb-4'>
               <input type="email" id="email" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="enter your mail"/>
               </div> 
           <div className="mb-6">
               <input type="password" id="password" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="enter your password"/>
           </div>

           <div className="mb-6">
               <input type="mobileNo" id="password" class="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required placeholder="enter your mobileNo"/>
           </div>
           <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
       </form>
   </div>
</div>


</div>
    )
}