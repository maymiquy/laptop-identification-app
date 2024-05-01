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
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

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
            'gejala' => '["Sering hidup atau mati sendiri pada komputer", "Waktu saat PC dihidupkan, tidak bereaksi apa-apa", "Komputer hang"]',
            'solusi' => 'Cek kembali kabel pada power nya, atau saklar ON/OFF kemudian pastikan anda mengganti power supply sesuai dengan kebutuhan hardware komputer anda.'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G4',
            'nama_gejala' => 'Monitor Komputer Blank',
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
            'nama_gejala' => 'Kabel power telah terpasang dengan benar',
            'pertanyaan' => 'Apakah kabel power telah terpasang dengan benar?'
        ]);

        Gejala::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_gejala' => 'G7',
            'nama_gejala' => 'Suhu pada PC cepat panas',
            'pertanyaan' => 'Apakah suhu pada PC cepat panas?'
        ]);

        Kerusakan::create([
            'uuid' => fake()->unique()->uuid(),
            'kode_kerusakan' => 'K2',
            'nama_kerusakan' => 'Processor',
            'gejala' => '["Monitor Komputer Blank", "Komputer sering mati mendadak", "Kabel power telah terpasang dengan benar"]',
            'solusi' => 'Gunakanlah RAM sesuai dengan spesifikasi laptop anda, hindari permukaan berdebu agar tidak terjadi overheating.'
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
