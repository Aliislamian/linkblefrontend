import React, { useState, useRef, useEffect } from "react";
import "../BecomeSellerStepOne/BecomeSellerStepOne.css";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import CrossIcon from "../../images/crossWhite.png";
import CategoryIcon from "../../images/categoryicon.png";
import SubCategoryIcon from "../../images/subcategoryicon.png";
// import Select, { components } from "react-select";
import ReactTooltip from "react-tooltip";
import { useNavigate } from "react-router-dom";
import TalentNavbar from "../TalentNavbar/TalentNavbar";
import BecomeSellerBar from "../BecomeSellerBar/BecomeSellerBar";
import BecomeSellerBtn from "../BecomeSellerBtn/BecomeSellerBtn";
import newRequest from "../../utils/newRequest";
import { handleError } from "../../utils/handleError";
import BeatLoaderComponent from "../../utils/BeatLoaderComponent";
const handleContinue = () => {
  // submit the form whith id "myForm"
  document.getElementById("seller-step-one").submit();
};
const BecomeSellerStepOne = () => {
  const navigate = useNavigate();
  const [SearchTags, setSearchTags] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const navRef = useRef();
  const inputRef = useRef();

  const [serviceData, setServiceData] = useState({
    title: "",
    description: "",
    category: "",
    subCategory: "",
  });

  useEffect(() => {
    // get categories from database
    const getCategories = async () => {
      try {
        const response = await newRequest.get(
          "/get-categories",
        );
        console.log(response.data && response.data.categories);

        let newData = response.data && response.data.categories || [];

        if (newData.length > 0) {
          newData = newData.map((item) => {
            return { value: item.category, label: item.category, id: item._id };
          });
        }
        setCategories(newData);

      } catch (err) {
        handleError(err)
      }

    };
    getCategories();
  }, []);


  // const handleCategoryChange = (e) => {

  // const getSubCategories = async () => {
  //   try {
  //     const response = await newRequest.get(
  //       "/get-subcategories",
  //     );
  //     console.log(response.data);
  //     se







  const handleChange = (e) => {
    if (e.target.name === "category") {
      const selectedOption = categories.find(item => item.label === e.target.value);
      const id = selectedOption && selectedOption.id;
      console.log(selectedOption.id);
      const getSubCategories = async () => {
        try {
          const response = await newRequest.get(
            "/get-subcategories/" + id,
          );
          console.log(response.data.subcategories);
          const newData = response.data && response.data.subcategories && response.data.subcategories.subcategories || [];
          if (newData.length > 0) {
            const newSubCategories = newData.map((item) => {
              return { value: item.name, label: item.name, id: item._id };
            });
            setSubCategories(newSubCategories);


          }
        } catch (err) {
          handleError(err)
        }
      };
      getSubCategories();
    }

    setServiceData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };



  const handleSerchTag = (e) => {
    if (SearchTags.length > 4) {
      inputRef.current.value = "";
    }
  };
  const HandleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (SearchTags.length < 5) {
        setSearchTags([...SearchTags, e.target.value]);
        setIsFilePicked(true);
        inputRef.current.value = "";
      }
    }
    if (e.key === "Backspace" && e.target.value.length === 0) {
      setSearchTags(SearchTags.slice(0, -1));
    }
  };

  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };

  // const options = [
  //   {
  //     value: "Afghanistan",
  //     label: "Afghanistan",
  //   },
  //   {
  //     value: "Pakistan",
  //     label: "Pakistan",
  //   },
  //   {
  //     value: "South Africa",
  //     label: "South Africa",
  //   },
  //   {
  //     value: "Canada",
  //     label: "Canada",
  //   },
  //   {
  //     value: "South Asia",
  //     label: "South Asia",
  //   },
  //   {
  //     value: "Sweeden",
  //     label: "Sweeden",
  //   },
  //   {
  //     value: "India",
  //     label: "India",
  //   },
  //   {
  //     value: "China",
  //     label: "China",
  //   },
  //   {
  //     value: "BanglaDesh",
  //     label: "BanglaDesh",
  //   },
  //   {
  //     value: "South Korea",
  //     label: "South Korea",
  //   },
  // ];
  const handleFileRemove = (e, value) => {
    setSearchTags(
      SearchTags.filter((item) => {
        return item !== value;
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(serviceData);
    setLoading(true);
    try {
      const response = await newRequest.post(
        "/create-service/step-one",
        {
          title: serviceData.title,
          description: serviceData.description,
          category: serviceData.category,
          subcategory: serviceData.subCategory,
          serviceTags: SearchTags,
        },
      );
      // pass the service id to the next step

      localStorage.setItem("serviceId", response.data &&
        response.data.data && response.data.data._id
        || null);
      setLoading(false);
      navigate("/seller-step-two");
    } catch (err) {
      console.log(err);
      setLoading(false);
      handleError(err);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }} >
      <BeatLoaderComponent loading={loading} />
      <div>
        <TalentNavbar ref={navRef} />
      </div>
      <div
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
        className="seller-progress-bar-container"
      >
        <BecomeSellerBar stepCount={1} />
      </div>
      <div
        className="postedRequest_main"
        onClick={() => {
          navRef.current.handleOutsideClick();
        }}
      >
        <div className="postedRequest_main_one">
          <div className="postedRequest_title">Create new service Profile</div>
          <div className="postedRequest_input_main">
            <form className="input_form_main" id="seller-step-one"
              onSubmit={handleSubmit}
            >
              <label style={{ paddingBottom: "7px" }}>Title</label>
              <input
                type="text"
                name="title"
                placeholder="90 Max Characters"
                className="inputText_css"
                maxLength="90"
                onChange={handleChange}
                required
              />
              <label style={{ paddingTop: "1.2rem", paddingBottom: "7px" }}>
                Description
              </label>
              <textarea
                maxLength="1200"
                name="description"
                required
                placeholder="Briefly Describe Your service (max-1200)"
                className="textArea_input_css"
                onChange={handleChange}

              ></textarea>

              <div className="dropdown_category_main">
                <img
                  src={CategoryIcon}
                  alt="icon"
                  className="category_icon_css"
                />
                <Input type="select" className="select_css"
                  name="category"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Select Project Category</option>
                  {categories.map((item) => {
                    return <option
                      key={item.id}
                      value={item.value}
                      className="options"
                    >{item.label}</option>;
                  })}
                </Input>
              </div>
              <div className="dropdown_sub_category_main">
                <img
                  src={SubCategoryIcon}
                  alt="icon"
                  className="sub_category_icon_css"
                />
                <Input type="select" className="select_css"
                  name="subCategory"
                  onChange={handleChange}
                >
                  <option>Select Project Sub Category</option>
                  {subCategories.map((item) => {
                    return <option
                      key={item.id}
                      value={item.value}
                    >{item.label}</option>;
                  })}
                </Input>
              </div>

              <div
                onKeyDown={(e) => HandleKeyPress(e)}
                className="attach-file-div"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <span className="search_tag_main_css">
                  <br />
                  <label htmlFor="serviceTags">Service Search Tags</label>
                  <br />

                  <label
                    htmlFor="serviceTags"
                    className="search-tags-container"
                    style={{ marginTop: "7px" }}
                  >
                    {SearchTags.map((value, index) => {

                      return (
                        <div
                          key={"search-tag" + index}
                          className="search_tag_preview_main_div">
                          <span
                            style={{
                              paddingLeft: "10px",
                              width: "20rem",
                              // backgroundColor: "coral",
                              whiteSpace: "nowrap",
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                            }}
                          >
                            {/* {isFilePicked ? SearchTags : "Document.txt"} */}
                            {value}
                          </span>
                          <img
                            src={CrossIcon}
                            alt="icon"
                            className="crossIcon_css"
                            onClick={(e) => {
                              handleFileRemove(e, value);
                            }}
                          />
                        </div>
                      );
                    })}
                    <div>
                      <input

                        style={{ width: SearchTags.length > 4 && "1px" }}
                        className={
                          SearchTags.length > 3
                            ? "search_tag_inputText_css search-tag-disable"
                            : "search_tag_inputText_css"
                        }
                        disabled={SearchTags.length > 4 ? true : false}
                        ref={inputRef}
                        type="text"
                        id="serviceTags"
                        name="serviceTags"
                        onChange={handleSerchTag}
                        placeholder="Add Search Tags"

                      />
                    </div>
                  </label>
                  <div className="search-tag-bottom-text">
                    Max: 5 Tags (letters & Number only)
                  </div>
                </span>
              </div>

            </form>
            <div className="submit_service_request__btn_div">
              <div className="become-seller-step-one-btn-container">
                <BecomeSellerBtn

                  // send form submit function to the button component
                  formSubmit={handleSubmit}

                  leftBtnText={"Cancel"}
                  // the form data will be sent to the backend when the user clicks on the save and continue button

                  rightBtnText={"Save & Continue"}
                  PrevBtnNavigation={"/manage-gigs"}
                  NextBtnNavigation={"/seller-step-two"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="postedRequest_main_two">
          <div className="seller_second_postedRequest_title">
            Create Professional Service Profile
          </div>
          <div className="paragraph_div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna
            justo, scelerisque et euismod sit amet, eleifend quis magna.
            <br /> Sed fringilla, est at volutpat sodales, nisl eros tristique
            sapien, ut gravida urna lorem a odio. Sed bibendum lacinia nisl, sit
            amet blandit velit porta ultrices. Pellentesque vehicula maximus
            augue, id consequat mi. Aenean eget justo mauris. Vivamus nec augue
            rutrum, porttitor ex a, aliquet lacus. Curabitur egestas tincidunt
            nunc et vestibulum. Vestibulum sit amet blandit massa, vel ornare
            lectus. Ut quis urna suscipit, pretium magna sed, tincidunt purus.
            Praesent non facilisis dui. Praesent blandit arcu velit, a placerat
            lorem interdum ac. Quisque sollicitudin, justo vitae fermentum
            commodo, orci nibh condimentum sapien, a tempus urna turpis id
            felis. Aliquam erat volutpat. Nam ac molestie nisi. Pellentesque
            sodales dui sed massa porta, a volutpat nisl consequat.
            <br />
            Praesent blandit arcu velit, a placerat lorem interdum ac. Quisque
            sollicitudin, justo vitae fermentum commodo, orci nibh condimentum
            sapien, a tempus urna turpis id felis. Aliquam erat volutpat. Nam ac
            molestie nisi. Pellentesque sodales dui sed massa porta, a volutpat
            nisl consequat.
            <br />
            <br />
            Praesent blandit arcu velit, a placerat lorem interdum ac. Quisque
            sollicitudin, justo vitae fermentum commodo, orci nibh condimentum
            sapien, a tempus urna turpis id felis. Aliquam erat volutpat. Nam ac
            molestie nisi. Pellentesque sodales dui sed massa porta, a volutpat
            nisl consequat.
          </div>
        </div>
      </div >
    </div >
  );
};

export default BecomeSellerStepOne;
