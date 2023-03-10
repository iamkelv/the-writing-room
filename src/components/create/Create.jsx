import React, { useEffect, useState } from 'react'
import './create.css'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Header } from '../header/Header'
import { useNavigate } from 'react-router-dom'

export const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleBody = (e) => {
    setBody(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false)
        navigate('/')
        alert('Article created ')
      })
  }
  useEffect(() => {}, [])

  return (
    <>
      <Header />
      <section className="newPost">
        <div className="container boxItems">
          <div className="img ">
            <img
              src="https://images.pexels.com/photos/6424244/pexels-photo-6424244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              class="image-preview"
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputfile flexCenter">
              <input type="file" accept="image/*" alt="img" />
            </div>
            <input
              type="text"
              onChange={handleTitle}
              placeholder="Title"
              required
            />

            <textarea
              name=""
              id=""
              cols="30"
              onChange={handleBody}
              rows="10"
              required
            ></textarea>

            <button className="button">
              {isLoading ? 'Loading...' : 'Create Post'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
