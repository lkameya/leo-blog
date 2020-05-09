import React from "react"
import profilePic from "../assets/profile-pic.jpg"
import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: rhythm(1),
      }}
    >
      <img
        src={profilePic}
        alt={`Leonardo Kameya`}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
          borderRadius: "50%",
        }}
      />
      <p style={{ maxWidth: 250 }}>
        Personal blog by{" "}
        <a href="https://mobile.twitter.com/leo_kameya">Leo Kameya</a>
        &nbsp;Software Developer
      </p>
    </div>
  )
}

export default Bio
