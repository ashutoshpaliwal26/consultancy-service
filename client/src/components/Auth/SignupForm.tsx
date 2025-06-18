import React, { useEffect, useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, LocateIcon } from 'lucide-react';
import { apiClient } from '../config/api';
import { AxiosError } from 'axios';
import {  useNavigate } from 'react-router-dom';
import { useAuthenticate } from '../../context/AuthContext';
import Dropdown, { DropdownOption } from '../DropDown';
import { Country, State, City, ICountry } from 'country-state-city';

const country_data = Country.getAllCountries();
type ErrorResponse = {
  message: string,
  [key: string]: any
}

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


const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
    time_of_birth: "00:00",
    place_of_birth: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [serverError, setServerError] = useState<string>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { authenticate } = useAuthenticate();
  const [isMorning, setIsMorning] = useState<string>('AM')
  const [dropdown_options_city, set_dropdown_options_city] = useState<DropdownOption[]>([]);
  const [dropdown_options_country, set_dropdown_options_country] = useState<DropdownOption[]>([]);
  const [dropdown_options_state, set_dropdown_options_state] = useState<DropdownOption[]>([]);
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
    let isoStateCode: any = dropdown_options_state.filter((ele) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    setServerError("");
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const data = {
      name: formData.firstName + " " + formData.lastName,
      address : `${country}:${state}:${city}`,
      email: formData.email,
      password: formData.password,
      role: "user",
      time_of_birth: `${isMorning == "PM" ? parseInt(time_Hour) + 12 : time_Hour}:${time_minute}`,
      place_of_birth: formData.place_of_birth
    }

    e.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        const res = await apiClient.post("/signup", data);
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          localStorage.setItem("token", JSON.stringify(res.data.token.access_token));
        }
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          agreeToTerms: false,
          place_of_birth: "",
          time_of_birth: '00:00',
        })

        authenticate(true);
        navigate("/");
        setLoading(false);
      } catch (err) {
        const error = err as AxiosError<ErrorResponse, any>;
        if (error.response) {
          setServerError(error.response.data.message);
        }
        setLoading(false);
      }
      // Handle signup logic here
    }
  };

  useEffect(() => {
    get_all_country();
  }, [])

  useEffect(() => {
    get_all_state_data();
  }, [country])

  useEffect(() => {
    get_all_city_data();
  }, [state, city])

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Create account</h2>
        <p className="text-gray-600">Join us today and get started</p>
        {serverError && <p className='text-red-500 font-bold'>{serverError}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Enter your email"
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors ${errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="First Name"
            />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors ${errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              placeholder="Last Name"
            />
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
          Time of Birth (Optional)
          </label>
      <div className="grid grid-cols-3 gap-4">

        <div>
          <div className="relative">
          <Dropdown options={dropdown_options_hour} value={time_Hour} onSelect={setTime_Hour} placeholder='HH' />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <div className="relative">
          <Dropdown options={dropdown_options_minute} value={time_minute} onSelect={setTime_minute} placeholder='MM' />
            

          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          
          <div className="relative">
          <Dropdown options={dropdown_options_am_pm} value={isMorning} onSelect={setIsMorning} placeholder='AM/PM' />
          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>
      </div>
      <div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <div className="relative h-full">
            <Dropdown options={dropdown_options_country} value={country} onSelect={setConuntry} placeholder='--Country--' />
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
          <div className="relative">
            {/* <Calendar className="absolute left-3 z-10 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" /> */}

            <Dropdown options={dropdown_options_state} value={state} onSelect={setState} placeholder='--State--' />
            {/* <div className='absolute top-0 right-16 w-fit h-full flex items-center justify-center'>
              {isMorning}
        </div> */}

          </div>
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <div className="relative h-full">
            <LocateIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Dropdown options={dropdown_options_city} value={city} onSelect={setCity} placeholder='--City--' />
          </div>
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Password Field */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors ${errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Create a password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password}</p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-colors ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
            placeholder="Confirm your password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {/* Terms Checkbox */}
      <div>
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
          />
          <span className="text-sm text-gray-600">
            I accept the{' '}
            <button type="button" className="text-red-600 hover:text-red-700 font-medium">
              Terms of Service
            </button>{' '}
            and{' '}
            <button type="button" className="text-red-600 hover:text-red-700 font-medium">
              Privacy Policy
            </button>
          </span>
        </label>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={`w-full bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200`} disabled={loading}    >
        {loading ? "Loading..." : "Sign Up"}
      </button>
    </form>
  );
};

export default SignupForm;