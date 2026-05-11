import { FiBell, FiSearch } from "react-icons/fi";

const AdminTopbar = () => {
  return (
    <header className="sticky top-0 z-40 flex h-topbar items-center justify-between border-b border-border bg-white px-6">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-2 w-[320px]">
        <FiSearch className="text-textSecondary" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative rounded-xl bg-background p-3 hover:bg-slate-200 transition">
          <FiBell size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-semibold">
            A
          </div>

          <div>
            <p className="font-medium text-textPrimary">
              Admin
            </p>

            <p className="text-sm text-textSecondary">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminTopbar;