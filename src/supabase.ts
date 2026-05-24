import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
"https://oqsbcqigydvkkmuljxqi.supabase.co";

const supabaseKey =
"sb_publishable_qQmyP-RCdHfWOJoOkG2low_NYP8pfcI";

export const supabase =
createClient(
  supabaseUrl,
  supabaseKey
);