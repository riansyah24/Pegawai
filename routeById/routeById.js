import express from "express"
import datas from "../datas.js"

const router = express.Router()
let data = datas()

router.get("/pegawai/:id",(req,res) => {
  let id = req.params.id
  res.status(200).json({status:200,data:data[id-1],message:"Data berhasil didapat"})
})

export default router