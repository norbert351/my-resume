import { BsTwitterX } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"

const  Footer = () =>{
    return (
        <div className=" mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Phone</h4>
              <p>+234-704-1458-456</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Email</h4>
              <p>zubbyTech@gmail.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
                <FaInstagram />
                <BsTwitterX />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-4 text-center">
            <p>© 2025 zubbytech</p>
          </div>
        </div>
    )
}
export default Footer