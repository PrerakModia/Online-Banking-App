import { Link } from 'react-router-dom';
import navLinks from '../Navigation/navigationLinks';

const SideBar = () => {
  return (
    <div className="flex flex-col p-3 w-60">
      <div className="flex items-center gap-2 px-1 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bank"
          viewBox="0 0 16 16"
        >
          <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z" />
        </svg>
        <span className="text-neutral-100 text-xl">Bank</span>
      </div>
      <div className="flex-1">
        {navLinks.map((item) => {
          return (
            <Link className="flex items-center gap-2 px-1 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base">
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div>Bottom Part</div>
    </div>
  );
};

export default SideBar;
