import React, { useEffect, useState } from "react";
import useFormValidation from "../hooks/useFormValidation";

const EventRegistrationForm = () => {
  const [attendingWithGuest, setAttendingWithGuest] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: "",
    guestName: "",
  });

  const [errors,validate] = useFormValidation(userData,attendingWithGuest)

  console.log(errors);

  const handleCheckboxChange = (value) => {
    setAttendingWithGuest(value);
  };
  
  const submitForm = (e) => {
    e.preventDefault();
    
    if(validate()){
      setShowSummary(true);
    }else{
      setShowSummary(false);
    }

  };

  const closeSummary = () => {
    setUserData({
      name: "",
      email: "",
      age: "",
      guestName: "",
    });
    setShowSummary(false);
    setAttendingWithGuest(null);
  };

  
  return (
    <>
      {showSummary == false ? (
        <div className="bg-white p-5 rounded-xl min-w-[400px]">
          <h2 className="font-bold">Event Registration Form</h2>
          <form className="flex flex-col gap-2 mt-4" onSubmit={submitForm}>
            <label
              htmlFor=""
              className="flex flex-col gap-2 font-semibold text-[14px]"
            >
              Full Name
              <input
                required
                className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                type="text"
                placeholder="Enter full Name "
                value={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
               {errors.name && <p className="text-red-500 text-[13px]">{errors.name}</p>}
            </label>
            <label
              htmlFor=""
              className="flex gap-2 flex-col font-semibold text-[14px]"
            >
              Email
              <input
                required
                className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                type="email"
                placeholder="Enter Email "
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              {errors.email && <p className="text-red-500 text-[13px]">{errors.email}</p>}
            </label>
            <label
              htmlFor=""
              className="flex gap-2 flex-col font-semibold text-[14px]"
            >
              Age
              <input
                required
                className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                type="number"
                placeholder="Enter Your Age "
                value={userData.age}
                onChange={(e) =>
                  setUserData({ ...userData, age: e.target.value })
                }
              />
              {errors.age && <p className="text-red-500 text-[13px]">{errors.age}</p>}
            </label>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[13px]">
                Are you attending with a guest?
              </h3>
              <div className="flex items-center gap-9">
                <label
                  htmlFor="yescheckbox"
                  className="flex items-center justify-center gap-2 text-[15px]"
                >
                  Yes
                  <input
                    name="attendingWithGuest"
                    className="w-3 h-3"
                    type="checkbox"
                    id="yescheckbox"
                    checked={attendingWithGuest === "yes"}
                    onChange={() => handleCheckboxChange("yes")}
                  />
                </label>
                <label
                  htmlFor="nocheckbox"
                  className="flex items-center justify-center gap-2 text-[15px]"
                >
                  No
                  <input
                    name="attendingWithGuest"
                    className="w-3 h-3"
                    type="checkbox"
                    id="nocheckbox"
                    checked={attendingWithGuest === "no"}
                    onChange={() => handleCheckboxChange("no")}
                  />
                </label>
                {errors.attendWithGuest && <p className="text-red-500 text-[13px]">{errors.attendWithGuest}</p>}
              </div>
             
            </div>
            {attendingWithGuest === "yes" && (
              <label
                htmlFor=""
                className="flex gap-2 flex-col font-semibold text-[14px]"
              >
                Guest Name
                <input
                  required
                  className="bg-gray-100 h-[40px] rounded-[5px] pl-4 outline-blue-600 text-[12px]"
                  type="text"
                  placeholder="Enter Guest Name "
                  value={userData.guestName}
                  onChange={(e) =>
                    setUserData({ ...userData, guestName: e.target.value })
                  }
                />
              </label>
            )}
            <button className=" text-[17px] bg-blue-500 text-white rounded-xl border-none grid place-items-center h-[30px] mt-4">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-5 rounded-xl min-w-[400px]">
          <div className="w-full flex justify-between">
            <h2 className="font-bold">Summary</h2>
            <h2 onClick={closeSummary} className="font-bold cursor-pointer">
              X
            </h2>
          </div>
          <div className="mt-5">
            <h2 className="font-bold text-[14px]">
              Name : <span className="text-blue-500"> {userData.name}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              Email : <span className="text-blue-500"> {userData.email}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              Age : <span className="text-blue-500"> {userData.age}</span>
            </h2>
            <h2 className="font-bold text-[14px]">
              Attending with a guest :{" "}
              <span className="text-blue-500"> {attendingWithGuest}</span>
            </h2>
            {attendingWithGuest == "yes" ? (
              <h2 className="font-bold text-[14px]">
                Guest Name :{" "}
                <span className="text-blue-500"> {userData.guestName}</span>
              </h2>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventRegistrationForm;
