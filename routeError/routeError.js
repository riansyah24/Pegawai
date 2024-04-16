import express from "express"

const router = express.Router()

router.get("*",(req,res) => {
  res.status(404).json({status:404,message:"Data tidak ada"})
})

export default router