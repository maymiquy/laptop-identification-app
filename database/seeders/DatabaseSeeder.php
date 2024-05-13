<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Gejala;
use App\Models\Kerusakan;
use App\Models\Aturan;
use App\Models\OS;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@email.com',
            'password' => bcrypt('admin')
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G1',
            'nama_gejala' => 'Sering hidup atau mati sendiri pada komputer',
            'pertanyaan' => 'Apakah komputer sering hidup atau mati sendiri?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G2',
            'nama_gejala' => 'Waktu saat PC dihidupkan, tidak bereaksi apa-apa',
            'pertanyaan' => 'Apakah PC tidak bereaksi apa-apa saat dihidupkan?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G3',
            'nama_gejala' => 'Komputer hang',
            'pertanyaan' => 'Apakah komputer mengalami hang?'
        ]);

        Kerusakan::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_kerusakan' => 'K1',
            'nama_kerusakan' => 'Power Supply',
            'gejala' => '["G1", "G2", "G3"]',
            'solusi' => 'Cek kembali kabel pada power nya, atau saklar ON/OFF kemudian pastikan anda mengganti power supply sesuai dengan kebutuhan hardware komputer anda.'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G4',
            'nama_gejala' => 'Monitor komputer blank',
            'pertanyaan' => 'Apakah monitor komputer mengalami Blank?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G5',
            'nama_gejala' => 'Komputer sering mati mendadak',
            'pertanyaan' => 'Apakah komputer sering mati mendadak?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G6',
            'nama_gejala' => 'Monitor komputer blank',
            'pertanyaan' => 'Apakah monitor komputer mengalami Blank?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G7',
            'nama_gejala' => 'Kabel power telah terpasang dengan benar',
            'pertanyaan' => 'Apakah kabel power telah terpasang dengan benar?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G8',
            'nama_gejala' => 'Suhu pada PC cepat panas',
            'pertanyaan' => 'Apakah suhu pada PC cepat panas?'
        ]);

        Kerusakan::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_kerusakan' => 'K2',
            'nama_kerusakan' => 'Processor',
            'gejala' => '["G4", "G5", "G6", "G7"]',
            'solusi' => 'Gunakanlah RAM sesuai dengan spesifikasi laptop anda, hindari permukaan berdebu agar tidak terjadi overheating.'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G9',
            'nama_gejala' => 'Kipas pada motherboard longgar',
            'pertanyaan' => 'Apakah kipas pada motherboard longgar?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G10',
            'nama_gejala' => 'Adanya bunyi bip panjang saat komputer dinyalakan',
            'pertanyaan' => 'Apakah ada bunyi bip panjang sasat komputer dinyalakan?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G11',
            'nama_gejala' => 'Driver pada CD/DVD bermasalah',
            'pertanyaan' => 'Apakah driver pada CD/DVD bermasalah?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G12',
            'nama_gejala' => 'CD/DVD tidak terdeteksi pada saat proses booting',
            'pertanyaan' => 'Apakah CD/DVD tidak terdeteksi pada saat proses booting?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G13',
            'nama_gejala' => 'Kabel yang terhubung kepada CD/DVD Driver tidak terpasang dengan benar (longgar)',
            'pertanyaan' => 'Apakah kabel yang terhubung kepada CD/DVD Driver tidak terpasang dengan benar (longgar)?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G14',
            'nama_gejala' => 'Settingan pada jumper CD/DVD driver salah letak',
            'pertanyaan' => 'Apakah settingan pada jumper CD/DVD driver salah letak?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G15',
            'nama_gejala' => 'Koneksi pada kabel harddisk tidak terpasang dengan benar',
            'pertanyaan' => 'Apakah koneksi pada kabel harddisk tidak terpasang dengan benar?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G16',
            'nama_gejala' => 'Harddisk tidak dapat terdeteksi saat booting',
            'pertanyaan' => 'Apakah harddisk tidak dapat terdeteksi saat booting?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G17',
            'nama_gejala' => 'Monitor untuk komputer blank',
            'pertanyaan' => 'Apakah monitor untuk komputer blank?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G18',
            'nama_gejala' => 'Suhu PC yang tiba-tiba panas',
            'pertanyaan' => 'Apakah suhu PC yang tiba-tiba panas?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G19',
            'nama_gejala' => 'Layar pada monitor blue screen',
            'pertanyaan' => 'Apakah layar pada monitor blue screen?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G20',
            'nama_gejala' => 'RAM terpasang benar',
            'pertanyaan' => 'Apakah RAM sudah terpasang benar?'
        ]);

        Kerusakan::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_kerusakan' => 'K3',
            'nama_kerusakan' => 'Motherboard',
            'gejala' => '["G8", "G9", "G10"]',
            'solusi' => 'Gunakan aplikasi seperlunya, memakai extra kipas tambahan, kurangi panas berlebih pada komputer.'
        ]);

        Kerusakan::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_kerusakan' => 'K4',
            'nama_kerusakan' => 'CD/DVD ROM',
            'gejala' => '["G11", "G12", "G13", "G14"]',
            'solusi' => 'Periksa kembali apakah kabel power terpasang dengan benar, Periksa kembali settingan BIOS (Standard Serup) apakah Primary dan Secondary nya semua diset dengan Auto.'
        ]);

        Kerusakan::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_kerusakan' => 'K5',
            'nama_kerusakan' => 'Harddisk',
            'gejala' => '["G15", "G16"]',
            'solusi' => 'Pastikan anda mendeteksi suhu Harddisk dengan memakai bantuan aplikasi Crystal Disk Info, pastikan konduktor chip tidak mengalami pemuaian melebihi batas ukuran.'
        ]);

        Kerusakan::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_kerusakan' => 'K6',
            'nama_kerusakan' => 'RAM',
            'gejala' => '["G17", "G18", "G19", "G20"]',
            'solusi' => 'Keluarkan RAM dari slot, periksa kembali posisi RAM pada slot, selalu membersihkan bagian dari badan RAM.'
        ]);

        Aturan::create([
            'uuid' => fake()->unique()->uuid(),
            'gejala_id' => 1,
            'kode_aturan' => 'R1',
            'next_true' => 'G2',
            'next_false' => 'G4'
        ]);

        Aturan::create([
            'uuid' => fake()->unique()->uuid(),
            'gejala_id' => 2,
            'kode_aturan' => 'R2',
            'next_true' => 'G3',
            'next_false' => 'G4'
        ]);

        Aturan::create([
            'uuid' => fake()->unique()->uuid(),
            'gejala_id' => 3,
            'kode_aturan' => 'R3',
            'next_true' => 'K1',
            'next_false' => 'G4'
        ]);

        Aturan::create([
            'uuid' => fake()->unique()->uuid(),
            'gejala_id' => 4,
            'kode_aturan' => 'R4',
            'next_true' => 'G5',
            'next_false' => 'G7'
        ]);

        OS::create([
            'uuid' => fake()->unique()->uuid(),
            'nama' => 'Windows'
        ]);

        OS::create([
            'uuid' => fake()->unique()->uuid(),
            'nama' => 'Linux'
        ]);

        OS::create([
            'uuid' => fake()->unique()->uuid(),
            'nama' => 'MacOS'
        ]);
    }
}
