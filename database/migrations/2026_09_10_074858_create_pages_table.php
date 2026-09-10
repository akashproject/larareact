<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('title')->nullable();
            $table->string('slug')->nullable();
            $table->string('banner_image')->nullable();
            $table->text('description')->nullable();
            $table->text('excerpt')->nullable();
            $table->string('template', 100)->default('default-template');
            $table->boolean('enable_otp')->default('1');
            $table->text('meta_description')->nullable();
            $table->text('schema')->nullable();
            $table->string('robots', 150)->default('index, follow');
            $table->string('utm_campaign', 100)->default('Google-Organic');
            $table->string('utm_source', 100)->default('SEO');
            $table->boolean('status', 100)->default('1');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
