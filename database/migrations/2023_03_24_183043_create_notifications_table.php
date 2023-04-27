<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return voidread
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->string('message');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('generating_user_id');
            $table->foreign('user_id')->references('id')->on('users')->constrained()->cascadeOnDelete();
            $table->foreign('generating_user_id')->references('id')->on('users')->nullable()->constrained()->cascadeOnDelete();
            $table->foreignId('wine_id')->nullable()->constrained()->cascadeOnDelete();
            $table->boolean('readed')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('notifications');
    }
};
