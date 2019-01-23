<?php
/*WordPress Settings API Demo*/

function display_social_options()
{
    //section name, display name, callback to print description of section, page to which section is attached.
    add_settings_section("social_section", "Social", function(){ ?> 

        Use whole URLs 

    <?php }, "mint-options");

    mint_generate_field('mint-options', 'social_section', 'Facebook', 'facebook_url');
    mint_generate_field('mint-options', 'social_section', 'Twitter', 'twitter_url');
    mint_generate_field('mint-options', 'social_section', 'Pinterest', 'pinterest_url');
    mint_generate_field('mint-options', 'social_section', 'Instagram', 'instagram_url');
}

//this action is executed after loads its core, after registering all actions, finds out what page to execute and before producing the actual output(before calling any action callback)
add_action("admin_init", "display_social_options");