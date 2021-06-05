import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import VideoSearch from "./VideoSearch"

describe("login component", () => {
  it("login renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
      <BrowserRouter>
        <VideoSearch />
      </BrowserRouter>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})