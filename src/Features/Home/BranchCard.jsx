import { CiImageOn } from "react-icons/ci";
import { FaExpand } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function BranchCard({ branch }) {
  const navigate = useNavigate();

  return (
    <div className="group relative flex w-full flex-row rounded border border-gray-300 transition-all duration-300 ease-in-out hover:border-primary lg:h-[344px] lg:flex-col lg:rounded-lg xl:w-[288px]">
      <img
        className="aspect-[3/2] h-full w-40 rounded-r object-cover brightness-90 transition-all duration-300 ease-in-out lg:min-h-[230px] lg:w-full lg:rounded-b-none lg:rounded-t-lg lg:group-hover:min-h-[190px] lg:group-hover:brightness-50"
        src={branch.image}
        alt={branch.name}
      />

      <div className="flex w-full flex-col items-center justify-center gap-y-2 p-2 transition-all duration-300 ease-in-out lg:gap-y-3 lg:p-3">
        <h3 className="font-semibold text-gray-800 lg:font-bold">
          {branch.title}
        </h3>

        <p className="text-center text-xs text-gray-600 lg:text-sm lg:font-medium xl:px-4">
          {branch.location}
        </p>

        <button
          className="outline-button gap-x-2 border-gray-300 px-2 py-1 text-gray-600 group-hover:border-primary group-hover:text-primary lg:opacity-0 lg:group-hover:opacity-100"
          onClick={() => navigate(`/branches/${branch.name}`)}
        >
          <span>صفحه شعبه</span>

          <HiChevronLeft />
        </button>
      </div>

      <button className="absolute bottom-2 right-2 text-white lg:hidden">
        <FaExpand className="h-5 w-5" />
      </button>

      <button className="absolute left-1/2 top-20 -translate-x-1/2 text-white opacity-0 transition-all duration-300 ease-in-out lg:group-hover:opacity-100">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-500/40">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500/50">
            <CiImageOn className="h-8 w-8 text-white" />
          </div>
        </div>
      </button>
    </div>
  );
}
export default BranchCard;
