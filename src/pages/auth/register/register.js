import React, { Fragment, useState } from "react";
import StepWizard from "react-step-wizard";
import { Link } from "react-router-dom";
import { TextInput, Combobox } from "evergreen-ui";
import usePosition from "../../../components/hooks/usePosition";

const Cards = ({ svg, title, selected, onSelect }) => (
  <Fragment>
    <div
      onClick={onSelect}
      className={`px-6 py-4 h-40 w-40 flex flex-col ${
        selected && "border border-indigo-900"
      } justify-center items-center shadow-md bg-white`}
    >
      <svg viewBox="0 0 24 24" width="50px" height="50px">
        <path d={svg} />
      </svg>
      <span className="text-gray-500 text-base text-center">{title}</span>
    </div>
  </Fragment>
);

const data = [
  {
    title: "Buyer",
    svg:
      "M3.742 2l-1.74.014a1 1 0 10.014 2l1.07-.008 3.293 7.902-1.197 1.914C4.343 15.161 5.362 17 6.942 17H18a1 1 0 100-2H6.941c-.11 0-.124-.022-.064-.117a1 1 0 00.002 0L8.055 13h7.466a2 2 0 001.749-1.03l3.601-6.486A.999.999 0 0019.998 4H13v3h3l-4 4-4-4h3V4H5.25l-.576-1.385A1 1 0 003.742 2zM11 4h2V3a1 1 0 00-2 0v1zM7 18a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2zm10 0a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2z",
  },
  {
    title: "Seller",
    svg:
      "M10 2c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2h-7zm2 2h3a1 1 0 010 2h-3a1 1 0 010-2zm8.586 8a1.41 1.41 0 00-1 .414L15 17h-4a.5.5 0 010-1h2a2 2 0 002-2 1 1 0 00-1-1H8.656c-1.06 0-2.076.422-2.826 1.172l-3.123 3.121a.999.999 0 000 1.414l2.586 2.586a.999.999 0 001.414 0L8 20h7.172c.53 0 1.039-.21 1.414-.586l5-5a1.415 1.415 0 00-1-2.414z",
  },
  {
    title: "Carrier",
    svg:
      "M5.5 3A5.5 5.5 0 000 8.5c0 1.175.372 2.263 1 3.156V16a2 2 0 002 2 3 3 0 106 0h6a3 3 0 106 0 2.002 2.002 0 002-2v-3l-2.725-5.447A.996.996 0 0019.383 7H16a2 2 0 00-2-2H9.742A5.489 5.489 0 005.5 3zm0 1.75A3.754 3.754 0 019.25 8.5a3.754 3.754 0 01-3.75 3.75A3.754 3.754 0 011.75 8.5 3.754 3.754 0 015.5 4.75zm.008 1.342l-.863 2.607 1.76 1.787 1.068-1.05L6.355 8.3l.577-1.739-1.424-.47zM16 8.75h2.918L21.043 13H16V8.75zm-10 8c.689 0 1.25.561 1.25 1.25S6.689 19.25 6 19.25 4.75 18.689 4.75 18s.561-1.25 1.25-1.25zm12 0c.689 0 1.25.561 1.25 1.25s-.561 1.25-1.25 1.25-1.25-.561-1.25-1.25.561-1.25 1.25-1.25z",
  },
  {
    title: "Medical Officer",
    svg:
      "M4 2c-.534 0-1.037.208-1.414.586A1.988 1.988 0 002 4v3c0 2.942 1.83 5.454 4.408 6.486.354.616.914 1.09 1.592 1.33V18a4 4 0 004 4h4a4 4 0 004-4v-.174A3 3 0 0022 15a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 002 2.824V18a2 2 0 01-2 2h-4a2 2 0 01-2-2v-3.184a2.987 2.987 0 001.592-1.33A7.01 7.01 0 0016 6.976V4a2 2 0 00-2-2h-1a1 1 0 000 2h1v2.777c0 2.61-1.901 4.945-4.498 5.198a5.171 5.171 0 01-.555.025c-2.733-.028-4.946-2.262-4.945-5.023L4 4h1a1 1 0 000-2H4z",
  },
];

const ChooseCategory = ({ selected, onSelect, goToNext }) => {
  return (
    <Fragment>
      <div className="flex flex-col justify-center items-center">
        <h2 className="mb-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Select Category
        </h2>
        <div
          className={"flex flex-row sm:flex-wrap xs:flex-wrap lg:flex-no-wrap"}
        >
          {data.map((card, i) => {
            return (
              <Fragment key={i}>
                <Cards
                  title={card.title}
                  onSelect={() => onSelect(i)}
                  selected={selected == i ? true : false}
                  svg={card.svg}
                />
              </Fragment>
            );
          })}
        </div>
        <div className={"mt-5"}>
          <span className="relative z-0 inline-flex shadow-sm">
            <Link
              to={"/login"}
              type="button"
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              Cancel
            </Link>
            <a
              href={goToNext}
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              Next
            </a>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

const ContactInfo = ({ goToNext, goToPrevious }) => {
  return (
    <Fragment>
      <div
        className="flex flex-col justify-center items-center w-70"
        style={{ height: "10vh" }}
      >
        <h2 className="mb-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Basic Information
        </h2>
        <div className={"mb-3"}>
          <TextInput
            name="text-input-name"
            placeholder="Your name here..."
            height={40}
          />
        </div>
        <div>
          <Combobox
            openOnFocus
            items={["Male", "Female"]}
            onChange={(selected) => console.log(selected)}
            placeholder="Gender"
            height={40}
          />
        </div>

        <div className={"mt-5"}>
          <span className="relative z-0 inline-flex shadow-sm">
            <a
              href={goToPrevious}
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              Go Back
            </a>
            <a
              href={goToNext}
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              Next
            </a>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

const GPSLocation = ({ goToNext, goToPrevious, onGetLoc }) => {
  return (
    <Fragment>
      <div
        className="flex flex-col justify-center items-center w-70"
        style={{ height: "10vh" }}
      >
        <h2 className="mb-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Get GPS Location
        </h2>
        <div className={"mt-5"}>
          <button
            onClick={onGetLoc}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Get Location
          </button>
        </div>
        <div className={"mt-5"}>
          <span className="relative z-0 inline-flex shadow-sm">
            <a
              href={goToPrevious}
              className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              Go Back
            </a>
            <a
              href={goToNext}
              className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
            >
              Next
            </a>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

const TermsConditions = (props) => {
  return <Fragment>Terms Conditions</Fragment>;
};

const RegisterComponent = (props) => {
  const [selected, setSelected] = useState(0);
  const [toBeSelected, setToBeSelected] = useState(true);
  const { getPosition, error, position } = usePosition();
  return (
    <Fragment>
      <div
        style={{ height: "100vh" }}
        className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
      >
        <StepWizard initialStep={1} isHashEnabled={true}>
          <ChooseCategory
            isActive={toBeSelected}
            className={"opacity-0"}
            selected={selected}
            goToNext={"#basicInfo"}
            onSelect={(i) => {
              setSelected(i);
            }}
            hashKey={"ChooseCategory"}
          />
          <ContactInfo
            goToNext={"#gpsLocation"}
            goToPrevious={"#ChooseCategory"}
            hashKey={"basicInfo"}
          />
          <GPSLocation
            hashKey={"gpsLocation"}
            onGetLoc={() => getPosition()}
            goToNext={"#terms"}
            goToPrevious={"#basicInfo"}
          />
          <TermsConditions hashKey={"terms"} />
        </StepWizard>
      </div>
    </Fragment>
  );
};

export default RegisterComponent;
