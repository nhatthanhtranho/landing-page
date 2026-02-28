export const dynamic = "force-static";

import {
  Globe,
  Apple,
  Play,
  Facebook,
} from "lucide-react";

import { FaDiscord } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://nhatthanhtranho.github.io/landing-page/bg.webp')",
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <main className="relative min-h-dvh flex items-center justify-center px-4 py-8">
        <div
          className="
            relative
            w-full
            max-w-sm sm:max-w-md lg:max-w-lg
            rounded-3xl
            bg-white/10
            backdrop-blur-2xl
            border border-white/20
            shadow-[0_25px_80px_rgba(0,0,0,0.7)]
            p-5 sm:p-6
            flex flex-col
          "
        >
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

          {/* Header */}
          <div className="relative flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-[2px] shadow-xl">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-black">
                <img
                  src="https://nhatthanhtranho.github.io/landing-page/icon.webp"
                  alt="Icon Ngọc Tiêu Các"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-yellow-300 tracking-wide drop-shadow-xl">
              Ngọc Tiêu Các
            </h1>
          </div>

          {/* Buttons */}
          <div className="relative space-y-3 sm:space-y-4">
            <LandingButton
              href="https://ngoctieucac.org"
              text="Truy cập Website"
              icon={<Globe size={18} />}
            />

            <LandingButton
              href="#"
              text="Tải ứng dụng iPhone/iPad"
              icon={<Apple size={18} />}
            />

            <LandingButton
              href="#"
              text="Tải ứng dụng Android"
              icon={<Play size={18} />}
            />

            <LandingButton
              href="https://facebook.com/@itruyenchu"
              text="Liên hệ hỗ trợ"
              icon={<Facebook size={18} />}
            />

            <LandingButton
              href="https://discord.gg/VQuVg7XU"
              text="Tham gia Discord"
              icon={<FaDiscord size={18} />}
              discord
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function LandingButton({
  href,
  text,
  icon,
  discord,
}: {
  href: string;
  text: string;
  icon: React.ReactNode;
  discord?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        relative
        flex items-center justify-between
        rounded-2xl
        px-4 sm:px-5
        py-3 sm:py-4
        text-sm sm:text-base
        transition-all duration-300
        shadow-[0_8px_30px_rgba(0,0,0,0.4)]
        hover:shadow-[0_15px_45px_rgba(0,0,0,0.6)]
        active:scale-[0.98]
        ${discord
          ? "bg-[#5865F2] text-white"
          : "bg-white/90 backdrop-blur-md"
        }
      `}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/30 to-transparent opacity-20 pointer-events-none" />

      <span
        className={`relative font-medium ${
          discord ? "text-white" : "text-gray-800"
        }`}
      >
        {text}
      </span>

      <div
        className={`
          relative
          w-8 h-8 sm:w-9 sm:h-9
          rounded-full flex items-center justify-center
          transition-all duration-300
          ${discord
            ? "bg-white/20 text-white group-hover:bg-white/30"
            : "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-200"
          }
        `}
      >
        {icon}
      </div>
    </a>
  );
}
