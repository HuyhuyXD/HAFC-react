
import { supabase } from '@/supabaseClient';

export const getConfigValue = async (key) => {
  const { data, error } = await supabase
    .from('config')
    .select('value')
    .eq('key', key)
    .single();

  if (error) {
    console.error("Lỗi khi fetch config:", error);
    return null;
  }

  return data?.value || null;
};

