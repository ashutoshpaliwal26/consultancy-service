import { Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuthenticate } from "../../context/AuthContext";
import { apiClient } from "../config/api";
import Dropdown, { DropdownOption } from "../DropDown";

import { Country, State, City, ICountry } from 'country-state-city';

const country_data = Country.getAllCountries();

const dropdown_options_hour: DropdownOption[] = [
  { value: "00", label: "00" },
  { value: "01", label: "02" },
  { value: "02", label: "02" },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
  { value: "05", label: "05" },
  { value: "06", label: "06" },
  { value: "07", label: "07" },
  { value: "08", label: "08" },
  { value: "09", label: "09" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
]

const dropdown_options_minute: DropdownOption[] = [
  { value: "00", label: "00" },
  { value: "01", label: "01" },
  { value: "02", label: "02" },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
  { value: "05", label: "05" },
  { value: "06", label: "06" },
  { value: "07", label: "07" },
  { value: "08", label: "08" },
  { value: "09", label: "09" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },
  { value: "32", label: "32" },
  { value: "33", label: "33" },
  { value: "34", label: "34" },
  { value: "35", label: "35" },
  { value: "36", label: "36" },
  { value: "37", label: "37" },
  { value: "38", label: "38" },
  { value: "39", label: "39" },
  { value: "40", label: "40" },
  { value: "41", label: "41" },
  { value: "42", label: "42" },
  { value: "43", label: "43" },
  { value: "44", label: "44" },
  { value: "45", label: "45" },
  { value: "46", label: "46" },
  { value: "47", label: "47" },
  { value: "48", label: "48" },
  { value: "49", label: "49" },
  { value: "50", label: "50" },
  { value: "51", label: "51" },
  { value: "52", label: "52" },
  { value: "53", label: "53" },
  { value: "54", label: "54" },
  { value: "55", label: "55" },
  { value: "56", label: "56" },
  { value: "57", label: "57" },
  { value: "58", label: "58" },
  { value: "59", label: "59" },
];

const dropdown_options_am_pm: DropdownOption[] = [
  { value: "AM", label: "AM" },
  { value: "PM", label: "PM" },
]


// Edit Account Component
interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address : string;
  date_of_birth: string;
  company?: string;
  bio?: string;
  place_of_birth: string,
  time_of_birth?: string
}





interface EditAccountProps {
  userProfile: UserProfile;
  onUpdateProfile: (profile: UserProfile) => void;
}

