<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Http;

class Recaptcha implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $response = Http::asForm()->post("https://www.google.com/recaptcha/api/siteverify", [
            'secret' => "6LfuRU0lAAAAAGSN_QkrT0mIU9EXhchsEz2nFohM",
            'response' => $value,
            'ip' => request()->ip(),
        ]);

        if ($response->successful() && $response->json('success')) {
            return true;
        }

        return false;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Nieudana weryfikacja captcha.';
    }
}