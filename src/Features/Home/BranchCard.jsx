import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaExpand } from "react-icons/fa";
import { HiChevronLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Modal from "../../UI/Modal";

function BranchCard({ branch }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div>
      <div className="group relative flex w-full flex-row rounded border border-gray-300 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-md lg:h-[344px] lg:flex-col lg:rounded-lg xl:w-[288px]">
        <img
          className="aspect-[3/2] w-40 rounded-r object-cover brightness-90 transition-all duration-300 ease-in-out lg:min-h-[230px] lg:w-full lg:rounded-b-none lg:rounded-t-lg lg:group-hover:min-h-[190px] lg:group-hover:brightness-50"
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
            onClick={() => navigate(`/branch/${branch.name}`)}
          >
            <span>صفحه شعبه</span>

            <HiChevronLeft />
          </button>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute bottom-2 right-2 text-white lg:hidden"
        >
          <FaExpand className="h-5 w-5" />
        </button>

        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute left-1/2 top-20 hidden -translate-x-1/2 text-white opacity-0 transition-all duration-300 ease-in-out lg:block lg:group-hover:opacity-100"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-500/40">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500/50">
              <CiImageOn className="h-8 w-8 text-white" />
            </div>
          </div>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img
          className="aspect-[6/7] w-[80vw] max-w-[300px] rounded-lg object-cover md:aspect-[8/5] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[750px]"
          src={branch.image}
          alt={branch.name}
        />

        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute left-3 top-3 text-white"
        >
          <IoClose className="h-6 w-6 xl:h-8 xl:w-8" />
        </button>
      </Modal>
    </div>
  );
}
export default BranchCard;
