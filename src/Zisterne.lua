(in_pump,in_floatswitch_top,in_floatswitch_middle,in_floatswitch_bottom,in_pump_active,in_pump_override) -- Automatisch generiert

if in_floatswitch_bottom == 1 or in_pump_override == 1 then
  out_pump = in_pump
else
  out_pump = 0
end

out_failure = 0
if in_floatswitch_top == 1 and in_floatswitch_middle == 1 and in_floatswitch_bottom == 1 then
  out_r = 100
  out_g = 0
  out_b = 0
elseif in_floatswitch_top == 0 and in_floatswitch_middle == 1 and in_floatswitch_bottom == 1 then
  out_r = 100
  out_g = 40
  out_b = 0
elseif in_floatswitch_top == 0 and in_floatswitch_middle == 0 and in_floatswitch_bottom == 1 then
  out_r = 0
  out_g = 0
  out_b = 0
elseif in_floatswitch_top == 0 and in_floatswitch_middle == 0 and in_floatswitch_bottom == 0 then
  out_r = 0
  out_g = 20
  out_b = 10
else
  out_r = 255
  out_g = 0
  out_b = 255
  out_failure = 1
end

out_alarm = in_floatswitch_top

return out_pump,out_r,out_g,out_b,out_alarm,out_failure end  -- Automatisch generiert