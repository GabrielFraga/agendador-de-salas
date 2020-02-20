<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;


class RoomTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('room')->insert([

            'name' => 'Sala 01',
            'qntd_chairs' => 30,
            'has_computer' => true,
            'has_projector' => true,
            'has_video_chat' => true,

            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
