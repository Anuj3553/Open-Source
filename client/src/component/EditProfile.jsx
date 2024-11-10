import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import axios from "axios";
import userDummyImg from "../assets/images/User/User.png";

// CSS
import "../css/EditProfile.css";

const EditProfile = (props) => {
  const VITE_SERVER_PORT = import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";

  const [profile, setProfile] = useState({
    name: "",
    college: "",
    phone: "",
    address: "",
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleClick = async () => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "auth-token": token,
        },
      };

      // Update the user profile
      const updateProfileResponse = await axios.put(
        `${VITE_SERVER_PORT}/api/profile/updateprofile`,
        {
          name: profile.name,
          college: profile.college,
          phone: profile.phone,
          address: profile.address,
        },
        config // Pass the config with headers
      );

      if (updateProfileResponse.status === 200) {
        console.log("Profile updated:", updateProfileResponse.data);

        // Reset the profile form after updating
        setProfile({ name: "", college: "", phone: "", address: "" });

        // If there's a file selected (for avatar), upload it
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const imageData = reader.result;
            axios
              .post(
                `${VITE_SERVER_PORT}/uploadAvatarImage`,
                { image: imageData },
                config // Pass the config with headers for image upload
              )
              .then((res) => {
                console.log("Image uploaded:", res.data);
                // After successful upload, fetch the updated image
                axios
                  .get(`${VITE_SERVER_PORT}/getAvatarImage`, config) // Include config in GET request
                  .then((res) => {
                    setImage(res.data[res.data.length - 1].image); // Fetch the last uploaded image
                  })
                  .catch((err) =>
                    console.log("Error fetching avatar image:", err)
                  );
              })
              .catch((err) => console.log("Error uploading image:", err));
          };
          reader.readAsDataURL(file); // Read the file as Data URL
        }

        // Show success alert
        props.showAlert("Profile Updated Successfully", "success");
      } else {
        // If profile update failed
        props.showAlert("Profile Update Failed", "danger");
      }
    } catch (error) {
      console.error("Error updating profile or uploading image:", error);
      props.showAlert("Profile Update Failed", "danger");
    }
  };

  // For Avatar Uploading
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  return (
    <div>
      <div className="editprofile-main-container">
        <div className="row">
          <div className=" editprofile-avatar-container">
            <h2 style={{ width: "100%" }}>Edit Details</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {image ? (
                <img src={image} className="avatar img-circle" alt="avatar" />
              ) : (
                <img
                  src={userDummyImg}
                  className="avatar img-circle"
                  alt="avatar"
                />
              )}
              <input
                type="file"
                className="form-control mt-2"
                style={{ color: props.mode === "dark" ? "black" : "" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>
          <div className="col-md-9 editprofile-info-container">
            <h2 className="Heading-Page">Personal info</h2>
            <div className="personalinfo pb-5">
              <div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    id="name"
                    name="name"
                    value={profile.name}
                    onChange={onChange}
                    required
                    onKeyDown={handleKeyDown}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                    id="address"
                    name="address"
                    value={profile.address}
                    onChange={onChange}
                    required
                    onKeyDown={handleKeyDown}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="college" className="form-label">
                    College
                  </label>
                  <input
                    autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Enter your college name"
                    id="college"
                    name="college"
                    value={profile.college}
                    onChange={onChange}
                    required
                    onKeyDown={handleKeyDown}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Enter your phone number"
                    id="phone"
                    name="phone"
                    value={profile.phone}
                    onChange={onChange}
                    required
                    onKeyDown={handleKeyDown}
                  />
                </div>
                <div className="flex justify-content-center">
                  <Button
                    variant="primary"
                    style={{ width: "100%" }}
                    onClick={handleClick}
                  >
                    Update Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditProfile.propTypes = {
  showAlert: PropTypes.func,
  mode: PropTypes.string,
  onUpdateProfile: PropTypes.func, // Function to notify parent about profile update
};
export default EditProfile;
