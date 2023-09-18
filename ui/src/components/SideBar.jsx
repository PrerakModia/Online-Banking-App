import { Link } from 'react-router-dom';
import { navLinks, bottomLinks } from '../Navigation/navigationLinks';
import { BsBank } from 'react-icons/bs';
import { HiOutlineLogout } from 'react-icons/hi';

const SideBar = (props) => {
  return (
    <div className="flex flex-col p-3 max-w-xs">
      <div className="flex items-center gap-2 px-0.5 py-4">
        <BsBank />
        <span className="text-xl font-bold">MoneyMagnet Bank</span>
      </div>
      <div className="flex-1 gap-2 flex flex-col py-2">
        {navLinks.map((item) => {
          return (
            <Link
              key={item.name}
              className="flex items-center gap-2 px-1 py-2 hover:bg-neutral-400 hover:no-underline active:bg-neutral-300 rounded-sm text-base"
              onClick={(e) => {
                if (e.target.text === 'Account Statement')
                  props.changeView('accStatement');
                else if (e.target.text === 'Dashboard')
                  props.changeView('accountDetails');
              }}
            >
              <span className="text-base">{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 pt-2 border-t-4 border-pink-600">
        {bottomLinks.map((item) => (
          <Link className="flex items-center gap-2 px-1 py-2 hover:bg-neutral-400 hover:no-underline active:bg-neutral-200 rounded-sm text-base">
            <span className="text-base">{item.icon}</span>
            {item.name}
          </Link>
        ))}
        <Link className="flex items-center gap-2 px-1 py-2 hover:bg-neutral-400 hover:no-underline active:bg-neutral-200 rounded-sm text-base text-red-500">
          <span className="text-base">
            <HiOutlineLogout />
          </span>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
