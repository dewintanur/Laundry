const {request,response
} = require("express")
const express = require("express")
const app =  express ()

app.use(express.json())

const models = require("../models/index")

const pakets = models.pakets
const {auth} = require("./login")
// fungsi auth dijadikan middleware
app.use(auth)
app.get("/", async (request,response)=>{
    let dataPaket = await pakets.findAll()
     return response.json(dataPaket)
})

app.post("/", (request,response)=>{
    let newPaket ={
        jenis_paket: request.body.jenis_paket,
        harga: request.body.harga

    }
    pakets.create(newPaket)
        .then(result => {
            response.json({
                message: `Data berhasil ditambahkan`
            })
        })
        .catch(error => {
            response.json({
                message: error.message
            })
        })
 app.put("/:id_paket", (request, response) => {
        // ditampung data yang akan diubah
        let data = {
            jenis_paket: request.body.jenis_paket,
            harga: request.body.harga
        }

        let parameter = {
            id_paket: request.params.id_paket
        }

        // proses update
        pakets.update(data, {
                where: parameter
            })
            .then(result => {
                return response.json({
                    message: ` Data Berahasil Diubah`,
                    data: result
                })
            })
            .catch(error => {
                return response.json({
                    message: error.message
                })
            })
    })
    // endpoint hapus data paket
    app.delete("/:id_paket", (request, response) => {
        // tampung data yg akan dihapus
        let parameter = {
            id_paket: request.params.id_paket
        }
        // proses hapus
        pakets.destroy({
                where: parameter
            })
            .then(result => {
                return response.json({
                    message: `Data berhasil Dihapus`
                })
            })
            .catch(error => {
                return response.json({
                    message: error.message
                })
            })
    })
})
module.exports = app