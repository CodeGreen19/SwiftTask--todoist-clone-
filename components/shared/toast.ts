import { toast } from "sonner";

export const showToast = (type: "success" | "error", message: string) => {
  switch (type) {
    case "success":
      return toast.success(message, {
        className: "bg-green-500 text-white py-5",
      });
    case "error":
      return toast.error(message, {
        className: "bg-rose-500 text-white py-5",
      });

    default:
      return toast.error("error occurs !", {
        className: "bg-rose-500 text-white py-5",
      });
  }
};
