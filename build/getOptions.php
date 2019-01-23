<?php

$string = file_get_contents(get_stylesheet_directory() . "/build/options.json");
$mint_options = json_decode($string, true);
$string = file_get_contents(get_stylesheet_directory() . "/build/assets.json");
$mint_options['files'] = json_decode($string, true);
