<?php
/*WordPress Settings API Demo*/

function display_copyright_options()
{
    //section name, display name, callback to print description of section, page to which section is attached.
    add_settings_section("copyright_section", "Copyrights", function(){
        // secton descriptions here

    }, "mint-options");

    //setting name, display name, callback to print form element, page in which field is displayed, section to which it belongs.
    //last field section is optional.
    add_settings_field("copyrights", "Copyrights Text", function(){
    //id and name of form element should be same as the setting name.
    ?>
        <input type="text" name="copyrights" id="copyrights" value="<?php echo get_option('copyrights'); ?>" />
    <?php
    }, "mint-options", "copyright_section");
    add_settings_field("copyrights-url", "Copyrights Url", function() {
    //id and name of form element should be same as the setting name.
    ?>
        <input type="text" name="copyrights-url" id="copyrights-url" value="<?php echo get_option('copyrights-url'); ?>" />
    <?php
    }, "mint-options", "copyright_section");

    //section name, form element name, callback for sanitization
    register_setting("copyright_section", "copyrights");
    register_setting("copyright_section", "copyrights-url");
}

//this action is executed after loads its core, after registering all actions, finds out what page to execute and before producing the actual output(before calling any action callback)
add_action("admin_init", "display_copyright_options");