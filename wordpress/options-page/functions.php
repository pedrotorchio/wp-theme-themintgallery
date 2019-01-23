<?php

function mint_generate_field($page, $section, $title, $name) {
    //setting name, display name, callback to print form element, page in which field is displayed, section to which it belongs.
    //last field section is optional.

    add_settings_field($name, $title, function() use ($name){
        //id and name of form element should be same as the setting name.
        ?>
            <input type="text" name="<?php echo $name ?>" id="<?php echo $name ?>" value="<?php echo get_option($name); ?>" />
        <?php
        }, $page, $section);    
    register_setting($section, $name);
}

require_once( get_stylesheet_directory() . '/wordpress/options-page/menu-items.php' );
require_once( get_stylesheet_directory() . '/wordpress/options-page/copyrights.php' );
require_once( get_stylesheet_directory() . '/wordpress/options-page/social-media.php' );