const EditAccount: React.FC<EditAccountProps> = ({ userProfile }) => {
  const [formData, setFormData] = useState<UserProfile>(userProfile);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthorized } = useAuthenticate();

  const [isMorning, setIsMorning] = useState<string>('AM')
  const [dropdown_options_city, set_dropdown_options_city] = useState<DropdownOption[] | any>([]);
  const [dropdown_options_country, set_dropdown_options_country] = useState<DropdownOption[] | any>([]);
  const [dropdown_options_state, set_dropdown_options_state] = useState<DropdownOption[] | any>([]);
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [country, setConuntry] = useState<string>("");
  const [time_minute, setTime_minute] = useState<string>("");
  const [countryCode, setCountryCode] = useState<string>("");
  const [time_Hour, setTime_Hour] = useState<string>("");

  const get_all_country = () => {
    const all_country: DropdownOption[] = [];
    country_data.map((ele: ICountry, idx: number) => {
      const data: DropdownOption = {
        id: idx,
        value: ele.name,
        label: ele.name,
        other: ele.isoCode
      }
      all_country.push(data);
    })
    set_dropdown_options_country(all_country);
  }

  const get_all_state_data = () => {
    const cont = country;
    let all_state_of_country: DropdownOption[] = [];
    let isoCountryCode: any = country_data.filter((ele) => {
      if (ele.name === cont) {
        return ele;
      }
    })
    if (isoCountryCode.length === 0) return;
    setCountryCode(isoCountryCode[0].isoCode);
    const fetch_state_data = State.getStatesOfCountry(isoCountryCode[0].isoCode);
    fetch_state_data.map((ele, idx) => {
      const data: DropdownOption = {
        id: idx,
        value: ele.name,
        label: ele.name,
        other: ele.isoCode
      }
      all_state_of_country.push(data);
    })
    set_dropdown_options_state(all_state_of_country);
  }

  const get_all_city_data = () => {
    const cont = state;
    let all_state_of_country: DropdownOption[] = [];
    let isoStateCode: any = dropdown_options_state.filter((ele : any) => {
      if (ele.value === cont) {
        return ele;
      }
    })
    const fetch_state_data = City.getCitiesOfState(countryCode, isoStateCode[0]?.other);
    fetch_state_data.map((ele, idx) => {
      const data: DropdownOption = {
        id: idx,
        value: ele.name,
        label: ele.name,
        other: ""
      }
      all_state_of_country.push(data);
    })

    set_dropdown_options_city(all_state_of_country);
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const data: UserProfile = {
      ...formData,
      address: `${country}:${state}:${city}`,
      company: "",
      bio: "",
      time_of_birth: setTime(),
    }

    try {
      const res = await apiClient.post("/update_user", data);
      if (res.status === 200) {
        const resData: UserProfile = res.data.user;
        const res_address = resData.address?.split(":");
        setFormData({
          name: resData.name,
          email: resData.email,
          address: resData.address,
          date_of_birth: resData.date_of_birth,
          phone: resData.phone,
          place_of_birth: resData.place_of_birth,
          time_of_birth: resData.time_of_birth
        })
        setConuntry(res_address[0]);
        setState(res_address[1]);
        setCity(res_address[2]);
      }
      setIsLoading(false);
      alert('Profile updated successfully!');
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const getTime = (str: string ) => {
    const data = str.split(":");
    const hour = parseInt(data[0]);
    if (hour >= 12) {
      setIsMorning("PM");
      const ans = hour - 12;
      setTime_Hour(`0${ans}`);
      setTime_minute(data[1]);
    }
    else {
      setIsMorning("AM");
      setTime_Hour(data[0]);
      setTime_minute(data[1]);
    }
    return ""
  }

  const setTime = (): string => {
    const isAm = isMorning;
    let hour = parseInt(time_Hour);
    let minute = time_minute;
    if (isAm == "PM") {
      hour = hour + 12;
    }
    if (hour < 10) {
      return `0${hour}:${minute}`;
    }
    return `${hour}:${minute}`;
  }

  const fetchUserData = async () => {
    const local_user = JSON.parse(localStorage.getItem("user") as string);
    const email: any = local_user?.email;
    const data: any = {
      email: email
    }

    try {
      const response = await apiClient.post('/get_user', data);
      if (response.status === 200) {
        const responseData: UserProfile = response.data.user;
        if (responseData) {
          const tob: any = responseData.time_of_birth;
          getTime(tob);
          const res_add = responseData.address.split(":");
          console.log(res_add);
          setConuntry(res_add[0])
          setState(res_add[1])
          setCity(res_add[2])
          console.log({
            country, 
            state, 
            city
          })
        }
        setIsMorning("AM");
        setFormData({
          address : responseData.address,
          name: responseData.name,
          email: responseData.email,
          phone: responseData.phone,
          date_of_birth: responseData.date_of_birth.split('T')[0],
          place_of_birth: responseData.place_of_birth,
        })
        
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    get_all_country();
  }, [])

  useEffect(() => {
    get_all_state_data();
  }, [country])

  useEffect(() => {
    get_all_city_data();
  }, [state,city])

  useEffect(() => {
    if (isAuthorized) {
      fetchUserData();
    }
  }, [])

  return (
    <div className="bg-white rounded-lg shadow-sm border border-red-200">
      <div className="border-b border-gray-200 px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-900">Edit Account</h1>
        <p className="text-sm text-gray-600 mt-1">Update your personal information</p>
      </div>

      <div className="py-10 px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country
            </label>
            <Dropdown options={dropdown_options_country} value={country} onSelect={setConuntry} placeholder='--Country--' />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              State
            </label>
            <Dropdown options={dropdown_options_state} value={state} onSelect={setState} placeholder='--State--' />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City
            </label>
            <Dropdown options={dropdown_options_city} value={city} onSelect={setCity} placeholder='--City--' />
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time of Birth
            </label>
            <div className="w-full h-full grid grid-cols-3 gap-2">
              <Dropdown options={dropdown_options_hour} value={time_Hour} onSelect={setTime_Hour} placeholder='HH' />
              <Dropdown options={dropdown_options_minute} value={time_minute} onSelect={setTime_minute} placeholder='MM' />
              <Dropdown options={dropdown_options_am_pm} value={isMorning} onSelect={setIsMorning} placeholder='AM/PM' />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>


        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4 mr-2" />
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAccount