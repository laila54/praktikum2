import Head from 'next/head';
import LayoutAdmin from '../components/layout-admin'; 
export default function produkAdmin(){
return(
<div className="container">
<Head>
<title>Go Apotek</title>
<link rel="icon" href="/favicon.ico" />
</Head>
<LayoutAdmin>
<div class="navbar">
<hr></hr>
<p class="paragraf"><h1>Produk Penjualan</h1></p>
<hr></hr>
<form>
<br/>
<label>Jenis Barang</label>
<br/>
<select id="" name="jenis_obat">
<br/>
<option>Pilih:</option>
<option value="herbal">Serbuk</option>
<option value="suplemen">Pill</option>
<option value="alat kesehatan">Masker</option>
</select>
<br/>
<label>Nama Barang:</label>
<br/>
<input type="text" id="" name="nama_barang" pla 
ceholder="Nama barang"></input>
<br/>
<label>Stok:</label>
<br/>
<input type="number" id="" name="stok" placeholder="Stok"></input>
<br/>
<label>Harga:</label>
<br/>
<input type="text" id="" name="harga" placeholder="Harga"></input>
<br/>
<input type="submit" value="Tambahkan"></input>
</form>
</div>
</LayoutAdmin>
</div>
)
}