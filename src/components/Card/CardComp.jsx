export const CardComp = ({ exp }) => {
    return (
        <section className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
            {/* <figure className="relative">
                <img src={exp.imgUrl} alt={exp.company} className="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
            </figure> */}
            <article className="flex flex-col gap-2 p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{exp.position}</h3>
                <h3 className="text-md font-bold text-gray-900 mb-1">{exp.company}</h3>
                <p className="text-md text-gray-500 mb-2">{exp.desc}</p>
            </article>
        </section>
    );
}