import { ProjectInfoArr } from '../assets/constants'
import { Link } from 'react-router-dom'

function ProjectListing() {

    return (
        <div id="projects" className="flex flex-col justify-center items-center h-[1500px] sm:h-[1800px] md:h-[2100px] lg:h-[1800px] px-0 py-10 gap-12 bg-gray-100">
            <div className="flex flex-col justify-center items-center gap-3 mx-1 text-center">
                <p className="font-sans text-3xl font-bold">PROJECTS</p>
                <div className="border-b-4 border-blue-900 w-[50px] rounded-xl" />
                <p className="font-sans text-xl font-normal ">Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            </div>
            {ProjectInfoArr.map((project, index) => {
                return (
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-7" key={project.title}>
                        <img
                            className="h-[150px] w-[380px] sm:h-[300px] sm:w-[600px] md:h-[400px] md:w-[700px]"
                            src={project.image1} alt={project.title} />
                        <div className="flex flex-col gap-5 w-[90%] lg:w-[30%] text-center lg:text-left">
                            <p className="text-2xl font-bold">{project.title}</p>
                            <p className="text-xl text-teal-800">{project.intro}</p>
                            <Link
                            to={`/project/${index + 1}`} className="w-[200px] bg-blue-700 py-3 text-white text-xl font-bold font-sans rounded-md hover:opacity-[0.9] mx-auto lg:mx-0 text-center">View Details</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ProjectListing