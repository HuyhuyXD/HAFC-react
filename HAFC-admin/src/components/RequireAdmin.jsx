// RequireAdmin.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

function RequireAdmin({ children }) {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      const email = JSON.parse(localStorage.getItem("user"))?.email;
      if (!email) {
        navigate("/login");
        return;
      }

      const { data } = await supabase.from("admins").select("*").eq("email", email);
      if (data.length === 0) {
        navigate("/dashboard");
      } else {
        setChecking(false);
      }
    };

    checkAdmin();
  }, []);

  return checking ? null : children;
}

export default RequireAdmin;
