import { Button, Spinner } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../../redux/user/userSlice";

export default function ProfileForm() {
  const fileRef = useRef(null);
  const { mainUser, loading, error } = useSelector((state) => state.finance);
  // const [formDatas, setFormDatas] = useState({});
  const [formDatas, setFormDatas] = useState({
    companyName: mainUser?.companyName || "",
    email: mainUser?.email || "",
    country: mainUser?.country || "",
  });
  const [file, setFile] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [filePercentage, setFilePercentage] = useState(0);
  const dispatch = useDispatch();
  console.log(formDatas);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    // const fileName = new Date().getTime() + file.name;
    const fileName = `${new Date().getTime()}_${file.name}`;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },
      (error) => {
        console.log("File upload error:", error);
        setFileUploadError(true);
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setFormDatas((prev) => ({ ...prev, avatar: downloadURL }));
          setFileUploadError(false);
        } catch (error) {
          console.error("Get download URL error:", error);
        }
      }
    ); 
  };

  const handleChange = (e) => {
    setFormDatas({ ...formDatas, [e.target.id]: e.target.value });
  };

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormDatas((prev) => ({ ...prev, [id]: value }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (filePercentage > 0 && filePercentage < 100) {
      alert("Please wait until the image upload is complete.");
      return;
    }
    // if (!mainUser?._id) {
    //   alert("User ID is missing. Cannot update the profile.");
    //   return;
    // }

    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/users/update/${mainUser._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDatas),
      });
      // const data = await res.json();
      // if (data.success === false) {
      //   dispatch(updateUserFailure(data.message));
      //   return;
      // }

      const data = await res.json();
      if (!res.ok || data.success === false) {
        dispatch(updateUserFailure(data.message || "Update failed."));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
      // alert("Profile updated successfully!");
    } catch (error) {
      // dispatch(updateUserFailure(error.message));
      console.error("Update error:", error);
      dispatch(updateUserFailure(error.message || "Update failed."));
    }
  };
  console.log("Form data being submitted: ", formDatas);

  return (
    <div className="p-3 max-w-lg mx-auto">
      {/* <h1 className="text-3xl font-semibold text-center mt-2">Profile</h1> */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          hidden
          onChange={(e) => setFile(e.target.files[0])}
        />
        <img
          onClick={() => fileRef.current.click()}
          // src={formDatas.avatar || mainUser.avatar}
          src={formDatas.avatar || mainUser?.avatar || ""}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover text-center cursor-pointer self-center mt-1"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image Uploading (Image must be less than 2 mb)
            </span>
          ) : filePercentage > 0 && filePercentage < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePercentage}%`}</span>
          ) : filePercentage === 100 ? (
            <span className="text-green-700">Image Succeefully Uploaded!</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="Company name"
          id="companyName"
          defaultValue={mainUser.companyName}
          onChange={handleChange}
          value={formDatas.companyName}
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          defaultValue={mainUser.email}
          onChange={handleChange}
          value={formDatas.email}
          className="border p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="************"
          required
          id="password"
          defaultValue={mainUser.password}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />
        <div className="flex text-start place-items-center   rounded-lg  p-1">
          <select
            // defaultValue={mainUser.country}
            value={formDatas.country}
            onChange={handleChange}
            id="country"
            className="text-[20px] w-full  rounded-lg p-3"
          >
            <option value="">Select Country</option>
            <option value="Canada">Canada</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Singapore">Singapore</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Algeria">Algeria</option>
            <option value="Angola">Angola</option>
            <option value="Benin">Benin</option>
            <option value="Botswana">Botswana</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cabo Verde">Cabo Verde</option>
            <option value="Cameroon">Cameroon</option>
            <option value="Central African Republic">
              Central African Republic
            </option>
            <option value="Chad">Chad</option>
            <option value="Comoros">Comoros</option>
            <option value="Congo">Congo (Congo-Brazzaville)</option>
            <option value="Côte d'Ivoire">Côte d'Ivoire</option>
            <option value="Djibouti">Djibouti</option>
            <option value="Egypt">Egypt</option>
            <option value="Equatorial Guinea">Equatorial Guinea</option>
            <option value="Eritrea">Eritrea</option>
            <option value="Eswatini">Eswatini (fmr. "Swaziland")</option>
            <option value="Ethiopia">Ethiopia</option>
            <option value="Gabon">Gabon</option>
            <option value="Gambia">Gambia</option>
            <option value="Ghana">Ghana</option>
            <option value="Guinea">Guinea</option>
            <option value="Guinea-Bissau">Guinea-Bissau</option>
            <option value="Kenya">Kenya</option>
            <option value="Lesotho">Lesotho</option>
            <option value="Liberia">Liberia</option>
            <option value="Libya">Libya</option>
            <option value="Madagascar">Madagascar</option>
            <option value="Malawi">Malawi</option>
            <option value="Mali">Mali</option>
            <option value="Mauritania">Mauritania</option>
            <option value="Mauritius">Mauritius</option>
            <option value="Morocco">Morocco</option>
            <option value="Mozambique">Mozambique</option>
            <option value="Namibia">Namibia</option>
            <option value="Niger">Niger</option>
            <option value="Rwanda">Rwanda</option>
            <option value="São Tomé and Príncipe">São Tomé and Príncipe</option>
            <option value="Senegal">Senegal</option>
            <option value="Seychelles">Seychelles</option>
            <option value="Sierra Leone">Sierra Leone</option>
            <option value="Somalia">Somalia</option>
            <option value="South Africa">South Africa</option>
            <option value="South Sudan">South Sudan</option>
            <option value="Sudan">Sudan</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Togo">Togo</option>
            <option value="Tunisia">Tunisia</option>
            <option value="Uganda">Uganda</option>
            <option value="Zambia">Zambia</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>
        <Button type="submit" className="bg-gradient-to-r from-[rgba(66,133,244,0.9)] to-[rgba(66,133,244,0.7)] hover:from-[rgba(66,133,244,0.8)] hover:to-[rgba(66,133,244,0.6)] active:bg-none active:outline-none visited:outline-none visited:bg-none">
          {loading ? (
            <>
              <Spinner size="sm" />
              <p className="text-[20px] capitalize">loading</p>
            </>
          ) : (
            "Update"
          )}
        </Button>
      </form>
    </div>
  );
}
