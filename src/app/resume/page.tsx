const  Resume = () =>{
    return (
        <div className="px-4 py-36 ">
            <div>
                <h1 className="text-4xl font-bold">Resume</h1>
            </div>

            <div className="border-b-2 border-black py-10  justify-between flex flex-col xl:flex-row">
                 <div className="flex-1 gap-4 items-baseline">
                     <h1 className="text-3xl font-bold ">Work Experience</h1>
                     </div>
                    <div className="flex-1"> 
                        <h1 className="font-semibold text-3xl ">Building the Future with Code <br /> & Blockchain</h1>
                        <p>Passionate about merging cutting-edge software
                         engineering with the revolutionary potential of blockchain technology. 5+ years of hands-on 
                         experience crafting robust backend systems, decentralized applications (dApps), and smart contracts,
                         while staying at the forefront of crypto trends like DeFi, NFTs, and Web3 ecosystems.</p>
                         </div>
                
            </div>
                     {/* Eduction section */}
                <div className="border-b-2 border-black py-14 justify-between flex xl:flex-row">
                    <div className="flex-1 gap-4">
                        <h2 className="text-3xl font-bold ">Education</h2>
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl font-semibold">Bachaloer Degree and Bsc holder</h1>
                        <p>Graduate from the university of FUTO with BSC certificate of Software engineering and also
                            learn about blocchain from one of the biggest crypto academy NIRVANA
                        </p>
                    </div>
            </div>

            <div className="border-b-2 border-black py-14 justify-between flex xl:flex-row">
                    <div className="flex-1 gap-4">
                        <h2 className="text-3xl font-bold ">Skills & Expertise</h2>
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl font-semibold">Languages & Frameworks:</h1>
                        <ul className="list-disc">
                        <li> Full-stack development (Frontend & Backend systems)</li>
                        <li>Backend: Node.js, Django, Spring Boot, GraphQL</li>
                        <li>Mobile: React Native, Flutter (cross-platform)</li></ul>

                        <h1 className="text-2xl font-semibold py-4">Blockchain & Crypto Expertise:</h1>
                        <ul className="list-disc">
                        <li>Smart contract development & auditing</li>
                        <li>Token standards (ERC-20, ERC-721, ERC-1155)</li>
                        <li>Decentralized application (dApp) development</li></ul>
                    </div>
            </div> 

        </div>
    )
}
export default Resume