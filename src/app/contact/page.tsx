const  Contacts = () =>{
    return (
        <div className="py-32">
            <div className="flex flex-row">
            <div className="flex-1">
                <div className="p-6">
          <h3 className="text-3xl font-bold">Contact</h3>
            <p>looking forward to hear from you</p>
            
           <div className="py-10"> <h1 className="text-3xl font-bold">Phone</h1>
            <p>+234-7041-458-456</p></div>

            <div className="py-10"> <h1 className="text-3xl font-bold">Email</h1>
            <p>ZubbyTech@gmail.com</p></div>
            </div> 
            </div>

            <div className="flex-1 ">
                <div className="flex gap-3 justify-center">
                <form action="">
                    <div className="flex flex-row gap-3">
                    <div>
                    <h1 >First Name</h1>
                    <input type="text"
                    placeholder="First name"
                    className=" border rounded-md p-2"
                     />
                  </div>

                  <div>
                  <h1>Last Name</h1>
                    <input type="text"
                    placeholder="First name"
                    className=" border rounded-md p-2"
                     />
                  </div>
                </div>

            <div className="flex flex-row gap-3 mt-3">
                    <div>
                    <h1>Email</h1>
                    <input type="text"
                    placeholder="Email"
                    className=" border rounded-md p-2"
                     />
                  </div>

                  <div>
                    <h1>Subject</h1>
                    <input type="text"
                    placeholder="Subjects"
                    className=" border rounded-md p-2"
                     />
                  </div>
                </div>
                

                

                  <div>
                    <h1 className="mt-3">Message</h1>
                    <input type="text"
                    placeholder=""
                    className=" border rounded-md p-2 w-[100%] h-40"
                     />
                  </div>

                  <button type="submit" className="bg-blue-300 text-white py-2 px-4 rounded-full hover:bg-blue-400 cursor-pointer mt-4 w-[100%]">
                    Submit
                  </button>
                </form>
                </div>
            </div>


            </div>
        </div>
    )
}
export default Contacts