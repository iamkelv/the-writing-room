import React, { useEffect, useState } from 'react'
import './create.css'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import { Header } from '../../components/header/Header'

export const UpdatePost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { id } = useParams()
  const handleUpdate = () => {}

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title)
        setBody(data.body)
      })
  }, [])

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
          <form>
            <div className="inputfile flexCenter">
              <input type="file" accept="image/*" alt="img" />
            </div>
            <input type="text" placeholder="Title" value={title} />

            <textarea name="" id="" cols="30" rows="10" value={body}></textarea>

            <button className="button">Update Post</button>
          </form>
        </div>
      </section>
    </>
  )
}
