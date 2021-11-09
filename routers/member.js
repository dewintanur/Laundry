const {
    request,
    response
} = require("express")
const express = require("express")
const app = express()

// membaca request dari body dengan tipe json

app.use(express.json())

// panggil model
const models = require("../models/index")

// panggil model member
const members = models.members

// panggil fungsi auth -> validasi token
const {auth} = require("./login")

// fungsi auth dijadikan middleware
app.use(auth)
// endpoint for get all member
app.get("/", async (request, response) => {
    let dataMember = await members.findAll()

    return response.json(dataMember)
})
// await digunakan ketika memanggil promise , baik gagal maupun sukses langsung disimpan di dataMember.
// enpoint add new member
app.post("/", (request, response) => {
    let newMember = {
        nama: request.body.nama,
        alamat: request.body.alamat,
        jenis_kelamin: request.body.jenis_kelamin,
        telepon: request.body.telepon,
    }
    members.create(newMember)
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
    // endpoint update data member
    app.put("/:id_member", (request, response) => {
        // ditampung data yang akan diubah
        let data = {
            nama: request.body.nama,
            alamat: request.body.alamat,
            telepon: request.body.telepon,
            jenis_kelamin: request.body.jenis_kelamin
        }

        let parameter = {
            id_member: request.params.id_member
        }

        // proses update
        members.update(data, {
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
    // endpoint hapus data member
    app.delete("/:id_member", (request, response) => {
        // tampung data yg akan dihapus
        let parameter = {
            id_member: request.params.id_member
        }
        // proses hapus
        members.destroy({
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