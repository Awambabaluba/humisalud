export function BreezeBackground() {
  const particles = [
    { top: "12%", left: "8%", size: 8, delay: "0s", duration: "18s", tone: "primary" },
    { top: "22%", left: "72%", size: 5, delay: "3s", duration: "20s", tone: "affiliate" },
    { top: "34%", left: "18%", size: 4, delay: "7s", duration: "22s", tone: "primary" },
    { top: "46%", left: "83%", size: 7, delay: "1s", duration: "19s", tone: "sage" },
    { top: "58%", left: "28%", size: 6, delay: "5s", duration: "24s", tone: "primary" },
    { top: "69%", left: "76%", size: 4, delay: "9s", duration: "21s", tone: "affiliate" },
    { top: "82%", left: "13%", size: 5, delay: "2s", duration: "23s", tone: "sage" },
    { top: "88%", left: "58%", size: 7, delay: "6s", duration: "25s", tone: "primary" },
    { top: "18%", left: "43%", size: 3, delay: "11s", duration: "17s", tone: "sage" },
    { top: "74%", left: "39%", size: 3, delay: "13s", duration: "19s", tone: "primary" },
  ];

  return (
    <div
      aria-hidden
      className="breeze-particle-bg pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <svg className="breeze-lines" viewBox="0 0 1440 960" preserveAspectRatio="none">
        <path d="M-120 115 C 170 78, 340 168, 585 126 S 1005 58, 1560 104" />
        <path d="M-160 255 C 120 214, 310 286, 555 246 S 1040 177, 1600 232" />
        <path d="M-140 408 C 145 363, 315 464, 575 416 S 1045 320, 1580 384" />
        <path d="M-180 585 C 110 548, 300 620, 560 580 S 1030 505, 1620 548" />
        <path d="M-120 760 C 150 705, 345 805, 610 748 S 1060 670, 1560 720" />
        <path className="breeze-line-warm" d="M-180 850 C 140 795, 390 890, 690 830 S 1140 765, 1600 812" />
      </svg>

      <div className="breeze-streams">
        <span />
        <span />
        <span />
      </div>

      {particles.map((particle, index) => (
        <span
          key={index}
          className={`breeze-particle breeze-particle-${particle.tone}`}
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      <div className="breeze-soft-grain" />
    </div>
  );
}
