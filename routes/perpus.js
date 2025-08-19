const express = require("express");
const router = express.Router();

// Endpoint untuk mendapatkan semua tugas
router.get("/", (req, res) => {
  res.json(perpustakaan);
});

// Endpoint untuk mendapatkan buku berdasarkan ID
router.get("/:id", (req, res) => {
  const perpus = perpustakaan.find((t) => t.id === parseInt(req.params.id));
  if (!perpus) return res.status(404).send("Buku tidak ditemukan");
  res.json(perpus);
});

// Endpoint untuk menambahkan buku baru
router.post("/", (req, res) => {
  const newBuku = {
    id: perpustakaan.length + 1,
    buku: req.body.buku,
  };
  perpustakaan.push(newBuku);
  res.status(201).json(newBuku);
});

// Endpoint untuk memperbarui buku
router.put("/:id", (req, res) => {
  const perpus = perpustakaan.find((t) => t.id === parseInt(req.params.id));
  if (!perpus) return res.status(404).send("Buku tidak ditemukan");

  perpus.buku = req.body.buku;
  res.json(perpus);
});

// Endpoint untuk menghapus buku
router.delete("/:id", (req, res) => {
  const perpusIndex = perpustakaan.findIndex((t) => t.id === parseInt(req.params.id));
  if (perpusIndex === -1) return res.status(404).send("Buku tidak ditemukan");

  perpustakaan.splice(perpusIndex, 1);
  res.status(204).send();
});

module.exports = router;
// Tambahkan ini untuk mengekspor data perpustakaan juga
module.exports.perpustakaan = perpustakaan;