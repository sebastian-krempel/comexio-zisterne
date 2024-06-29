var appb2mcuvr42k_visul93d764ps6 = function (dbmId) {
    var self = this;
    var level_top = 0;
    var level_middle = 0;
    var level_bottom = 0;
    var pump_active = 0;
    var pump_override = 0;
    var pump = 0
    var alarm = 0;
    var failure = 0;
    var my_svg = undefined;
    var render = function () {
        if(failure==1) {
            my_svg.find('#cistern_tank_failure').css('visibility', 'visible');
            my_svg.find('#cistern_tank_level').css('transform', 'translateY(70px)');          
            my_svg.find('#cistern_tank_back').css('fill', '#ff00ff');
        } else {
            my_svg.find('#cistern_tank_failure').css('visibility', 'hidden');
            if(level_top==1) {
                my_svg.find('#cistern_tank_level').css('transform', 'translateY(0px)');
                my_svg.find('#cistern_tank_back').css('fill', '#d40000');
            } else if(level_middle==1) {
                my_svg.find('#cistern_tank_level').css('transform', 'translateY(20px)');
                my_svg.find('#cistern_tank_back').css('fill', '#ffcc00');
            } else if(level_bottom==1) {
                my_svg.find('#cistern_tank_level').css('transform', 'translateY(60px)');
                my_svg.find('#cistern_tank_back').css('fill', '#000000');
            } else {
                my_svg.find('#cistern_tank_level').css('transform', 'translateY(120px)');
                my_svg.find('#cistern_tank_back').css('fill', '#000000');
            }
        }
        my_svg.find('#cistern_tank_alarm').css('visibility', alarm==1?'visible':'hidden');

        my_svg.find('#cistern_pump_camber').css('fill', pump==1?'url(#gradsignal)':'#000000');
        my_svg.find('#cistern_pump_pipe').css('fill', pump_active==1?'url(#gradsignal)':'#000000');
        my_svg.find('#cistern_pump_warn').css('visibility', pump_override==1?'visible':'hidden');
        my_svg.find('#cistern_pump_lock').css('visibility', level_bottom==0&&pump_override==0?'visible':'hidden');
        my_svg.find('#cistern_pump_rotor').css('visibility', pump==1||pump_active==1?'visible':'hidden');
        my_svg.find('#cistern_pump_rotor').css('animation-play-state', pump_active==1?'running':'paused');
    }
    this.read = function (dbmId, curr_value, pos) {
        switch (pos) {
            case undefined:
            case 0:
                level_top = parseInt(curr_value);
                break;
            case 1:
                level_middle = parseInt(curr_value);
                break;
            case 2:
                level_bottom = parseInt(curr_value);
                break;
            case 3:
                pump_active = parseInt(curr_value);
                break;
            case 4:
                pump_override = parseInt(curr_value);
                break;
            case 5:
                pump = parseInt(curr_value);
                break;
            case 6:
                alarm = parseInt(curr_value);
                break;
            case 7:
                failure = parseInt(curr_value);
                break;
        }
        render();
    }
    this.init = function (dbmId, data) {
        my_svg = $("#dmid_" + dbmId).find("svg");
    }
}