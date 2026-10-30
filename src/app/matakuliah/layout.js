
import { Suspense } from "react";
import ActiveNav from "./ActiveNav";

export default function MataKuliahLayout({ children }) {
  return (
    <div>
      <h1>Portal Mata Kuliah</h1>

      <Suspense fallback={<p>Memuat navigasi...</p>}>
        <ActiveNav />
      </Suspense>

      <main>{children}</main>
    </div>
  );
}
