import express from "express"
import datas from "../datas.js"

const router = express.Router()
let data = datas()

router.get("/",(req,res) => {
  res.status(200).json({status:200,data:data,message:"Data berhasil didapat"})
})

export default router