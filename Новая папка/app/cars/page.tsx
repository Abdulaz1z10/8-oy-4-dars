"use client"
import React, {useState} from 'react'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import AddModal from "../models/addModel/page"
import DeleteModal from "../models/deleteModal/page"

type CarsType ={
  id: number,
  name: string,
  price: string,
  color: string,
  position: string,
  year: number
}
type editType = CarsType | null

export default function CarsTable() {
  const [cars, setCars] = useState<CarsType[]>([
    {id: 1, name: "Malibu XL", price: "28000", color: "Black", position: "Premier", year: 2023},
    {id: 2, name: "Equinox", price: "32000", color: "Silver", position: "Premier", year: 2022},
    {id: 3, name: "Tahoe", price: "48000", color: "Black", position: "Lux", year: 2024},
  ])

  const [addModal, setAddModal] = useState<boolean>(false)
  const [deleteModal, setDeleteModal] = useState<boolean>(false)
  const [id, setId] = useState<number>()
  const [item, setItem] = useState<editType>(null)
  const openModal = () => {
    setAddModal(true)
  }
  const remove = (id: number) => {
    setDeleteModal(true)
    setId(id)
  }
  const toggle = () => {
    setAddModal(false)
    setDeleteModal(false)

  }
  const edit = (item:CarsType) => {
    setItem(item)
    setAddModal(true)
  }
  return (
    <div className='bg-slate-900 w-[100%] h-[100vh] pt-[1%]'>
      <AddModal open={addModal} toggle={toggle} cars={cars} setCars={setCars} item={item}/>
      <DeleteModal open={deleteModal} toggle={toggle} id={id} cars={cars} setCars={setCars}/>
      <h1 className='text-5xl ml-[45%]  w-[150px] bg-slate-700 h-[40px] pl-[2%] rounded-xl'>Cars</h1>
      <div className='flex w-[100%]'>
      <div className=' w-[100%] items-center'>
        <button onClick={openModal} className='p-[10px] bg-green-500 ml-[10%] w-[100px] rounded-xl text-xl mt-[2%]'>Add cars</button>
        <table className='bg-white ml-[23%] rounded-xl  text-black w-[900px] mt-[3%]'>
        <thead>
              <tr>
                <th>T/r</th>
                <th>Name</th>
                <th>Price</th>
                <th>Color</th>
                <th>Position</th>
                <th>Year</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className=''>
              {
                cars?.map((item, index) => {
                  return <tr key={index}>
                    <td className='text-center text-xl'>{index + 1}</td>
                    <td className='text-center text-xl'>{item.name}</td>
                    <td className='text-center text-xl'>${item.price}</td>
                    <td className='text-center text-xl'>{item.color}</td>
                    <td className='text-center text-xl'>{item.position}</td>
                    <td className='text-center text-xl'>{item.year}</td>
                    <td>
                      <div className='flex justify-around'>
                        <CiEdit onClick={() => edit(item)} className='text-[25px] text-[#4ba9df] cursor-pointer' />
                        <MdDeleteForever onClick={() => remove(item.id)} className='text-[25px] text-[red] cursor-pointer' />
                      </div>
                    </td>
                  </tr>
                })
              }
            </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}
