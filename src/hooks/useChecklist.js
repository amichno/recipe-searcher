import { useState } from "react";

export function useChecklist() {
  const [checked, setChecked] = useState({});

  const toggle = (index) => {
    setChecked((current) => ({ ...current, [index]: !current[index] }));
  };

  const isChecked = (index) => Boolean(checked[index]);

  return { toggle, isChecked };
}
