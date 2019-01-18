<?php

$string = file_get_contents(get_stylesheet_directory() . "/build/options.json");
$options = json_decode($string, true);
$string = file_get_contents(get_stylesheet_directory() . "/build/assets.json");
$options['files'] = json_decode($string, true);
