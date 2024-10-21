import { ClipLoader } from "react-spinners";
import React from 'react'

const override = {
    display:'block',
    margin:'100px auto'
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader
        color="blue"
        loading={loading}
        cssOverride={override}
        size={150}
    />
  )
}

export default Spinner