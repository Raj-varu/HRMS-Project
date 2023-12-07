import React from "react";
import { useState } from "react";
import { getData } from "./store/empSlice";
import { useDispatch, useSelector } from "react-redux";
import { setApiData } from "./store/managerSlice";
// import "./test.scss";

const Test = () => {
  const [e, setE] = useState();
  // const temp = useSelector((state) => state.employeeData.tempApiForCrud);
  const gloab = useSelector((state) => state.globalManager.apiData);
  const emp = useSelector((state) => state.employeeData);
  // console.log(`here is the datas${emp.employeeApiData}`);
  const stringEmp = JSON.stringify(emp);
  const idk = JSON.parse(stringEmp);
  idk.employeeApiData.map((data) => console.log(data.profileImg));

  // console.log(gloab);
  const testSubject = {
    id: 2,
    name: "Corbin",
    role: "Estimator",
    email: "ctole1@mediafire.com",
    gender: "Male",
    empno: "1001",
    cardno: "2001",
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIGSURBVDjLpVNNaxNRFD1vZpJMmo+mhmBLZOq4sAHJL+hCSECLP0C6i65cBcWVUBAX4k/QlfvuVRKCDUNpEVy4MKQYTMHUpA5EUpiSNsnMJM595Y1TNxZ64XLfu3PPPee+eY/NZjNcxiRc0hSxaLVaW67rFjyH4ziwbdv3yWTi+3g8plgvlUpFwjEawQPfDofDRiaT4UX/WnDMUCgEwzDQ6XSK5XK5zhV4jM9TqRRM00QkEvFBQSCtu90ukskkdF0n0g0vXWeNRoOzp9NpWJZ1Ti6NQkDGGGRZ5uyJRAKxWAzVahXtdruoEDtJp1mpSFVV7oI9qITidDrFaDRCPp9Hs9ncUIhpOByi3+/zAxJFdJgUxV7kaK8oCuLxOFdJDQrUnTZU4I3EJUuSdE6BaKRpGq/LZrOEKSjESrOS0wdyakDFwT+w2PuM9I8dSO9M2MkFHK/e52PzBgJIoFwu50smMOWjex+xhAOsPHyCiH4Lp19r2NvZwo2j6FkD+gNivqBcwT7YfI+bpcdQ9w1g+yXm5lO4ri1j5fsXKN6JViuVylrglvlR+NrvQ6iLOnDv6d8r/GIJ8/bJ2U38n9XuKD9X1x9cix18wPjUxImXO7ZkfNtH70KPae7K1bfNT9vOr1EUlhzC0YCh3WOuR/2aXfQ5765rz4aDw0eyy5ZdedbzUG/u1pxXfwB4L36S0dG+qwAAAABJRU5ErkJggg==",
    company: "Buzzster",
    department: "Training",
    mobile: "3497476720",
    "full-name": "Corbin Tole",
    "father-name": "Tole",
    "temp-add": "38875 Sherman Place",
    "perma-add": "PO Box 93888",
    city: "Punaauia",
    pincode: null,
    Date: "04/08/2023",
  };
  const dispatch = useDispatch();
  const handleClick = () => {
    // setE(temp);
    dispatch(setApiData(testSubject));
  };

  return (
    <div className="container">
      <main>
        <section className="advice">
          <h1 className="advice__title">
            Site under construction or maintenance{" "}
          </h1>
          <p className="advice__description">
            <span>&lt;</span> building <span>/&gt;</span> not finished yet
          </p>
        </section>
        <section className="city-stuff">
          <ul className="skyscrappers__list">
            <li className="skyscrapper__item skyscrapper-1" />
            <li className="skyscrapper__item skyscrapper-2" />
            <li className="skyscrapper__item skyscrapper-3" />
            <li className="skyscrapper__item skyscrapper-4" />
            <li className="skyscrapper__item skyscrapper-5" />
          </ul>
          <ul className="tree__container">
            <li className="tree__list">
              <ul className="tree__item tree-1">
                <li className="tree__trunk" />
                <li className="tree__leaves" />
              </ul>
              <ul className="tree__item tree-2">
                <li className="tree__trunk" />
                <li className="tree__leaves" />
              </ul>
              <ul className="tree__item tree-3">
                <li className="tree__trunk" />
                <li className="tree__leaves" />
              </ul>
              <ul className="tree__item tree-4">
                <li className="tree__trunk" />
                <li className="tree__leaves" />
              </ul>
              <ul className="tree__item tree-5">
                <li className="tree__trunk" />
                <li className="tree__leaves" />
              </ul>
              <ul className="tree__item tree-6">
                <li className="tree__trunk" />
                <li className="tree__leaves" />
              </ul>
              <ul className="tree__item tree-7">
                <li className="tree__trunk" />
                <li className="tree__leaves" />
              </ul>
              <ul className="tree__item tree-8">
                <li className="tree__trunk" />
                <li className="tree__leaves" />
              </ul>
            </li>
          </ul>
          <ul className="crane__list crane-1">
            <li className="crane__item crane-cable crane-cable-1" />
            <li className="crane__item crane-cable crane-cable-2" />
            <li className="crane__item crane-cable crane-cable-3" />
            <li className="crane__item crane-stand" />
            <li className="crane__item crane-weight" />
            <li className="crane__item crane-cabin" />
            <li className="crane__item crane-arm" />
          </ul>
          <ul className="crane__list crane-2">
            <li className="crane__item crane-cable crane-cable-1" />
            <li className="crane__item crane-cable crane-cable-2" />
            <li className="crane__item crane-cable crane-cable-3" />
            <li className="crane__item crane-stand" />
            <li className="crane__item crane-weight" />
            <li className="crane__item crane-cabin" />
            <li className="crane__item crane-arm" />
          </ul>
          <ul className="crane__list crane-3">
            <li className="crane__item crane-cable crane-cable-1" />
            <li className="crane__item crane-cable crane-cable-2" />
            <li className="crane__item crane-cable crane-cable-3" />
            <li className="crane__item crane-stand" />
            <li className="crane__item crane-weight" />
            <li className="crane__item crane-cabin" />
            <li className="crane__item crane-arm" />
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Test;
