import Image from "next/image";

import { Logout } from "@/widgets/auth";

export const AuthHeader = () => {
  return (
    <header className="flex justify-between items-center px-14 py-4 border-b-2">
      <div className="flex items-center gap-4">
        <Image width={40} height={40} src="/logo.svg" alt="Logo" />
        <h4 className="text-sky-500/100">WebRTC</h4>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Logout />
          </li>
        </ul>
      </nav>
    </header>
  );
};
