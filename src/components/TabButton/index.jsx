import './style.css';

const TabButton = ({ name, icon, onclick, currTab }) => {
    return (
        <li
            className={`navigate-btn flex gap-2 items-center justify-center tab ${currTab === name
                ? "active"
                : ""
                }`}
            onClick={() => onclick(name)}
        >
            {icon} <div>{name}</div>
        </li>
    )
};

export default TabButton;