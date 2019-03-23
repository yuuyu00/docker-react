import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow, mount, render } from "enzyme";
import ChildComponent from "./component/childComponent";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("子コンポーネントが存在すること", () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(ChildComponent).length).toBe(1);
});
