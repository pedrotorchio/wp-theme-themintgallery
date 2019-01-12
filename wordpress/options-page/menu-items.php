<?php
    /*WordPress Menus API.*/
    function add_new_menu_items()
    {
        //add a new menu item. This is a top level menu item i.e., this menu item can have sub menus
        add_menu_page(
            "Mint Options", //Required. Text in browser title bar when the page associated with this menu item is displayed.
            "Mint Options", //Required. Text to be displayed in the menu.
            "manage_options", //Required. The required capability of users to access this menu item.
            "mint-options", //Required. A unique identifier to identify this menu item.
            "mint_options_page", //Optional. This callback outputs the content of the page associated with this menu item.
            "dashicons-admin-site",
            3
        );

    }

    function mint_options_page()
    {
        ?>
            <div class="wrap">
            <div id="icon-options-general" class="icon32"></div>
            <h1>Mint Options</h1>
            <form method="post" action="options.php">
                <?php
                
                    //add_settings_section callback is displayed here. For every new section we need to call settings_fields.
                    settings_fields("header_section");
                    
                    // all the add_settings_field callbacks is displayed here
                    do_settings_sections("mint-options");
                
                    // Add the submit button to serialize the options
                    submit_button(); 
                    
                ?>          
            </form>
        </div>
        <?php
    }

    //this action callback is triggered when wordpress is ready to add new items to menu.
    add_action("admin_menu", "add_new_menu_items");


    /*WordPress Settings API Demo*/

    function display_options()
    {
        //section name, display name, callback to print description of section, page to which section is attached.
        add_settings_section("header_section", "Header Options", function(){
            // secton descriptions here

        }, "mint-options");

        //setting name, display name, callback to print form element, page in which field is displayed, section to which it belongs.
        //last field section is optional.
        add_settings_field("copyrights", "Copyrights", function(){
        //id and name of form element should be same as the setting name.
        ?>
            <input type="text" name="copyrights" id="copyrights" value="<?php echo get_option('copyrights'); ?>" />
        <?php
        }, "mint-options", "header_section");
        add_settings_field("copyrights-url", "Copyrights Url", function() {
        //id and name of form element should be same as the setting name.
        ?>
            <input type="text" name="copyrights-url" id="copyrights-url" value="<?php echo get_option('copyrights-url'); ?>" />
        <?php
        }, "mint-options", "header_section");

        //section name, form element name, callback for sanitization
        register_setting("header_section", "copyrights");
        register_setting("header_section", "copyrights-url");
    }

    //this action is executed after loads its core, after registering all actions, finds out what page to execute and before producing the actual output(before calling any action callback)
    add_action("admin_init", "display_options");