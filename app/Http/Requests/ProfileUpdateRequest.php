<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\AdultBirthday;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nick' => ['required', 'string', 'max:50', 'min:3', Rule::unique(User::class)->ignore($this->user()->id)],
            'name' => ['string', 'max:255'],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'avatar' => ['nullable', 'file', 'image', 'mimes:jpeg,jpg,png,gif'],
            'sex' => 'required|string|max:20',
            'birthday' => ['required', 'date', new AdultBirthday()],
            'locality' => 'required|string|max:50|min:3',
            'description' => 'nullable|string|max:2000',
        ];
    }
}
