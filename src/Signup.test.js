import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import Register from "./Signup"

describe("login component", () => {
  it("login renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})