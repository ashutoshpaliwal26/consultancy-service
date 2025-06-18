import { X } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { apiClient } from "../../config/api";

interface FormType {
  title: string,
  description: string,
  status: "upcoming" | "pending" | "complete",
  initial_time: string,
  final_time: string,
  on_date: string,
  email : string
}

interface ScheduleConsultationProps {
  addConsultation : boolean,
  setAddConsultation : (addConsultation : boolean) => void
  fetchConsultations : () => void
}



const ScheduleConsultation:React.FC<ScheduleConsultationProps> = ({addConsultation, setAddConsultation, fetchConsultations}) => {
  const [formData, setFormData] = useState<FormType>({
    title: "",
    description: "",
    status: "upcoming",
    initial_time: "8:00",
    final_time: "",
    on_date: "",
    email : ""
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handelChnage = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const onSubmit = async(e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const userData = JSON.parse(window.localStorage.getItem("user_data") as string);
    
    const email = userData.email;
    
    const data : FormType = {
      title : formData.title,
      status : formData.status,
      description : formData.description,
      email : email,
      final_time : `${formData.on_date} ${formData.final_time}`,
      initial_time : `${formData.on_date} ${formData.initial_time}`,
      on_date : formData.on_date
    }
    
    try{
      const res = await apiClient.post("/consultations/create", data); 
      fetchConsultations();
      setAddConsultation(false);
      setLoading(false);
    }catch(err){
      console.error(err);
      setLoading(false);
    }
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/30 flex items-center justify-center">
      <form className="flex flex-col gap-4 max-w-md bg-white p-6 rounded-2xl shadow-lg relative" onSubmit={onSubmit} method="POST">
        <div className="flex items-center justify-between">
          <p className="text-2xl flex items-center justify-between text-blue-600 font-semibold tracking-tight relative pl-8 before:absolute before:left-0 before:w-4 before:h-4 before:rounded-full before:bg-blue-600 after:absolute after:left-0 after:w-4 after:h-4 after:rounded-full after:bg-blue-600 after:animate-ping">
            Add Conslutation
          </p>
        <button onClick={() => setAddConsultation(!addConsultation)} className="cursor-pointer hover:bg-gray-400 hover:font-bold hover:text-black text-gray-400 border rounded-full p-1">
            <X size={18} />
          </button>
        </div>

        <div className="flex gap-2">
          <label className="relative w-full">
            <input
              required
              type="text"
              value={formData.title}
              name="title"
              onChange={handelChnage}
              placeholder=""
              className="peer w-full px-3 py-3 pt-5 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-6 peer-focus:text-xs peer-focus:font-semibold peer-valid:text-green-600">
              Title
            </span>
          </label>
        </div>
        <div className="flex gap-3">
          <label className="relative w-full">
            <input
              type="time"
              id="initial_time"
              name="initial_time"
              value={formData.initial_time}
              onChange={handelChnage}
              className="peer w-full px-3 py-3 pt-5 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-6 peer-focus:text-xs peer-focus:font-semibold peer-valid:text-green-600">
              Start At
            </span>
          </label>
          <label className="relative w-full">
            <input
              type="time"
              id="final_time"
              name="final_time"
              value={formData.final_time}
              onChange={handelChnage}
              className="peer w-full px-3 py-3 pt-5 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-6 peer-focus:text-xs peer-focus:font-semibold peer-valid:text-green-600">
              End At
            </span>
          </label>
        </div>
        <div className="flex gap-3">
          <label className="relative w-full">
            <input
              type="date"
              id="on_date"
              name="on_date"
              value={formData.on_date}
              onChange={handelChnage}
              className="peer w-full px-3 py-3 pt-5 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-6 peer-focus:text-xs peer-focus:font-semibold peer-valid:text-green-600">
              Session Date
            </span>
          </label>
        </div>
        <div className="flex gap-3">
          <label className="relative w-full">
            <textarea
              value={formData.description}
              name="description"
              onChange={handelChnage}
              required
              placeholder=" "
              className="peer w-full px-3 py-3 pt-5 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-6 peer-focus:text-xs peer-focus:font-semibold peer-valid:text-green-600">
              Description
            </span>
          </label>
        </div>

        <div className="w-full h-fit flex gap-2">
          {["upcoming", "complete", "pending"].map((status) => (
            <label
              key={status}
              htmlFor={status}
              className={`rounded-2xl p-3 cursor-pointer transition-colors duration-150 border-2 ${formData.status === status ? "border-sky-500 text-sky-500" : "border-gray-300 text-gray-600"
                }`}
            >
              <input
                type="radio"
                id={status}
                name="status"
                value={status}
                onChange={handelChnage}
                checked={formData.status === status}
                className="hidden"
              />
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </label>
          ))}
        </div>




        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          {loading ? "Submiting..." : "Submit"}
        </button>

      </form>
    </div>
  );
};

export default ScheduleConsultation;
