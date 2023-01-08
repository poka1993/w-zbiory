<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        User::class => UserPolicy::class //tutaj zarejestrowalismy polityke
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */

    public function boot()
    {
        $this->registerPolicies();
        Gate::define('admin-level', function (User $user) {
            if ($user->isAdmin()) {
                return Response::allow();
            } else {
                return Response::deny('Musisz mieć uprawnienia administratora.');
            }
            // return $user->isAdmin(); // inna wersja - bez if/else
        });
    }
}
