const TabButton = ({ name, icon, onclick, currTab }) => {
    return (
        <button
            className={`navigate-btn flex gap-2 items-center justify-center ${currTab === name
                ? "bg-[#0077ff] text-white transition ease-in-out"
                : "text-blue-600"
                }`}
            onClick={() => onclick(name)}
        >
            {icon} <div>{name}</div>
        </button>
    )
};

export default TabButton;