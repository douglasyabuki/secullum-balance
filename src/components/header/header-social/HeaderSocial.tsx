// Interfaces
import { Social } from "../../../interfaces/social";
interface Props {
  list: Social[];
}

export default function HeaderSocial({ list }: Props) {
  return (
    <div className="container w-auto bg-transparent bg-opacity-0 gap-3 px-5 rounded-2xl flex self-center group-hover:bg-opacity-80 transition-bg-opacity ease-in-out duration-300">
      {list.map((item) => (
        <div key={item.id} className="w-fit">
          <a href={item.href} className='opacity-50 hover:opacity-80'>
            <i className={`${item.icon} text-xl`}></i>
          </a>
        </div>
      ))}
    </div>
  );
}
