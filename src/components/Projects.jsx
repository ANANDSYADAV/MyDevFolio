function Projects() {
    return (
        <div id="projects" className="flex flex-col justify-center items-center h-[1500px] sm:h-[1800px] md:h-[2100px] lg:h-[1800px] px-0 sm:px-10 py-10 gap-12 bg-gray-100">
            <div className="flex flex-col justify-center items-center gap-3 text-center">
                <p className="font-sans text-3xl font-bold">PROJECTS</p>
                <div className="border-b-4 border-blue-900 w-[50px] rounded-xl" />
                <p className="font-sans text-xl font-normal ">Here you will find some of the personal projects that I created and with each project containing its own detailed page</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
                <img 
                className="h-[150px] w-[380px] sm:h-[300px] sm:w-[600px] md:h-[400px] md:w-[700px]"
                src="./images/project One-1.png" alt="Project-One-1" />
                <div className="flex flex-col gap-5 w-[90%] lg:w-[30%] text-center lg:text-left">
                    <p className="text-2xl font-bold">YouTube Clone</p>
                    <p className="text-xl text-teal-800">It's a perfect YouTube clone that fetches data using Rapid API.</p>
                    <button className="w-[200px] bg-blue-700 py-3 text-white text-xl font-bold font-sans rounded-md hover:opacity-[0.9] mx-auto lg:mx-0">View Details</button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
                <img 
                className="h-[150px] w-[380px] sm:h-[300px] sm:w-[600px] md:h-[400px] md:w-[700px]"
                src="./images/project Two-1.png" alt="Project-One-1" />
                <div className="flex flex-col gap-5 w-[90%] lg:w-[30%] text-center lg:text-left">
                    <p className="text-2xl font-bold">Movie App</p>
                    <p className="text-xl text-teal-800">It's a movie rating app that fetches data using an API.</p>
                    <button className="w-[200px] bg-blue-700 py-3 text-white text-xl font-bold font-sans rounded-md hover:opacity-[0.9] mx-auto lg:mx-0">View Details</button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
                <img 
                className="h-[150px] w-[380px] sm:h-[300px] sm:w-[600px] md:h-[400px] md:w-[700px]"
                src="./images/project Three-1.png" alt="Project-One-1" />
                <div className="flex flex-col gap-5 w-[90%] lg:w-[30%] text-center lg:text-left">
                    <p className="text-2xl font-bold">Dice Game</p>
                    <p className="text-xl text-teal-800">It's a dice game that lets you try your luck.</p>
                    <button className="w-[200px] bg-blue-700 py-3 text-white text-xl font-bold font-sans rounded-md hover:opacity-[0.9] mx-auto lg:mx-0">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default Projects