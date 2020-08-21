import React from "react";
import {render, fireEvent} from "@testing-library/react"
import TodoList from "./TodoList"

it("renders without crashing", function() {
    render(<TodoList/>);
});

it("matches snapshot", function() {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});

it("shows the form", function() {
    const {getByText} = render(<TodoList/>);
    const formText = getByText("Task");
    expect(formText).toBeInTheDocument();
})

it("is able to create a new box when completing the form", function() {
    const {getByLabelText, queryByText} = render(<TodoList/>);

    const taskInput = getByLabelText("Task");
    const submitBtn = queryByText("Create a new todo!")

    fireEvent.change(taskInput, {target: {value: "banana"}});
    fireEvent.click(submitBtn);

    expect(queryByText("banana")).toBeInTheDocument();
})