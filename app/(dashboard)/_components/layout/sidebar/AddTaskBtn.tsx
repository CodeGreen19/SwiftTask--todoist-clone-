import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoAddOutline } from "react-icons/io5";
import AddTaskBox from "../../shared/AddTaskBox";

const AddTaskBtn = () => {
  return (
    <Dialog>
      <DialogOverlay />
      <DialogTrigger className="flex w-full hover:bg-slate-50 items-center rounded-md justify-start gap-3 p-1 py-2  ">
        <div className="p-1  rounded-full bg-amber-700">
          <IoAddOutline className="text-lg text-white" />
        </div>
        Add Task
      </DialogTrigger>
      <DialogContent className="bg-white rounded-md w-5/6 drop-shadow-xl md:w-[500px]">
        <DialogTitle></DialogTitle>
        <div className="p-2">
          <AddTaskBox sectionName="" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskBtn;
