<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;


class CollaboratorTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('collaborator')->insert([

            'name' => 'Gabriel',
            'email' => 'gabriel@fraga.com',
            'phone' => '31995782411',

            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);
    }
}
