import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
  const [title, setTitle] = useState("")
  const [file, setFile] = useState("")
  const [preview, setPreview] = useState("")
  const navigate = useNavigate()

  const loadImage = (e) => {
    const image = e.target.files[0]
    setFile(image)
    setPreview(URL.createObjectURL(image))
  }
  const saveProduct = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append("title", title)
    formData.append("file", file)
    try {
      await axios.post(
        "http://localhost:5000/products",
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        },
      )
      navigate("/")
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label htmlFor="" className="label">
              Product Name
            </label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="product name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">
                      choose a file ..
                    </span>
                  </span>
                </label>
              </div>
            </div>
          </div>
          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="preview image" />
            </figure>
          ) : (
            ""
          )}
          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
