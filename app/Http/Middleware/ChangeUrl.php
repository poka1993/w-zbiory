<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Wine;

class ChangeUrl
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next)
    {
        $wineId = $request->route()->parameters['wineId'];
         $wineData = Wine::where('id', $wineId)->first();

        if ($wineData == null) {
            return redirect('/');
        }

        $wineName = str_replace(" ", "-", $request->route()->parameters['wineName']);
        $wineDataName = str_replace(" ", "-", $wineData->name);

        if ($wineDataName != $wineName) {
            $url = 'wine-' . $wineId . '-' . $wineDataName;
            return redirect( '/' . $url);
        }
    
        return $next($request);
    }
}
